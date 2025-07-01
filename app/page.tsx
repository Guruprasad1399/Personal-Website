"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Paper,
	Divider,
	Chip,
	Avatar,
	Alert,
} from "@mui/material";
import {
	Download as DownloadIcon,
	Code as CodeIcon,
	Web as WebIcon,
	Storage as StorageIcon,
	Cloud as CloudIcon,
	BuildCircle as BuildCircleIcon,
	BugReport as BugReportIcon,
	Laptop as LaptopIcon,
	GitHub,
	Psychology as PsychologyIcon,
	Lightbulb as LightbulbIcon,
	AutoAwesome as AutoAwesomeIcon,
	SmartToy as SmartToyIcon,
} from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DynamicHeroSection from "./components/DynamicHeroSection";
import InteractiveCodeShowcase from "./components/InteractiveCodeShowcase";
import TechTrendTracker from "./components/TechTrendTracker";

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Home() {
	const handleDownload = () => {
		const resumeUrl = "/Guruprasad_Resume.pdf";
		const link = document.createElement("a");
		link.href = resumeUrl;
		link.download = "Guruprasad_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const skillCategories = [
		{
			title: "AI & Machine Learning",
			skills:
				"LLM Integration, Prompt Engineering, AI Orchestration, Vector Databases, RAG, Hugging Face, LangChain, OpenAI API, Machine Learning Models, TensorFlow, AI Platform Development",
			icon: <SmartToyIcon />,
		},
		{
			title: "Programming Languages",
			skills: "JavaScript, Java, TypeScript, Python, C, PHP, Go, Rust",
			icon: <CodeIcon />,
		},
		{
			title: "Frontend Technologies",
			skills:
				"React, Next.js, Vue.js, Angular, Redux, TypeScript, HTML5, CSS3, Tailwind CSS, Material-UI, Framer Motion, React Native",
			icon: <WebIcon />,
		},
		{
			title: "Backend Technologies",
			skills:
				"Node.js, Spring Boot, Express.js, Django, Flask, Java Spring, RESTful APIs, GraphQL, Microservices, Serverless",
			icon: <CodeIcon />,
		},
		{
			title: "Database & Storage",
			skills:
				"MongoDB, PostgreSQL, MySQL, MSSQL, Oracle 12c, Redis, Elasticsearch, Vector Databases (Pinecone, Chroma), DynamoDB",
			icon: <StorageIcon />,
		},
		{
			title: "Cloud & Infrastructure",
			skills:
				"AWS (Lambda, EC2, S3, RDS), Azure, GCP, Kubernetes, Docker, Terraform, Serverless Framework, CDN, Load Balancing",
			icon: <CloudIcon />,
		},
		{
			title: "DevOps & Tools",
			skills:
				"Git, GitHub Actions, Jenkins, CI/CD Pipelines, Ansible, Apache Kafka, RabbitMQ, Monitoring, Logging, Security",
			icon: <BuildCircleIcon />,
		},
		{
			title: "Testing & Quality",
			skills: "JUnit, Jest, Cypress, Playwright, Unit Testing, Integration Testing, E2E Testing, TDD, BDD",
			icon: <BugReportIcon />,
		},
		{
			title: "Modern Development",
			skills:
				"AI-Assisted Development, Prompt Engineering, LLM Integration, Microservices Architecture, Event-Driven Architecture, Domain-Driven Design",
			icon: <AutoAwesomeIcon />,
		},
		{
			title: "Methodologies & Others",
			skills:
				"Agile, Scrum, System Design, Performance Optimization, Security Best Practices, Code Review, Technical Leadership",
			icon: <LaptopIcon />,
		},
	];

	const projects = [
		{
			title: "AI-Powered Document Analysis System",
			description:
				"Developed an intelligent document processing system that leverages LLMs and vector databases to extract, analyze, and summarize information from various document formats.",
			achievements: [
				"Implemented Retrieval Augmented Generation (RAG) using LangChain and vector databases to provide context-aware document analysis.",
				"Built a custom prompt engineering system that optimizes LLM interactions for specific document types and queries.",
				"Integrated with OpenAI and Hugging Face models to provide flexible AI capabilities based on specific use cases.",
				"Created a scalable architecture using AWS Lambda and S3 for document storage and processing.",
				"Developed a React-based frontend that visualizes document insights and allows for interactive querying.",
				"Implemented robust security measures to ensure sensitive document data remains protected throughout the AI processing pipeline.",
			],
		},
		{
			title: "Cloud-Native E-Commerce Backend",
			description:
				"Developed a robust cloud-native e-commerce backend using GraphQL and Express.js, providing a scalable and efficient solution for managing online transactions and product data.",
			achievements: [
				"Implemented GraphQL for efficient querying and manipulation of data, enhancing the flexibility of API interactions.",
				"Utilized Express.js to build a performant and modular backend architecture.",
				"Integrated with cloud services for seamless scalability and improved response times.",
				"Designed and implemented database schemas for optimal data storage and retrieval.",
				"Ensured data security and integrity through robust authentication and authorization mechanisms.",
				"Collaborated with the front-end team to define API contracts and ensure smooth communication between the layers of the application.",
			],
		},
		{
			title: "Shopify Local App",
			description:
				"Participated in a hackathon conducted by Not just dev, contributing to the development of a React Native application that supports local businesses.",
			details: [
				"Developed a React Native app, ShopWiseLocal, for the notJust.dev Hackathon.",
				"Supported local businesses by connecting them with customers through detailed business profiles and a rewards system.",
				"Implemented a points-based rewards system for users who purchase products from local businesses.",
				"Utilized React Native and Expo for cross-platform development.",
				"Focused on innovation by providing a unique approach to support local communities.",
				"Enabled users to explore and support local businesses, serving as a discovery and engagement platform.",
			],
			githubLink: "https://github.com/Guruprasad1399/shopWiseLocal.git",
		},
		{
			title: "Angular Blog Platform",
			description: "Built a blog platform using Angular and Spring Boot.",
			techStack: {
				frontend: "Angular 12, TypeScript, RxJS, Angular Material, NgRx",
				backend:
					"Spring Boot 2.5, Java 11, Spring Security, Spring Data JPA, PostgreSQL",
				database: "PostgreSQL, Amazon S3, Hibernate ORM, Liquibase",
				deployment: "Docker, Kubernetes, AWS, Jenkins, NGINX",
				testing: "Jasmine, Karma, JUnit, Mockito, Postman, SonarQube, Cypress",
			},
		},
		{
			title: "React Native Chat Application",
			description:
				"Created various chat applications using React Native. Published two apps on the Play Store.",
			techStack: {
				mobile:
					"React Native 0.64, JavaScript, TypeScript, Expo, React Navigation, Redux",
				backend: "Node.js, Express, MongoDB, Mongoose, JWT, Socket.io",
				cloud: "FCM, Firebase Authentication, AWS Lambda, DynamoDB, AWS S3",
				deployment: "GitHub Actions, Heroku, Netlify, Docker, AWS Amplify",
				testing:
					"Jest, Enzyme, Postman, Detox, ESLint, Prettier, GitHub Actions",
			},
		},
	];

	return (
		<Box className="flex flex-col min-h-screen">
			<Navbar />

			<Container component="main" sx={{ flexGrow: 1 }}>
				{/* Dynamic Hero Section */}
				<DynamicHeroSection />

				{/* Professional Summary */}
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="text-center mb-10"
				>
					<Paper
						elevation={0}
						sx={{
							p: 3,
							mb: 4,
							bgcolor: "rgba(255,255,255,0.7)",
							borderRadius: 4,
							mt: 4,
						}}
					>
						<Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
							Experienced software developer with 5+ years building scalable web applications 
							and AI-powered solutions. Currently contributing to AI platform development at 
							<strong> Nomura</strong>, with expertise in machine learning integrations, cloud architecture, 
							and modern full-stack development. Proven track record of delivering high-impact 
							solutions across diverse industries including finance, healthcare, and education.
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mt: 2 }}>
							<strong>Master's in Computer Science</strong> from Cleveland State University. 
							Passionate about leveraging cutting-edge technologies to solve complex business challenges 
							and mentor emerging developers in the rapidly evolving tech landscape.
						</Typography>
					</Paper>

					{/* AI & Modern Development Highlight */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						<Alert
							severity="info"
							icon={<PsychologyIcon fontSize="inherit" />}
							sx={{
								mb: 5,
								borderRadius: 2,
								"& .MuiAlert-icon": {
									color: "primary.main",
									alignItems: "center",
								},
							}}
						>
							<Typography variant="subtitle1" fontWeight="bold">
								Leading in AI-Driven Development (2025)
							</Typography>
							<Typography variant="body2">
								At the forefront of the AI revolution in software development, I'm actively 
								implementing LLM integrations, RAG architectures, and AI-assisted development 
								workflows. My current role at Nomura involves deploying machine learning models 
								at scale, building intelligent automation systems, and architecting AI-powered 
								platforms that deliver real business value. This positions me perfectly for 
								the future of software engineering where AI augments human capabilities.
							</Typography>
						</Alert>
					</motion.div>

					{/* Resume Download Button */}
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							variant="contained"
							size="large"
							startIcon={<DownloadIcon />}
							onClick={handleDownload}
							sx={{ mb: 5 }}
						>
							Download Resume
						</Button>
					</motion.div>
				</motion.div>

				{/* Skills Section */}
				<Box component="section" sx={{ mb: 8 }}>
					<Typography
						variant="h4"
						component="h2"
						fontWeight="bold"
						textAlign="center"
						gutterBottom
					>
						Skills
					</Typography>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						animate="animate"
					>
						<Grid container spacing={3}>
							{skillCategories.map((category, index) => (
								<Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.title}>
									<motion.div
										variants={fadeInUp}
										whileHover={{
											y: -5,
											boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
										}}
										style={{ width: "100%" }}
									>
										<Card
											sx={{
												height: "100%",
												borderRadius: 3,
												overflow: "visible",
											}}
										>
											<CardContent>
												<Box display="flex" alignItems="center" mb={1}>
													<Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
														{category.icon}
													</Avatar>
													<Typography
														variant="h6"
														component="h3"
														fontWeight="bold"
													>
														{category.title}
													</Typography>
												</Box>
												<Typography variant="body2" color="text.secondary">
													{category.skills}
												</Typography>
											</CardContent>
										</Card>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</motion.div>
				</Box>

				{/* Projects Section */}
				<Box component="section">
					<Typography
						variant="h4"
						component="h2"
						fontWeight="bold"
						textAlign="center"
						gutterBottom
						mb={4}
					>
						Latest Projects
					</Typography>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						animate="animate"
					>
						<Grid container spacing={4}>
							{projects.map((project, index) => (
								<Grid size={{ xs: 12, md: 6 }} key={project.title}>
									<motion.div
										variants={fadeInUp}
										whileHover={{
											y: -5,
											boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
										}}
										style={{ width: "100%" }}
									>
										<Card sx={{ height: "100%", borderRadius: 3 }}>
											<CardContent>
												<Typography
													variant="h5"
													component="h3"
													fontWeight="bold"
													gutterBottom
												>
													{project.title}
												</Typography>

												<Typography
													variant="body2"
													color="text.secondary"
													paragraph
												>
													{project.description}
												</Typography>

												{project.achievements && (
													<>
														<Typography
															variant="subtitle1"
															fontWeight="bold"
															gutterBottom
														>
															Key Achievements:
														</Typography>
														<List dense>
															{project.achievements.map((achievement, i) => (
																<ListItem key={i} sx={{ pl: 0 }}>
																	<ListItemIcon sx={{ minWidth: 28 }}>
																		•
																	</ListItemIcon>
																	<ListItemText primary={achievement} />
																</ListItem>
															))}
														</List>
													</>
												)}

												{project.details && (
													<>
														<Typography
															variant="subtitle1"
															fontWeight="bold"
															gutterBottom
														>
															Project Details:
														</Typography>
														<List dense>
															{project.details.map((detail, i) => (
																<ListItem key={i} sx={{ pl: 0 }}>
																	<ListItemIcon sx={{ minWidth: 28 }}>
																		•
																	</ListItemIcon>
																	<ListItemText primary={detail} />
																</ListItem>
															))}
														</List>
														{project.githubLink && (
															<Button
																variant="outlined"
																size="small"
																href={project.githubLink}
																target="_blank"
																startIcon={<GitHub />}
																sx={{ mt: 1 }}
															>
																View on GitHub
															</Button>
														)}
													</>
												)}

												{project.techStack && (
													<>
														<Typography
															variant="subtitle1"
															fontWeight="bold"
															gutterBottom
															mt={2}
														>
															Tech Stack:
														</Typography>
														<Grid container spacing={1}>
															{Object.entries(project.techStack).map(
																([key, value]) => (
																	<Grid size={{ xs: 12 }} key={key}>
																		<Chip
																			label={`${
																				key.charAt(0).toUpperCase() +
																				key.slice(1)
																			}: ${value}`}
																			sx={{ mb: 0.5 }}
																		/>
																	</Grid>
																)
															)}
														</Grid>
													</>
												)}
											</CardContent>
										</Card>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</motion.div>
				</Box>
			</Container>

			<Footer />
		</Box>
	);
}
