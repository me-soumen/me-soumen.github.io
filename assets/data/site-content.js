/**
 * Site content: `assets/js/content-loader.js` reads this object into the page.
 * Images: `assets/images/` (and `assets/files/` for the resume).
 *
 * Keys: theme, meta, header, nav, files, hero, about, techStack, techStackGroups, journey,
 * projects (#work work cards), weekendProjects (#portfolio), hiring, highlights,
 * contact, footer. Optional: links (merges with contact for missing contact fields);
 * journey may use workTab / educationTab.
 */
window.SITE_CONTENT = {
	theme: {
		primary: "#388868",
		primarySecond: "#388868",
		primaryAlt: "#2d6b52",
		primaryLighter: "#d8ebe3",
		bodyBg: "#f4faf7",
		footerCopy: "rgba(255, 255, 255, 0.92)",
		themeColorMeta: "#e8f2ed"
	},
	meta: {
		title: "Soumen Mukherjee | Software Engineer | Portfolio",
		description: "Soumen Mukherjee — software engineer (Java, Spring Boot, microservices, AWS, Kafka). Experience at Intuit, Oracle (Cerner), NIC, and more. Portfolio and contact."
	},
	header: {
		brand: "Soumen Mukherjee"
	},
	nav: {
		items: [
			{ label: "Home", href: "#intro", icon: "uil-estate" },
			{ label: "About", href: "#profile", icon: "uil-user" },
			{ label: "Skills", href: "#tech-stack", icon: "uil-file-alt" },
			{ label: "Qualification", href: "#journey", icon: "uil-graduation-cap" },
			{ label: "Projects", href: "#work", icon: "uil-briefcase-alt" },
			{ label: "Highlights", href: "#achievements", icon: "uil-star" },
			{ label: "Contact", href: "#contact", icon: "uil-message" }
		]
	},
	files: {
		resumePath: "./assets/files/Resume_Soumen_Mukherjee.pdf",
		resumeDownloadName: "Resume_Soumen_Mukherjee_Backend_Engineer.pdf"
	},
	hero: {
		profileImage: "./assets/images/self.png",
		title: "Hi, I’m Soumen",
		role: "Backend Engineer building scalable systems & self-hosted platforms",
		subtitle: "I love to design production-grade backend systems using Java, Spring Boot, AWS, and distributed systems. I also build “Trails Labs” — a personal ecosystem for cloud storage, finance tracking, and digital life management.",
		tagline: "Love to design systems that scale. Even if only 3 users show up.",
		primaryButton: "View my work",
		primaryButtonHref: "#work",
		scrollHint: "Scroll down"
	},
	about: {
		sectionTitle: "About me",
		sectionSubtitle: "A short introduction",
		image: "./assets/images/about.png",
		imageAlt: "About Soumen",
		bodyHtml: "Software engineer with <strong>over seven years</strong> of experience in <strong>Java</strong> and <strong>Spring Boot</strong>, shipping APIs, data-heavy services, and distributed systems in product teams. I work across the stack with <strong>REST</strong> and <strong>event-driven</strong> design (<strong>Kafka</strong>); databases such as <strong>PostgreSQL</strong>, <strong>Oracle</strong>, <strong>MySQL</strong>, and <strong>DynamoDB</strong>; and cloud and delivery on <strong>AWS</strong> with <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>CI/CD</strong>. I care about clear design, safe releases, and how systems behave in production. Outside of work, I run self-hosted infra (Nextcloud, Money Trails, Soil Trails, NAS, etc.) in the <strong>Trails Labs</strong> ecosystem.",
		stats: [
			{ value: "7+", labelLine1: "Years of experience", labelLine2: "" },
			{ value: "6", labelLine1: "Companies", labelLine2: "" },
			{ value: "4+", labelLine1: "Side projects", labelLine2: "" }
		],
		resumeButton: "Download resume"
	},
	techStack: {
		sectionTitle: "Technology stack",
		sectionSubtitle: "My technical skills"
	},
	techStackGroups: [
		{
			open: true,
			icon: "uil-brackets-curly",
			title: "Backend & Distributed Systems",
			subtitle: "Core backend engineering and service architecture",
			skills: [
				{ name: "Java", percent: 90 },
				{ name: "Spring Boot", percent: 90 },
				{ name: "Microservices Architecture", percent: 95 },
				{ name: "REST API Design", percent: 90 }
			]
		},
		{
			open: false,
			icon: "uil-cloud",
			title: "Cloud, DevOps & Observability",
			subtitle: "Infrastructure, deployment, and monitoring",
			skills: [
				{ name: "AWS (Lambda, S3, DynamoDB, EC2)", percent: 85 },
				{ name: "Docker & Kubernetes", percent: 80 },
				{ name: "CI/CD (Jenkins, Argo CD)", percent: 85 },
				{ name: "CloudWatch, Splunk, Grafana", percent: 85 }
			]
		},
		{
			open: false,
			icon: "uil-exchange",
			title: "Event-Driven Architecture",
			subtitle: "Asynchronous systems and messaging patterns",
			skills: [
				{ name: "Apache Kafka", percent: 80 },
				{ name: "AWS SQS & SNS", percent: 85 },
				{ name: "Async Workflows & Pub-Sub", percent: 90 },
				{ name: "Retry, DLQ & Idempotency", percent: 80 }
			]
		},
		{
			open: false,
			icon: "uil-database",
			title: "Data & Storage",
			subtitle: "Database design and data modeling",
			skills: [
				{ name: "PostgreSQL, MySQL, Oracle", percent: 85 },
				{ name: "DynamoDB", percent: 85 },
				{ name: "JPA / Hibernate", percent: 90 },
				{ name: "Redis", percent: 80 }
			]
		},
		{
			open: false,
			icon: "uil-robot",
			title: "AI-Assisted Development",
			subtitle: "LLM-driven workflows and productivity engineering",
			skills: [
				{ name: "Claude Skills Development", percent: 95 },
				{ name: "Claude API Workflows", percent: 80 },
				{ name: "Model Context Protocol (MCP)", percent: 75 },
				{ name: "Cursor (AI-assisted coding)", percent: 90 }
			]
		},
		{
			open: false,
			icon: "uil-window",
			title: "Frontend (Basic)",
			subtitle: "UI development and integration",
			skills: [
				{ name: "HTML", percent: 85 },
				{ name: "JavaScript", percent: 75 },
				{ name: "CSS", percent: 75 },
				{ name: "React.js", percent: 65 }
			]
		}
	],
	journey: {
		sectionTitle: "Qualification",
		sectionSubtitle: "Experience and education",
		tabs: [
			{ panel: "work", label: "Experience", icon: "uil-briefcase-alt" },
			{ panel: "education", label: "Education", icon: "uil-graduation-cap" }
		],
		defaultTab: "work",
		work: [
			{ title: "Lead Software Engineer", company: "Dexian India Technologies Pvt. Ltd.", client:"Intuit", location: "Bengaluru, India", from: "17/04/2024", to: "22/04/2026", techStack: "Java, Spring Boot, AWS, Kafka, Microservices, Lambda, EC2, SQS, SNS, DynamoDB, S3, CloudWatch, PostgreSQL, Docker, Kubernetes, Argo CD, Splunk" },
			{ title: "Software Developer II", company: "Oracle Cerner Healthcare Solutions India Pvt. Ltd.", client:"", location: "Bengaluru, India", from: "22/06/2020", to: "12/04/2024", techStack: "Java, CCL, AWS, Spring Boot, Microservices, Oracle SQL, EC2, Cloudwatch, Jenkins, Splunk" },
			{ title: "Software Engineer", company: "Allegis Services India Pvt. Ltd (TEKsystems)", client: "Oracle Cerner", location: "Bengaluru, India", from: "20/01/2020", to: "19/06/2020", techStack: "Java, CCL, AWS, Spring Boot, Microservices, Oracle SQL, EC2, Cloudwatch, Jenkins, Splunk" },
			{ title: "Software Engineer", company: "Southern Phone Company Limited", client: "", from: "17/01/2020", location: "Bengaluru, India", to: "17/01/2020", techStack: "Java, Spring Boot, Microservices, MySQL, Jenkins, Splunk" },
			{ title: "Software Engineer", company: "Velocis Systems Pvt. Ltd.", client: "National Informatics Centre (NIC)", location: "Kolkata, India", from: "17/01/2020", to: "17/01/2020", techStack: "Java, Spring Boot, Microservices, PostgreSQL" },
			{ title: "Junior Software Developer (Freelance)", company: "Icode Solutions", client: "", location: "Kolkata, India", from: "02/01/2018", to: "31/01/2019", techStack: "Java, Spring Boot, Microservices, MySQL" },
		],
		education: [
			{ title: "Master of Computer Applications (MCA)", subtitle: "Heritage Institute of Technology", location: "Kolkata, India", from: "2015", to: "2018" },
			{ title: "B.Sc. Computer Science", subtitle: "The University of Burdwan", location: "Durgapur, India", from: "2011", to: "2014" }
		]
	},
	projects: {
		sectionTitle: "Projects",
		sectionSubtitle: "Production systems and platforms I’ve designed and built",
		items: [
			{
				tab: "Intuit",
				tabIcon: "uil-server-network",
				title: "One Intuit Notification Platform (OINP)",
				company: "Intuit",
				role: "Lead Software Engineer",
				period: "Apr 2024 – Apr 2026",
				metrics: [
					{ value: "30", label: "locales enabled" },
					{ value: "7d → 30m", label: "SLA reduction" },
					{ value: "400 TPS", label: "peak load" },
					{ value: "30+", label: "security fixes" }
				],
				lines: [
					"Contributed as Backend Engineer on the revamped One Intuit Notification Platform — a centralised, multi-channel delivery engine for Intuit’s products supporting EMAIL, SMS, VOICE, PUSH, VOIP, and TRAY notifications.",
					"Led Localisation end-to-end (POC → design → deployment): enabled template translation into 30 locales via an async AWS SNS/SQS architecture with a new microservice calling the Global Content Service API. Reduced SLA from 7 days (manual) to ~30 minutes. Translated assets persisted to S3, state tracked in DynamoDB; failures handled via 3-attempt retry + DLQ with CloudWatch alerting.",
					"Led end-to-end deprecation of the DC (Braze Campaign) Pipeline — re-routing notification flow off a legacy Kafka chain, coordinating per-environment rollout with the DC Pipeline team, and validating the new async architecture with a 400 TPS load test (TP99 ~3 s).",
					"Upgraded 5 microservices from JDK 8 to JDK 21, improving security posture and enabling modern runtime features across the platform.",
					"Built a Claude Code skill to automate new-channel onboarding (authoring through delivery). Used it alongside MCP integrations to ship 4 channels — PUSH, ICE, BRAZE, VOIP — to pre-prod in 10 days, against a prior estimate of 1 week per channel.",
					"Identified and remediated 30+ security vulnerabilities by upgrading platform dependencies and hardening authentication mechanisms across services."
				],
				techTags: ["Java", "Spring Boot", "Apache Kafka", "AWS Lambda", "EC2", "SQS", "SNS", "DynamoDB", "S3", "PostgreSQL", "Docker", "Kubernetes", "Argo CD", "CloudWatch", "Splunk"]
			},
			{
				tab: "Oracle Cerner",
				tabIcon: "uil-clipboard-alt",
				title: "Bedrock — Healthcare Reference Data Platform",
				company: "Oracle Cerner",
				role: "Software Developer II",
				period: "Jun 2020 – Apr 2024",
				metrics: [
					{ value: "4 sec", label: "Virtual View TP99" },
					{ value: "2s → ms", label: "app launch time" },
					{ value: "5+", label: "services owned" },
					{ value: "~4 yr", label: "Oracle tenure" }
				],
				lines: [
					"Contributed as Senior Backend Engineer on Bedrock, Oracle Cerner’s Reference Data Management platform enabling healthcare professionals to configure and access clinical reference data.",
					"Designed and delivered Virtual View end-to-end — a new microservice for report reference data configuration used by healthcare professionals to download clinical reports, with a TP99 latency of ~4 seconds.",
					"Optimised the Bedrock application launch time through lazy loading and service refactoring, cutting cold-start time from ~2 seconds to milliseconds.",
					"Upgraded, deployed, and maintained 5+ microservices on AWS (EC2, Lambda, DynamoDB) with Jenkins CI/CD pipelines and observability via Splunk and CloudWatch.",
					"Supported system design and production incident response, maintaining stability and correctness for a regulated healthcare platform across multiple releases."
				],
				techTags: ["Java", "Spring Boot", "Oracle SQL", "CCL", "AWS EC2", "Lambda", "DynamoDB", "Jenkins", "CloudWatch", "Splunk", "Microservices"]
			},
			{
				tab: "NIC / Govt.",
				tabIcon: "uil-building",
				title: "TrackChild 3.0 — National Child Tracking Platform",
				company: "National Informatics Centre (MeitY)",
				role: "Software Engineer",
				period: "Feb 2019 – Nov 2019",
				metrics: [
					{ value: "National", label: "platform scale" },
					{ value: "2.0 → 3.0", label: "migration led" },
					{ value: "36", label: "state CWCs mapped" },
					{ value: "3", label: "modules built" }
				],
				lines: [
					"Led backend development and system migration from TrackChild 2.0 to 3.0 — a national-scale government platform for recording missing children and matching them with orphaned children using face recognition, built on Java, Spring Boot, and PostgreSQL.",
					"Designed and implemented a Feedback Module (REST APIs for user suggestions) and a CWC (Child Welfare Committee) stakeholder login — including mapping of all CWC entities across India’s 36 states/UTs, dashboard design, and authentication flows.",
					"Built containerised services using Docker with Jenkins CI/CD pipelines, ensuring scalable and maintainable deployments for a citizen-facing public-sector application."
				],
				techTags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jenkins", "REST API", "HTML", "JavaScript", "CSS", "Bootstrap"]
			}
		]
	},
	weekendProjects: {
		sectionTitle: "Weekend projects",
		sectionSubtitle: "Side projects and experiments",
		projects: [
			{
				image: "./assets/images/projects1.jpg",
				imageAlt: "Cloud Trails — self-hosted cloud",
				title: "Cloud Trails",
				description: "Nextcloud on Docker, Linux, RAID, and rsync — a private, self-managed cloud in the Trails lab.",
				projectButton: "Open",
				linkUrl: "https://trails.click"
			},
			{
				image: "./assets/images/projects2.jpg",
				imageAlt: "CAS PDF parser",
				title: "CAS PDF parser",
				description: "Spring Boot: send Consolidated Account Statement (CAS) to an email, parse statements, extract transactions, group by fund, and compute returns.",
				projectButton: "GitHub",
				linkUrl: "https://github.com/me-soumen"
			},
			{
				image: "./assets/images/projects3.jpg",
				imageAlt: "Money Trails",
				title: "Money Trails - Personal Finance Tracking",
				description: "High-throughput Java and Spring services, PostgreSQL, REST, concurrency, and tuning for realistic load.",
				projectButton: "Open",
				linkUrl: "https://money.trails.click"
			}
		]
	},
	hiring: {
		title: "Hiring a backend engineer?",
		description: "I am open to strong backend and platform roles, architecture discussion, and serious conversations about distributed systems and reliability.",
		button: "Contact me",
		image: "./assets/images/portfolio.png",
		imageAlt: "Open to roles"
	},
	highlights: {
		sectionTitle: "Highlights",
		sectionSubtitle: "Recognition, outcomes, and how I work with teams",
		items: [
			{
				icon: "uil-brain",
				what: "Excellence — Claude Code, skills, faster delivery",
				where: "Intuit",
				details: "Recognized for excellence by a Senior Staff Software Engineer and a Senior Manager for championing adoption of Claude Code and for building a comprehensive set of reusable Claude skills. That helped us land the work in about 1 week versus a 4-week estimate—without trading away review depth or quality."
			},
			{
				icon: "uil-briefcase-alt",
				what: "Contractor to FTE in 5 months",
				where: "Oracle Cerner",
				details: "Joined in a contract capacity with Oracle Cerner. Strong execution in the role led to a full-time offer within 5 months, continuing with the same client and product area."
			},
			{
				icon: "uil-award",
				what: "”Coach of the Quarter” — team award",
				where: "Oracle Cerner",
				details: "Received this business-unit award for a strong quarter, including clear ownership in resolving a production incident and keeping stakeholders aligned on impact and next steps. I also led training and knowledge-transfer (KT) for new joiners and supported them in ramping up on the stack, processes, and how we deliver."
			}
		]
	},
	contact: {
		sectionTitle: "Contact me",
		sectionSubtitle: "Ways to reach out",
		email: "me.soumen02@gmail.com",
		emailLabel: "Email",
		emailAltLabel: "Alternate",
		emailAlt: "soumen@trails.click",
		website: "https://trails.click",
		websiteLabel: "Website",
		websiteText: "Trails Labs [trails.click]",
		github: "https://github.com/me-soumen",
		githubLabel: "GitHub",
		githubText: "/me-soumen",
		linkedin: "https://www.linkedin.com/in/mukherjee-soumen",
		linkedinLabel: "LinkedIn",
		linkedinText: "/mukherjee-soumen",
		location: "Bengaluru, India",
		locationLabel: "Location",
		formNote: "For the quickest response, please use email. I welcome inquiries about opportunities, collaboration, and technical discussion, and I aim to reply within a few business days.",
		sendEmail: "Send email",
		downloadResume: "Download resume",
		emailSubject: "Professional%20inquiry%20via%20portfolio%20"
	},
	footer: {
		title: "Soumen Mukherjee",
		subtitle: "Software engineer (Java, Spring Boot, AWS)",
		copyHtml: "&#169; Soumen Mukherjee · All Rights Reserved · <a href=\"https://trails.click\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: inherit;\">Trails Labs</a>",
		items: [
			{ label: "About", href: "#profile" },
			{ label: "Skills", href: "#tech-stack" },
			{ label: "Qualification", href: "#journey" }
		]
	}
};
