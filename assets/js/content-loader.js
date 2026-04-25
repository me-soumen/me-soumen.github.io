/** Applies `window.SITE_CONTENT` to the static HTML. Load before `main.js`. */
(function () {
	"use strict";

	var C = window.SITE_CONTENT;
	if (!C) {
		document.documentElement.setAttribute("data-site-content", "missing");
		console.warn("site-content.js not loaded; skipping content injection.");
		return;
	}

	var F = C.files;

	function getContact() {
		var c = C.contact;
		if (!c) return null;
		var L = C.links;
		if (!L) return c;
		var o = {};
		var k;
		for (k in c) {
			if (Object.prototype.hasOwnProperty.call(c, k)) o[k] = c[k];
		}
		if (!o.email && L.email) o.email = L.email;
		if (o.emailAlt == null && L.emailAlt) o.emailAlt = L.emailAlt;
		if (!o.website && L.website) o.website = L.website;
		if (!o.github && L.github) o.github = L.github;
		if (!o.linkedin && L.linkedin) o.linkedin = L.linkedin;
		if ((o.websiteText == null || o.websiteText === "") && L.websiteLabel) o.websiteText = L.websiteLabel;
		if ((o.githubText == null || o.githubText === "") && L.githubLabel) o.githubText = L.githubLabel;
		if ((o.linkedinText == null || o.linkedinText === "") && L.linkedinLabel) o.linkedinText = L.linkedinLabel;
		return o;
	}

	function buildNavListHtml() {
		var N = C.nav;
		if (!N || !N.items || !N.items.length) return "";
		var h = "";
		for (var i = 0; i < N.items.length; i++) {
			var it = N.items[i];
			var ac = i === 0 ? " is-current" : "";
			h += '<li class="sm-nav-item">';
			h += '<a href="' + it.href + '" class="sm-nav-link' + ac + '">';
			h += '<i class="uil ' + it.icon + ' sm-nav-icon"></i> ' + (it.label != null ? it.label : "");
			h += "</a></li>";
		}
		return h;
	}

	function getFooterLinkItems() {
		if (C.footer && C.footer.items !== undefined && C.footer.items !== null) {
			return C.footer.items;
		}
		if (C.nav && C.nav.items) return C.nav.items;
		return [];
	}

	function buildFooterLinksHtml() {
		var items = getFooterLinkItems();
		if (!items.length) return "";
		var h = "";
		for (var i = 0; i < items.length; i++) {
			var it = items[i];
			var href = it.href != null && String(it.href).trim() ? String(it.href).trim() : "#";
			var label = it.label != null ? String(it.label) : "";
			h += "<li><a href=\"" + href + '" class="sm-footer-link">' + label + "</a></li>";
		}
		return h;
	}

	function setMeta(name, content) {
		if (!content) return;
		if (name === "title") {
			document.title = content;
			return;
		}
		var el = document.querySelector('meta[name="' + name + '"]');
		if (el) el.setAttribute("content", content);
	}

	function applyTheme(theme) {
		if (!theme || typeof theme !== "object") return;
		var r = document.documentElement;
		var p = theme.primary != null ? String(theme.primary).trim() : "";
		if (p) {
			r.style.setProperty("--first-color", p);
			var sec =
			theme.primarySecond != null && String(theme.primarySecond).trim()
				? String(theme.primarySecond).trim()
				: p;
			r.style.setProperty("--first-color-second", sec);
		}
		if (theme.primaryAlt != null && String(theme.primaryAlt).trim()) {
			r.style.setProperty("--first-color-alt", String(theme.primaryAlt).trim());
		}
		if (theme.primaryLighter != null && String(theme.primaryLighter).trim()) {
			r.style.setProperty("--first-color-lighter", String(theme.primaryLighter).trim());
		}
		if (theme.bodyBg != null && String(theme.bodyBg).trim()) {
			r.style.setProperty("--body-color", String(theme.bodyBg).trim());
		}
		if (theme.footerCopy != null && String(theme.footerCopy).trim()) {
			r.style.setProperty("--footer-copy-color", String(theme.footerCopy).trim());
		}
		r.style.setProperty("--swiper-theme-color", "var(--first-color)");
		if (theme.themeColorMeta != null && String(theme.themeColorMeta).trim()) {
			setMeta("theme-color", String(theme.themeColorMeta).trim());
		}
	}

	function qualificationDateLine(it) {
		var a = it.from != null && it.from !== undefined ? String(it.from).trim() : "";
		var b = it.to != null && it.to !== undefined ? String(it.to).trim() : "";
		if (a && b) return a + " \u2013 " + b;
		if (a) return b ? a + " \u2013 " + b : a + " \u2013 Present";
		if (b) return b;
		if (it.date != null && String(it.date).trim()) return String(it.date).trim();
		return "";
	}

	function qualificationMetaRow(iconClass, text) {
		if (text == null || !String(text).trim()) return "";
		return (
		'<div class="sm-qualification-meta">' +
		'<i class="uil ' +
		iconClass +
		' sm-qualification-meta-icon"></i>' +
		'<span class="sm-qualification-meta-text">' +
		String(text) +
		"</span>" +
		"</div>"
		);
	}

	function qualificationItemBody(it, kind) {
		var h =
		'<h3 class="sm-qualification-title">' +
		(it.title != null ? it.title : "") +
		"</h3>";

		if (kind === "work") {
			var company =
			it.company && String(it.company).trim()
				? String(it.company)
				: it.subtitle != null
				? String(it.subtitle)
				: "";
			h += qualificationMetaRow("uil-briefcase-alt", company);
			if (it.client && String(it.client).trim()) {
				h += qualificationMetaRow("uil-link", "Client: " + String(it.client).trim());
			}
			h += qualificationMetaRow("uil-map-marker", it.location);
			h += qualificationMetaRow("uil-calendar-alt", qualificationDateLine(it));
			h += qualificationMetaRow("uil-layers-alt", it.techStack);
		} else {
			h += qualificationMetaRow("uil-graduation-cap", it.subtitle);
			h += qualificationMetaRow("uil-map-marker", it.location);
			h += qualificationMetaRow("uil-calendar-alt", qualificationDateLine(it));
		}
		return h;
	}

	function qualRowLeft(it, kind) {
		return (
		'<div class="sm-qualification-data">' +
		"<div>" +
		qualificationItemBody(it, kind) +
		"</div>" +
		"<div>" +
		'<span class="sm-qualification-rounder"></span>' +
		'<span class="sm-qualification-line"></span>' +
		"</div>" +
		"</div>"
		);
	}

	function qualRowRight(it, isLast, kind) {
		var line = isLast
			? '<span class="sm-qualification-rounder"></span>'
			: '<span class="sm-qualification-rounder"></span><span class="sm-qualification-line"></span>';
		return (
		'<div class="sm-qualification-data">' +
		"<div></div>" +
		"<div>" +
		line +
		"</div>" +
		"<div>" +
		qualificationItemBody(it, kind) +
		"</div>" +
		"</div>"
		);
	}

	function buildQualificationHtml(items, kind) {
		if (!items || !items.length) return "";
		var k = kind === "education" ? "education" : "work";
		var html = "";
		for (var i = 0; i < items.length; i++) {
			var it = items[i];
			if (i % 2 === 0) {
				html += qualRowLeft(it, k);
			} else {
				html += qualRowRight(it, i === items.length - 1, k);
			}
		}
		return html;
	}

	var SKILL_BAR_FALLBACK = {
		html: 90,
		css: 80,
		js: 70,
		react: 85,
		php: 90,
		node: 70,
		firebase: 60,
		python: 65,
		figma: 60,
		sketch: 70,
		photoshop: 80
	};

	function skillPercentValue(sk) {
		if (sk.percent != null && sk.percent !== "") {
			var n = parseInt(String(sk.percent).replace(/%/g, "").trim(), 10);
			if (!isNaN(n)) return Math.max(0, Math.min(100, n));
		}
		if (sk.bar && SKILL_BAR_FALLBACK[sk.bar] != null) return SKILL_BAR_FALLBACK[sk.bar];
		return 50;
	}

	function buildSkillsHtml() {
		var groups = C.techStackGroups;
		var h = "";
		for (var g = 0; g < groups.length; g++) {
			var G = groups[g];
			var openClass = G.open ? "is-open" : "is-hidden";
			h += '<div class="sm-techstack-content ' + openClass + '">';
			h += '<div class="sm-techstack-header">';
			h += '<i class="uil ' + G.icon + ' sm-techstack-icon"></i><div>';
			h += '<h1 class="sm-techstack-title">' + G.title + "</h1>";
			h += '<span class="sm-techstack-subtitle">' + G.subtitle + "</span></div>";
			h += '<i class="uil uil-angle-down sm-techstack-arrow"></i></div>';
			h += '<div class="sm-techstack-list grid">';
			for (var s = 0; s < G.skills.length; s++) {
				var sk = G.skills[s];
				var pct = skillPercentValue(sk);
				h += '<div class="sm-techstack-data"><div class="sm-techstack-titles">';
				h += '<h3 class="sm-techstack-name">' + sk.name + "</h3>";
				h += '<span class="sm-techstack-number">' + pct + "%</span></div>";
				h +=
				'<div class="sm-techstack-bar"><span class="sm-techstack-percentage" style="width: ' +
				pct +
				'%"></span></div></div>';
			}
			h += "</div></div>";
		}
		return h;
	}

	function buildProjectsHtml() {
		var S = C.projects;
		if (!S || !S.items || !S.items.length) return "";
		var html = '<div class="sm-projects-accordion">';
		for (var i = 0; i < S.items.length; i++) {
			var it = S.items[i];
			//var openClass = i === 0 ? "" : "";
			//var expanded = i === 0 ? "false" : "false";
			var openClass = "";
			var expanded = "false";
			html += '<div class="sm-projects-item' + openClass + '">';
			html += '<button class="sm-projects-header" aria-expanded="' + expanded + '">';
			html += '<div class="sm-projects-header-info">';
			if (it.tabIcon) html += '<i class="uil ' + it.tabIcon + '" aria-hidden="true"></i>';
			//html += '<span>' + (it.tab || it.company || "Project " + (i + 1)) + "</span>";
			html += '<span>' + (it.tab || "") + "</span>";
			html += "</div>";
			html += '<i class="uil uil-plus sm-projects-arrow" aria-hidden="true"></i>';
			html += "</button>";
			html += '<div class="sm-projects-body"><div class="sm-project-detail">';

			html += '<div class="sm-project-header">';
			html += '<h3 class="sm-project-title">' + (it.title || "") + "</h3>";
			html += '<div class="sm-project-meta">';
			if (it.role) html += '<span class="sm-project-meta-item"><i class="uil uil-briefcase-alt"></i>' + it.role + "</span>";
			if (it.company) html += '<span class="sm-project-meta-item"><i class="uil uil-building"></i>' + it.company + "</span>";
			if (it.period) html += '<span class="sm-project-meta-item"><i class="uil uil-calendar-alt"></i>' + it.period + "</span>";
			html += "</div></div>";

			if (it.metrics && it.metrics.length) {
				html += '<div class="sm-project-metrics">';
				for (var m = 0; m < it.metrics.length; m++) {
					var met = it.metrics[m];
					html += '<div class="sm-project-metric"><span class="sm-project-metric-value">' + met.value + '</span><span class="sm-project-metric-label">' + met.label + "</span></div>";
				}
				html += "</div>";
			}

			if (it.lines && it.lines.length) {
				html += '<ul class="sm-project-achievements">';
				for (var b = 0; b < it.lines.length; b++) {
					html += '<li class="sm-project-achievement"><i class="uil uil-check-circle sm-project-achievement-icon"></i><p>' + it.lines[b] + "</p></li>";
				}
				html += "</ul>";
			}

			if (it.techTags && it.techTags.length) {
				html += '<div class="sm-project-tags">';
				for (var t = 0; t < it.techTags.length; t++) {
					html += '<span class="sm-project-tag">' + it.techTags[t] + "</span>";
				}
				html += "</div>";
			}

			html += "</div></div></div>";
		}
		html += "</div>";
		return html;
	}

	function buildWeekendProjectSlides() {
		var P = C.weekendProjects;
		if (!P || !P.projects || !P.projects.length) return "";
		var h = "";
		for (var i = 0; i < P.projects.length; i++) {
			var p = P.projects[i];
			var btn =
			p.projectButton != null && String(p.projectButton).trim() !== ""
				? p.projectButton
				: (P.defaultProjectButton != null && P.defaultProjectButton !== "" ? P.defaultProjectButton : "GitHub");
			h += '<div class="sm-showcase-item grid swiper-slide">';
			h += '<img src="' + p.image + '" alt="' + p.imageAlt + '" class="sm-portfolio-img">';
			h += '<div class="sm-portfolio-data">';
			h += '<h3 class="sm-portfolio-title">' + p.title + "</h3>";
			h += '<p class="sm-portfolio-description">' + p.description + "</p>";
			h +=
			'<a href="' +
			p.linkUrl +
			'" target="_blank" rel="noopener noreferrer" class="button button--flex button--small sm-portfolio-button">' +
			btn +
			'<i class="uil uil-arrow-right sm-button-icon"></i></a>';
			h += "</div></div>";
		}
		return h;
	}

	function getHighlightsBlock() {
		return C.highlights || C.achievements;
	}

	function highlightIconClass(item) {
		if (!item || item.icon == null || String(item.icon).trim() === "") return "";
		var raw = String(item.icon).trim();
		if (raw.indexOf("uil ") === 0 || raw.indexOf("uil-") === 0) {
			return raw.indexOf("uil ") === 0 ? raw : "uil " + raw;
		}
		return "uil " + raw;
	}

	function buildHighlightsSlides() {
		var A = getHighlightsBlock();
		if (!A || !A.items || !A.items.length) return "";
		var h = "";
		for (var i = 0; i < A.items.length; i++) {
			var t = A.items[i];
			var uic = highlightIconClass(t);
			h += '<div class="sm-achievements-slide swiper-slide">';
			h += '<div class="sm-achievements-meta">';
			h += '<div class="sm-achievements-head">';
			if (uic) {
				h += '<i class="' + uic + ' sm-achievements-icon" aria-hidden="true"></i>';
			} else if (t.image) {
				h += '<img src="' + t.image + '" alt="" class="sm-achievements-img">';
			} else {
				h += '<i class="uil uil-star sm-achievements-icon" aria-hidden="true"></i>';
			}
			h += "<div><h3 class=\"sm-achievements-name\">" + t.what + "</h3>";
			h += '<span class="sm-achievements-where">' + t.where + "</span></div></div>";
			h += "</div>";
			h += '<p class="sm-achievements-text">' + t.details + "</p></div>";
		}
		return h;
	}

	function run() {
		try {
			applyTheme(C.theme);
			setMeta("title", C.meta.title);
			setMeta("description", C.meta.description);

			var K = getContact();
			if (!K) {
				throw new Error("contact is required in SITE_CONTENT");
			}

			var brand = document.querySelector(".sm-nav-logo");
			if (brand) brand.textContent = C.header.brand;

			var navList = document.querySelector(".sm-nav-list");
			if (navList && C.nav && C.nav.items && C.nav.items.length) {
				navList.innerHTML = buildNavListHtml();
			}

			if (C.hero.profileImage) {
				var img = document.querySelector(".sm-home-blob-img");
				if (img) img.setAttribute("href", C.hero.profileImage);
			}
			var ht = document.querySelector(".sm-home-title");
			if (ht) ht.textContent = C.hero.title;
			var hasDesc =
			C.hero.description != null && String(C.hero.description).trim() !== "";
			var hs = document.querySelector(".sm-home-subtitle");
			if (hs) {
				var h3Text = "";
				if (hasDesc) {
					h3Text =
					C.hero.subtitle != null && String(C.hero.subtitle).trim() !== ""
						? String(C.hero.subtitle)
						: C.hero.role != null && String(C.hero.role).trim() !== ""
						? String(C.hero.role)
						: "";
				} else {
					var forH3 = [C.hero.role, C.hero.h3, C.hero.headline, C.hero.kicker];
					for (var hi = 0; hi < forH3.length; hi++) {
						if (forH3[hi] != null && String(forH3[hi]).trim() !== "") {
							h3Text = String(forH3[hi]);
							break;
						}
					}
				}
				if (h3Text) hs.textContent = h3Text;
			}
			var hDescription = document.querySelector(".sm-home-description");
			if (hDescription) {
				var heroBody = hasDesc
					? String(C.hero.description)
					: C.hero.subtitle != null && String(C.hero.subtitle).trim() !== ""
					? String(C.hero.subtitle)
					: "";
				if (heroBody) hDescription.textContent = heroBody;
			}
			var hTagline = document.querySelector(".sm-home-tagline");
			if (hTagline) {
				if (C.hero.tagline != null && String(C.hero.tagline).trim() !== "") {
					hTagline.textContent = C.hero.tagline;
					hTagline.removeAttribute("hidden");
				} else hTagline.hidden = true;
			}
			var hbtn = document.querySelector(".sm-home-data .button");
			if (hbtn) {
				var pLabel, pHref, iconClass;
				if (C.hero.primaryButton != null && String(C.hero.primaryButton).trim() !== "") {
					pLabel = String(C.hero.primaryButton).trim();
					pHref =
					C.hero.primaryButtonHref != null && String(C.hero.primaryButtonHref).trim() !== ""
						? String(C.hero.primaryButtonHref).trim()
						: "#profile";
					var pIcon = C.hero.primaryButtonIcon;
					iconClass = "uil-rocket";
					if (pIcon != null && String(pIcon).trim() !== "") {
						iconClass = String(pIcon).trim();
						if (iconClass.indexOf("uil-") === -1) iconClass = "uil-" + iconClass;
					}
				} else if (C.hero.contactButton != null && String(C.hero.contactButton).trim() !== "") {
					pLabel = String(C.hero.contactButton).trim();
					pHref = "#contact";
					iconClass = "uil-message";
				} else {
					pLabel = "Explore";
					pHref = "#profile";
					iconClass = "uil-rocket";
				}
				hbtn.setAttribute("href", pHref);
				hbtn.textContent = "";
				hbtn.appendChild(document.createTextNode(pLabel));
				var btnIco = document.createElement("i");
				btnIco.setAttribute("class", "uil " + iconClass + " sm-button-icon");
				hbtn.appendChild(btnIco);
			}
			var hscroll = document.querySelector(".sm-home-scroll-name");
			if (hscroll) hscroll.textContent = C.hero.scrollHint;

			var sLinks = document.querySelectorAll(".sm-home-social a");
			if (sLinks[0] && K.linkedin) sLinks[0].setAttribute("href", K.linkedin);
			if (sLinks[1] && K.github) sLinks[1].setAttribute("href", K.github);
			if (sLinks[2] && K.website) sLinks[2].setAttribute("href", K.website);
			if (sLinks[3] && K.email) sLinks[3].setAttribute("href", "mailto:" + K.email);

			var aboutSec = document.querySelector("#profile .sm-section-title");
			if (aboutSec) aboutSec.textContent = C.about.sectionTitle;
			var aboutSub = document.querySelector("#profile .sm-section-subtitle");
			if (aboutSub) aboutSub.textContent = C.about.sectionSubtitle;
			var aboutImg = document.querySelector(".sm-about-img");
			if (aboutImg) {
				aboutImg.setAttribute("src", C.about.image);
				aboutImg.setAttribute("alt", C.about.imageAlt);
			}
			var aboutP = document.querySelector(".sm-about-description");
			if (aboutP) aboutP.innerHTML = C.about.bodyHtml;
			var stats = document.querySelectorAll(".sm-about-info > div");
			for (var sti = 0; sti < C.about.stats.length && sti < stats.length; sti++) {
				var stat = C.about.stats[sti];
				var tEl = stats[sti].querySelector(".sm-about-info-title");
				var nEl = stats[sti].querySelector(".sm-about-info-name");
				if (tEl) tEl.textContent = stat.value;
				if (nEl) {
					var l1 = stat.labelLine1 != null ? String(stat.labelLine1) : "";
					var l2 = stat.labelLine2 != null ? String(stat.labelLine2).trim() : "";
					nEl.innerHTML = l2 ? l1 + " <br> " + l2 : l1;
				}
			}
			var resumeA = document.querySelector(".sm-about-buttons a");
			if (resumeA) {
				resumeA.setAttribute("href", F.resumePath);
				resumeA.setAttribute("download", F.resumeDownloadName);
				resumeA.innerHTML = C.about.resumeButton + '<i class="uil uil-download-alt sm-button-icon"></i>';
			}

			var skTitle = document.querySelector("#tech-stack .sm-section-title");
			if (skTitle) skTitle.textContent = C.techStack.sectionTitle;
			var skSub = document.querySelector("#tech-stack .sm-section-subtitle");
			if (skSub) skSub.textContent = C.techStack.sectionSubtitle;
			var skCont = document.querySelector(".sm-techstack-container");
			if (skCont) skCont.innerHTML = buildSkillsHtml();

			var Q = C.journey;
			var qSec = document.querySelector(".sm-journey .sm-section-title");
			if (qSec) qSec.textContent = Q.sectionTitle;
			var qSub = document.querySelector(".sm-journey .sm-section-subtitle");
			if (qSub) qSub.textContent = Q.sectionSubtitle;
			var qTabs = document.querySelectorAll(".sm-journey-tab");
			var tabDefs = Q.tabs;
			if (qTabs.length >= 2) {
				if (tabDefs && tabDefs.length >= 2) {
					for (var qti = 0; qti < 2; qti++) {
						var td = tabDefs[qti];
						var pan = td.panel === "education" ? "education" : "work";
						var ic = td.icon && String(td.icon).trim() ? String(td.icon).trim() : (pan === "work" ? "uil-briefcase-alt" : "uil-graduation-cap");
						qTabs[qti].setAttribute("data-target", pan === "education" ? "#journey-education" : "#journey-work");
						qTabs[qti].innerHTML =
						'<i class="uil ' + ic + ' sm-qualification-icon"></i> ' + (td.label != null ? td.label : "");
					}
				} else {
					qTabs[0].setAttribute("data-target", "#journey-work");
					qTabs[0].innerHTML =
					'<i class="uil uil-briefcase-alt sm-qualification-icon"></i> ' + (Q.workTab != null ? Q.workTab : "Experience");
					qTabs[1].setAttribute("data-target", "#journey-education");
					qTabs[1].innerHTML =
					'<i class="uil uil-graduation-cap sm-qualification-icon"></i> ' + (Q.educationTab != null ? Q.educationTab : "Education");
				}
			}
			var edu = document.getElementById("journey-education");
			var wk = document.getElementById("journey-work");
			if (edu) edu.innerHTML = buildQualificationHtml(Q.education, "education");
			if (wk) wk.innerHTML = buildQualificationHtml(Q.work, "work");

			var defPanel = Q.defaultTab === "education" ? "education" : "work";
			if (wk) wk.classList.toggle("is-active", defPanel === "work");
			if (edu) edu.classList.toggle("is-active", defPanel === "education");
			var wantTarget = defPanel === "education" ? "#journey-education" : "#journey-work";
			for (var qj = 0; qj < qTabs.length; qj++) {
				var tsel = qTabs[qj].getAttribute("data-target");
				if (tsel) qTabs[qj].classList.toggle("is-active", tsel === wantTarget);
			}

			var prTitle = document.querySelector("#work .sm-section-title");
			if (prTitle && C.projects) prTitle.textContent = C.projects.sectionTitle;
			var prSub = document.querySelector("#work .sm-section-subtitle");
			if (prSub && C.projects) prSub.textContent = C.projects.sectionSubtitle;
			var prGrid = document.querySelector("#work .sm-projects-container");
			if (prGrid && C.projects) prGrid.innerHTML = buildProjectsHtml();

			var wkTitle = document.querySelector("#portfolio .sm-section-title");
			if (wkTitle && C.weekendProjects) wkTitle.textContent = C.weekendProjects.sectionTitle;
			var wkSub = document.querySelector("#portfolio .sm-section-subtitle");
			if (wkSub && C.weekendProjects) wkSub.textContent = C.weekendProjects.sectionSubtitle;
			var wkWrap = document.querySelector(".sm-portfolio-container .swiper-wrapper");
			if (wkWrap && C.weekendProjects) wkWrap.innerHTML = buildWeekendProjectSlides();

			var pcTitle = document.querySelector(".sm-hiring-title");
			if (pcTitle && C.hiring) pcTitle.textContent = C.hiring.title;
			var pcDesc = document.querySelector(".sm-hiring-text");
			if (pcDesc && C.hiring) pcDesc.textContent = C.hiring.description;
			var pcBtn = document.querySelector(".sm-hiring-content .button");
			if (pcBtn && C.hiring) pcBtn.innerHTML = C.hiring.button + '<i class="uil uil-message sm-button-icon"></i>';
			var pcImg = document.querySelector(".sm-hiring-img");
			if (pcImg && C.hiring) {
				pcImg.setAttribute("src", C.hiring.image);
				pcImg.setAttribute("alt", C.hiring.imageAlt);
			}

			var hi = getHighlightsBlock();
			var teTitle = document.querySelector("#achievements .sm-section-title");
			if (teTitle && hi) teTitle.textContent = hi.sectionTitle;
			var teSub = document.querySelector("#achievements .sm-section-subtitle");
			if (teSub && hi) teSub.textContent = hi.sectionSubtitle;
			var teWrap = document.querySelector(".sm-achievements-slider .swiper-wrapper");
			if (teWrap && hi) teWrap.innerHTML = buildHighlightsSlides();

			var coTitle = document.querySelector("#contact .sm-section-title");
			if (coTitle) coTitle.textContent = K.sectionTitle;
			var coSub = document.querySelector("#contact .sm-section-subtitle");
			if (coSub) coSub.textContent = K.sectionSubtitle;

			var cRows = document.querySelectorAll("#contact .sm-contact-information");
			if (cRows[0]) {
				cRows[0].querySelector(".sm-contact-title").textContent = K.emailLabel;
				cRows[0].querySelector(".sm-contact-subtitle a").textContent = K.email;
				cRows[0].querySelector(".sm-contact-subtitle a").setAttribute("href", "mailto:" + K.email);
			}
			if (cRows[1]) {
				cRows[1].querySelector(".sm-contact-title").textContent =
				K.emailAltLabel != null && K.emailAltLabel !== ""
					? K.emailAltLabel
					: (K.altLabel != null ? K.altLabel : "Alternate");
				cRows[1].querySelector(".sm-contact-subtitle a").textContent = K.emailAlt;
				cRows[1].querySelector(".sm-contact-subtitle a").setAttribute("href", "mailto:" + K.emailAlt);
			}
			if (cRows[2]) {
				cRows[2].querySelector(".sm-contact-title").textContent = K.websiteLabel;
				var aW = cRows[2].querySelector(".sm-contact-subtitle a");
				aW.textContent = K.websiteText != null && K.websiteText !== "" ? K.websiteText : K.website;
				aW.setAttribute("href", K.website);
			}
			if (cRows[3]) {
				cRows[3].querySelector(".sm-contact-title").textContent = K.githubLabel;
				var aG = cRows[3].querySelector(".sm-contact-subtitle a");
				aG.textContent = K.githubText != null && K.githubText !== "" ? K.githubText : (K.github || "GitHub");
				aG.setAttribute("href", K.github);
			}
			if (cRows[4]) {
				cRows[4].querySelector(".sm-contact-title").textContent = K.linkedinLabel;
				var aL = cRows[4].querySelector(".sm-contact-subtitle a");
				aL.textContent = K.linkedinText != null && K.linkedinText !== "" ? K.linkedinText : (K.linkedin || "LinkedIn");
				aL.setAttribute("href", K.linkedin);
			}
			if (cRows[5]) {
				cRows[5].querySelector(".sm-contact-title").textContent =
				K.locationLabel != null && K.locationLabel !== "" ? K.locationLabel : "Location";
				var loc = cRows[5].querySelector(".sm-contact-subtitle");
				if (loc) loc.textContent = K.location != null && K.location !== "" ? K.location : "";
			}

			var formP = document.querySelector(".sm-contact-form .sm-about-description");
			if (formP) formP.textContent = K.formNote;
			var sendA = document.querySelector('.sm-contact-form a[href^="mailto"]');
			if (sendA) {
				sendA.innerHTML = K.sendEmail + '<i class="uil uil-message sm-button-icon"></i>';
				sendA.setAttribute("href", "mailto:" + K.email + "?subject=" + K.emailSubject);
			}
			var downA = document.querySelector('.sm-contact-form a[download]');
			if (downA) {
				downA.setAttribute("href", F.resumePath);
				downA.setAttribute("download", F.resumeDownloadName);
				downA.innerHTML = K.downloadResume + '<i class="uil uil-download-alt sm-button-icon"></i>';
			}

			var ft = document.querySelector(".sm-footer-title");
			if (ft) ft.textContent = C.footer.title;
			var fts = document.querySelector(".sm-footer-subtitle");
			if (fts) fts.textContent = C.footer.subtitle;
			var fLinks = document.querySelector("ul.sm-footer-links");
			if (fLinks) fLinks.innerHTML = buildFooterLinksHtml();
			var fCopy = document.querySelector(".sm-footer-note");
			if (fCopy) fCopy.innerHTML = C.footer.copyHtml;

			var fSoc = document.querySelectorAll(".sm-footer-socials a");
			if (fSoc[0]) fSoc[0].setAttribute("href", K.github);
			if (fSoc[1]) fSoc[1].setAttribute("href", K.linkedin);
			if (fSoc[2]) fSoc[2].setAttribute("href", K.website);
			if (fSoc[3]) fSoc[3].setAttribute("href", "mailto:" + K.email);

			document.documentElement.setAttribute("data-site-content", "applied");
			window.__siteContentReady = true;
		} catch (e) {
			document.documentElement.setAttribute("data-site-content", "error");
			document.documentElement.setAttribute("data-site-content-err", String(e && e.message ? e.message : e));
			console.error("content-loader: failed to apply SITE_CONTENT", e);
		}
	}

	run();
})();

