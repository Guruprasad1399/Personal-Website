import type { CalendarDate, YearMonth } from "../lib/dates";

export type Experience = {
	company: string;
	role: string;
	start: YearMonth;
	end?: YearMonth;
	location: string;
	summary: string;
	highlights: string[];
	stack: string[];
	featured?: boolean;
};

export type Project = {
	name: string;
	repository: string;
	category: "AI" | "Full Stack" | "Mobile" | "Platform";
	description: string;
	outcome: string;
	stack: string[];
	accent: "green" | "blue" | "coral" | "gold";
};

export type Education = {
	degree: string;
	school: string;
	start: CalendarDate;
	end?: CalendarDate;
	detail: string;
};

export const profile = {
	siteUrl: "https://personal-website-drab-two-71.vercel.app",
	name: "Guruprasad Venkatraman",
	headline: "Senior Software Engineer · AI & Cloud",
	location: "Bensalem, Pennsylvania",
	status: "Selectively open to opportunities",
	email: "vgp1399@gmail.com",
	phoneDisplay: "(216) 808-5828",
	phoneHref: "+12168085828",
	github: "https://github.com/Guruprasad1399",
	linkedin:
		"https://www.linkedin.com/in/guruprasad-venkatraman-588591153/",
	careerStart: "2020-10" as YearMonth,
	verifiedImpact: {
		usersSupported: 200,
		processingImprovementPercent: 40,
		hoursAutomated: 20,
		serviceRange: "10-20",
	},
};

export const experiences: Experience[] = [
	{
		company: "Nomura",
		role: "Senior Software Engineer, Wholesale Technology",
		start: "2025-10",
		location: "New York City Metropolitan Area · Hybrid",
		summary:
			"Building AI-enabled developer platforms, risk systems, and service-management tooling for enterprise technology teams.",
		highlights: [
			"Engineered and supported an ecosystem of 10-20 Java microservices with a React user console for service management.",
			"Delivered enterprise AI APIs using Anthropic models on AWS Bedrock and authored Model Context Protocol tools for internal workflows.",
			"Connected observability and dependency data through Grafana-backed MCP tooling to make operational context accessible to AI agents.",
			"Built a Python service that applies ML-based risk scoring to products, releases, and change tickets.",
			"Helped reduce processing time by roughly 40%, supported 200+ users, and automated 20+ hours of repetitive work.",
		],
		stack: [
			"Java 17",
			"Spring Boot",
			"React",
			"Python",
			"AWS Bedrock",
			"Anthropic",
			"MCP",
			"Grafana",
		],
		featured: true,
	},
	{
		company: "Nomura",
		role: "Software Analyst",
		start: "2024-04",
		end: "2025-09",
		location: "United States · Hybrid",
		summary:
			"Developed and modernized enterprise applications across Java services, web interfaces, cloud integrations, and delivery tooling.",
		highlights: [],
		stack: ["Java", "Spring Boot", "React", "AWS", "SonarQube"],
	},
	{
		company: "Hinckley Medical · OneDose",
		role: "Full-Stack Developer",
		start: "2024-01",
		end: "2024-04",
		location: "United States · On-site",
		summary:
			"Prototyped cross-platform healthcare software, including Windows connectivity workflows and mobile product experiences.",
		highlights: [],
		stack: ["React Native", ".NET MAUI", "C#", "Bluetooth"],
	},
	{
		company: "SkillNet Solutions",
		role: "Software Developer Trainee",
		start: "2023-06",
		end: "2023-08",
		location: "United States · On-site",
		summary:
			"Built responsive React interfaces and Spring Boot API integrations, with a focus on reliability and data-access performance.",
		highlights: [],
		stack: ["React", "Redux", "Spring Boot", "JavaScript", "PHP"],
	},
	{
		company: "Cleveland State University",
		role: "Full-Stack Developer",
		start: "2022-01",
		end: "2023-05",
		location: "United States · Part-time",
		summary:
			"Delivered React and Laravel web experiences, API integrations, and automated browser testing for university-facing software.",
		highlights: [],
		stack: ["React", "Laravel", "PHP", "Selenium", "Nightwatch"],
	},
	{
		company: "StackSmith Consultancy",
		role: "React Native Developer",
		start: "2021-10",
		end: "2022-03",
		location: "India",
		summary:
			"Led mobile development across React Native, Node.js APIs, Firebase notifications, testing, and Jenkins-based delivery.",
		highlights: [],
		stack: ["React Native", "Node.js", "Firebase", "Redux", "Jenkins"],
	},
	{
		company: "Triloki Smart Systems",
		role: "Software Developer",
		start: "2020-10",
		end: "2021-07",
		location: "Bangalore, India",
		summary:
			"Built and maintained backend systems, API integrations, and cloud-based solutions, with a focus on deployment automation and data reporting pipelines.",
		highlights: [],
		stack: ["Java", "SQL", "Jenkins", "REST APIs"],
	},
];

