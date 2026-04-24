/**
 * Site content: `assets/js/content-loader.js` reads this object into the page.
 * Images: `assets/images/` (and `assets/files/` for the resume).
 *
 * Keys: theme, meta, header, nav, files, hero, about, skills, skillGroups, qualification,
 * projects (#work work cards), weekendProjects (#portfolio), hiring, highlights,
 * contact, footer. Optional: links (merges with contact for missing contact fields);
 * highlights may be under achievements; qualification may use workTab / educationTab.
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
	skills: {
		sectionTitle: "Technology stack",
		sectionSubtitle: "My technical skills"
	},
	skillGroups: [
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
	qualification: {
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
		viewMore: "View more",
		items: [
			{
				icon: "uil-server-network",
				titleHtml: "One Intuit Notification Platform (OINP)",
				modalTitle: "Intuit — One Intuit Notification Platform",
				lines: [
					"Designed and built a scalable, multi-channel notification platform (Email, SMS, Push, Voice, Tray) using Java and Spring Boot, handling high-throughput event-driven workloads.",
					"Implemented asynchronous workflows using Apache Kafka and AWS SQS/SNS, enabling reliable message delivery with retry handling, fan-out patterns, and fault tolerance.",
					"Architected cloud-native services on AWS (Lambda, EC2, DynamoDB, S3) with strong observability using CloudWatch and Splunk, and deployed via Docker, Kubernetes, and Argo CD.",
					"Contributed to system design, API contracts, and production reliability, ensuring high availability and performance at scale.",
					"<strong>Tech Stack: Java, Spring Boot, Kafka, AWS (SQS, SNS, Lambda, DynamoDB, S3), PostgreSQL, Docker, Kubernetes, Splunk, CloudWatch</strong>"
				]
			},
			{
				icon: "uil-clipboard-alt",
				titleHtml: "Bedrock - Healthcare Platform (Oracle Cerner)",
				modalTitle: "Oracle Cerner — Bedrock Platform",
				lines: [
					"Developed core backend services for healthcare reference data management using Java, Spring Boot, and Oracle SQL in a highly regulated environment.",
					"Optimized system performance through query tuning and service refactoring, improving response times and reliability of critical healthcare workflows.",
					"Built and maintained microservices on AWS (EC2, Lambda, DynamoDB) with CI/CD pipelines using Jenkins and monitoring via Splunk and CloudWatch.",
					"Collaborated on system design and production support, ensuring stability, correctness, and safe deployments across releases.",
					"<strong>Tech Stack: Java, Spring Boot, Oracle SQL, AWS (EC2, Lambda, DynamoDB), Jenkins, Splunk, CloudWatch</strong>"
				]
			},
			{
				icon: "uil-building",
				titleHtml: "TrackChild 3.0 (Government of India)",
				modalTitle: "TrackChild 3.0 — National Informatics Centre (NIC)",
				lines: [
					"Led backend development and system migration for a government-scale application using Java, Spring Boot, and PostgreSQL.",
					"Designed REST APIs and optimized database queries, significantly improving system performance and response times.",
					"Built containerized services using Docker and Kubernetes with CI/CD pipelines, ensuring scalable and maintainable deployments.",
					"Delivered stable and reliable backend workflows for citizen-facing and administrative use cases in a public-sector environment.",
					"<strong>Tech Stack: Java, Spring Boot, PostgreSQL, HTML, JavaScript, CSS, BootStrap, Docker, Jenkins</strong>"
				]
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
				linkUrl: "https://cloud.trails.click"
			},
			{
				image: "./assets/images/projects2.jpg",
				imageAlt: "CAS PDF parser",
				title: "CAS PDF parser",
				description: "Spring Boot: parse account statements, extract transactions, group by fund, and compute returns.",
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
				icon: "uil-user-check",
				what: "Full-time offer after long-term contract",
				where: "Intuit",
				details: "Started on the client side through a vendor as a contractor. After a 2-year engagement, Intuit extended a full-time offer based on delivery quality and how I worked with the team in production."
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
