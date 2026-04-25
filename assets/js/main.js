/* Nav mobile menu */
const smNavMenu = document.querySelector("#nav-menu");
const smNavToggle = document.querySelector("#nav-toggle");
const smNavClose = document.getElementById("nav-close");

if (smNavToggle) {
    smNavToggle.addEventListener("click", smShowMenu);
}

function smShowMenu() {
    smNavMenu.classList.add("show-menu");
}

if (smNavClose) {
    smNavClose.addEventListener("click", () => {
        smNavMenu.classList.remove("show-menu");
    });
}

const smNavLinks = document.querySelectorAll(".sm-nav-link");

function smHandleNavLinkClick() {
    const menuNode = document.getElementById("nav-menu");
    menuNode.classList.remove("show-menu");
}
smNavLinks.forEach((n) => n.addEventListener("click", smHandleNavLinkClick));

/* Skills accordion */
const smTechstackContent = document.getElementsByClassName("sm-techstack-content"),
    smTechstackHeaders = document.querySelectorAll(".sm-techstack-header");

function smToggleTechstack() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < smTechstackContent.length; i++) {
        smTechstackContent[i].className = "sm-techstack-content is-hidden";
    }

    if (itemClass === "sm-techstack-content is-hidden") {
        this.parentNode.className = "sm-techstack-content is-open";
    }
}

smTechstackHeaders.forEach((el) => {
    el.addEventListener("click", smToggleTechstack);
});

/* Qualification smJourneyTabs */
const smJourneyTabs = document.querySelectorAll("[data-target]"),
    smJourneyPanels = document.querySelectorAll("[data-content]");

smJourneyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        smJourneyPanels.forEach((panel) => {
            panel.classList.remove("is-active");
        });
        target.classList.add("is-active");

        smJourneyTabs.forEach((tab) => {
            tab.classList.remove("is-active");
        });
        tab.classList.add("is-active");
    });
});

/* #work projects accordion */
document.querySelectorAll(".sm-projects-header").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const item = btn.closest(".sm-projects-item");
        const isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".sm-projects-item").forEach(function (el) {
            el.classList.remove("is-open");
            el.querySelector(".sm-projects-header").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
            item.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
        }
    });
});

/* #portfolio (weekend projects) */
let smSwiperPortfolio = new Swiper(".sm-portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* #achievements: loop off so pagination matches slides */
let smSwiperAchievements = new Swiper(".sm-achievements-slider", {
    loop: false,
    speed: 450,
    grabCursor: true,
    spaceBetween: 48,
    slidesPerView: 1,
    watchOverflow: true,
    pagination: {
        el: ".sm-achievements-pagination",
        clickable: true,
        dynamicBullets: false,
    },
});

/* Nav active state by scroll */
const smSections = document.querySelectorAll("section[id]");

function smGetScrollY() {
    return window.scrollY ?? window.pageYOffset ?? 0;
}

function smSyncActiveNavOnScroll() {
    const verticalScrollPosition = smGetScrollY();

    smSections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const smNavLinks = document.querySelector(
            '.sm-nav-menu a[href*="' + sectionId + '"]'
        );
        if (!smNavLinks) return;

        if (
            verticalScrollPosition > sectionTop &&
            verticalScrollPosition <= sectionTop + sectionHeight
        ) {
            smNavLinks.classList.add("is-current");
        } else {
            smNavLinks.classList.remove("is-current");
        }
    });
}

window.addEventListener("scroll", smSyncActiveNavOnScroll);

/* Header shadow on scroll */
function smToggleHeaderShadow() {
    const nav = document.getElementById("header");
    if (smGetScrollY() >= 80) nav.classList.add("has-shadow");
    else nav.classList.remove("has-shadow");
}

window.addEventListener("scroll", smToggleHeaderShadow);

/* Back-to-top visibility */
function smToggleScrollTop() {
    const scrollTopButton = document.getElementById("scroll-up");
    if (smGetScrollY() >= 560) scrollTopButton.classList.add("show-scroll");
    else scrollTopButton.classList.remove("show-scroll");
}

window.addEventListener("scroll", smToggleScrollTop);

/* Theme toggle */
const smThemeButton = document.getElementById("theme-button");
const smDarkThemeClass = "dark-theme";
const smIconThemeClass = "uil-sun";

const smSelectedTheme = localStorage.getItem("selected-theme");
const smSelectedIcon = localStorage.getItem("selected-icon");

const smGetCurrentTheme = () =>
    document.body.classList.contains(smDarkThemeClass) ? "dark" : "light";
const smGetCurrentIcon = () =>
    document.body.classList.contains(smIconThemeClass) ? "uil-moon" : "uil-sun";

if (smSelectedTheme) {
    document.body.classList[smSelectedTheme === "dark" ? "add" : "remove"](
        smDarkThemeClass
    );
    smThemeButton.classList[smSelectedIcon === "uil-moon" ? "add" : "remove"](
        smIconThemeClass
    );
}

smThemeButton.addEventListener("click", () => {
    //add or remove dark / icon theme
    document.body.classList.toggle(smDarkThemeClass);
    smThemeButton.classList.toggle(smIconThemeClass);

    //we save the theme and the current icon so that the user choose
    localStorage.setItem("selected-theme", smGetCurrentTheme());
    localStorage.setItem("selected-icon", smGetCurrentIcon());
});