export const projects: Project[] = [
	{
		name: "AI Speech Studio",
		repository: "AI_App",
		category: "AI",
		description:
			"A cross-platform AI application for text-to-speech, speech transcription, tweet narration, audio playback, and sharing.",
		outcome:
			"Combines multimodal interaction patterns with a polished Expo-based mobile experience.",
		stack: ["React Native", "Expo", "TypeScript", "Audio APIs"],
		accent: "green",
	},
	{
		name: "NovaTrader",
		repository: "NovaTrader",
		category: "Full Stack",
		description:
			"A web-based trading experience designed around accessible stock discovery, buying, selling, and portfolio workflows.",
		outcome:
			"Pairs a TypeScript frontend with a dedicated Python backend architecture.",
		stack: ["TypeScript", "React", "Python", "Financial UX"],
		accent: "blue",
	},
	{
		name: "ShopWiseLocal",
		repository: "shopWiseLocal",
		category: "Mobile",
		description:
			"A mobile discovery and rewards platform connecting customers with local shops, restaurants, and service providers.",
		outcome:
			"Built as a focused three-day hackathon product with community impact at its core.",
		stack: ["React Native", "Expo", "JavaScript", "Mobile UX"],
		accent: "coral",
	},
	{
		name: "Blog Guru",
		repository: "angular-blog-platform",
		category: "Full Stack",
		description:
			"A full-stack publishing platform with authentication, post management, comments, profiles, and search.",
		outcome:
			"Demonstrates a complete product workflow across Angular and Spring Boot.",
		stack: ["Angular", "TypeScript", "Spring Boot", "Java"],
		accent: "gold",
	},
	{
		name: "MAUI Connectivity Prototype",
		repository: "MAUI_App",
		category: "Platform",
		description:
			"A Windows prototype exploring Bluetooth and network connectivity monitoring beyond React Native's platform constraints.",
		outcome:
			"Validated .NET MAUI as a path for native Windows connectivity requirements.",
		stack: ["C#", ".NET MAUI", "Windows", "Bluetooth"],
		accent: "blue",
	},
	{
		name: "Real-Time Chat",
		repository: "Realtime_chat_App",
		category: "Mobile",
		description:
			"A cross-platform live messaging application built around real-time communication and cloud-backed mobile workflows.",
		outcome:
			"Explores authentication, live data, and responsive chat interactions on mobile.",
		stack: ["React Native", "Expo", "TypeScript", "AWS Amplify"],
		accent: "green",
	},
];

export const skillGroups = [
	{
		label: "Backend systems",
		skills: ["Java 17", "Spring Boot", "Python", "Node.js", "REST APIs", "Microservices"],
	},
	{
		label: "AI engineering",
		skills: ["AWS Bedrock", "Anthropic APIs", "AI Agents", "MCP", "ML Risk Scoring", "Tool Integration"],
	},
	{
		label: "Product interfaces",
		skills: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Angular"],
	},
	{
		label: "Cloud & delivery",
		skills: ["AWS", "Docker", "Maven", "GitHub", "Jenkins", "Grafana"],
	},
];

export const education: Education[] = [
	{
		degree: "Doctor of Business Administration",
		school: "Westcliff University",
		start: "2026-05",
		detail: "In progress",
	},
	{
		degree: "Master of Science, Computer Science",
		school: "Cleveland State University",
		start: "2022-01",
		end: "2023-05",
		detail: "GPA 3.87",
	},
	{
		degree: "Bachelor of Engineering, Electronics & Communication",
		school: "Anand Institute of Higher Technology",
		start: "2016",
		end: "2020",
		detail: "GPA 3.52",
	},
];
