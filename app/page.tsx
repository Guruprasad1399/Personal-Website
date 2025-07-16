"use client";
import React from "react";
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Button,
	Paper,
	Chip,
	Avatar,
} from "@mui/material";
import Grid from "@mui/system/Grid";
import {
	Download as DownloadIcon,
	GitHub,
	LinkedIn,
	LocationOn,
	Work,
	Email,
} from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<Box className="flex flex-col min-h-screen">
			<Navbar />

			<Container component="main" sx={{ flexGrow: 1 }}>
				{/* Hero Section */}
				<Box sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
					<Avatar
						src="/GuruprasadVenkatraman.jpg"
						alt="Guruprasad Venkatraman"
						sx={{
							width: { xs: 120, md: 160 },
							height: { xs: 120, md: 160 },
							margin: "0 auto 2rem auto",
							border: "4px solid",
							borderColor: "primary.main",
							boxShadow: 3,
						}}
					/>

					<Typography
						variant="h1"
						component="h1"
						className="gradient-text"
						sx={{
							mb: 2,
							fontSize: { xs: "2.5rem", md: "3.5rem" },
						}}
					>
						Guruprasad Venkatraman
					</Typography>

					<Typography
						variant="h4"
						color="text.secondary"
						sx={{
							mb: 4,
							fontWeight: 400,
							fontSize: { xs: "1.25rem", md: "1.5rem" },
						}}
					>
						Full-Stack Software Engineer & AI Specialist
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: 2,
							justifyContent: "center",
							mb: 4,
						}}
					>
						<Chip
							icon={<Work />}
							label="Software Analyst @ Nomura"
							color="primary"
							variant="outlined"
							sx={{ fontWeight: 500 }}
						/>
						<Chip
							icon={<LocationOn />}
							label="New York, NY"
							color="secondary"
							variant="outlined"
							sx={{ fontWeight: 500 }}
						/>
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 2,
							justifyContent: "center",
							flexWrap: "wrap",
						}}
					>
						<Button
							variant="contained"
							size="large"
							href="/Guruprasad_Resume.pdf"
							target="_blank"
							download
							startIcon={<DownloadIcon />}
						>
							Download Resume
						</Button>
						<Button
							variant="outlined"
							size="large"
							href="https://github.com/Guruprasad1399"
							target="_blank"
							startIcon={<GitHub />}
						>
							GitHub Portfolio
						</Button>
						<Button
							variant="outlined"
							size="large"
							href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
							target="_blank"
							startIcon={<LinkedIn />}
						>
							LinkedIn
						</Button>
					</Box>
				</Box>

				{/* About Section */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Paper sx={{ p: 6 }}>
						<Typography
							variant="h3"
							component="h2"
							gutterBottom
							className="gradient-text"
						>
							About Me
						</Typography>
						<Typography
							variant="body1"
							sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.7 }}
						>
							I'm a passionate full-stack software engineer with 5+ years of
							experience building scalable solutions and AI-powered
							applications. Currently working as a Software Analyst at Nomura in
							New York, I specialize in modern web technologies, cloud
							architecture, and machine learning integrations.
						</Typography>
						<Typography
							variant="body1"
							sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
						>
							With a Master's degree in Computer Science from Cleveland State
							University and 44+ GitHub repositories, I'm committed to
							continuous learning and contributing to innovative projects that
							make a real impact.
						</Typography>
					</Paper>
				</Container>

				{/* Skills Section */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Typography
						variant="h3"
						component="h2"
						gutterBottom
						className="gradient-text"
						textAlign="center"
						sx={{ mb: 6 }}
					>
						Technical Skills
					</Typography>

					<Grid container spacing={4}>
						{[
							{
								category: "Frontend Development",
								skills: [
									"React",
									"Next.js",
									"TypeScript",
									"Angular",
									"Vue.js",
									"HTML5/CSS3",
								],
							},
							{
								category: "Backend Development",
								skills: [
									"Node.js",
									"Python",
									"Java",
									"Spring Boot",
									"GraphQL",
									"REST APIs",
								],
							},
							{
								category: "Cloud & DevOps",
								skills: [
									"AWS",
									"Docker",
									"Kubernetes",
									"CI/CD",
									"Microservices",
									"Serverless",
								],
							},
							{
								category: "AI/ML & Data",
								skills: [
									"Machine Learning",
									"OpenAI",
									"TensorFlow",
									"Python",
									"Data Analytics",
									"LLM Integration",
								],
							},
							{
								category: "Databases",
								skills: [
									"PostgreSQL",
									"MongoDB",
									"Redis",
									"MySQL",
									"Firebase",
									"DynamoDB",
								],
							},
							{
								category: "Mobile Development",
								skills: [
									"React Native",
									".NET MAUI",
									"Cross-platform",
									"iOS",
									"Android",
									"Hybrid Apps",
								],
							},
						].map((skillGroup) => (
							<Grid size={{ xs: 12, md: 6 }} key={skillGroup.category}>
								<Paper sx={{ p: 4, height: "100%" }}>
									<Typography
										variant="h6"
										gutterBottom
										color="primary"
										fontWeight={600}
									>
										{skillGroup.category}
									</Typography>
									<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
										{skillGroup.skills.map((skill) => (
											<Chip
												key={skill}
												label={skill}
												variant="outlined"
												size="small"
												sx={{
													borderColor: "primary.main",
													color: "primary.main",
													fontWeight: 500,
												}}
											/>
										))}
									</Box>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>

				{/* Featured Projects */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Typography
						variant="h3"
						component="h2"
						gutterBottom
						className="gradient-text"
						textAlign="center"
						sx={{ mb: 6 }}
					>
						Featured Projects
					</Typography>

					<Grid container spacing={4}>
						{[
							{
								name: "NovaTrader",
								description:
									"Full-stack trading platform with real-time market data, portfolio management, and advanced analytics",
								tech: [
									"TypeScript",
									"React",
									"Python",
									"AWS",
									"Real-time APIs",
								],
								github: "https://github.com/Guruprasad1399/NovaTrader",
								category: "Enterprise",
							},
							{
								name: "AI Application",
								description:
									"Advanced AI application with machine learning integrations and intelligent user interfaces",
								tech: ["TypeScript", "AI/ML", "React", "Next.js", "OpenAI"],
								github: "https://github.com/Guruprasad1399/AI_App",
								category: "AI/ML",
							},
							{
								name: "Cloud E-commerce Backend",
								description:
									"Scalable microservices architecture for high-volume e-commerce operations",
								tech: ["Node.js", "GraphQL", "Docker", "Kubernetes", "MongoDB"],
								github:
									"https://github.com/Guruprasad1399/Cloud-native_e-commerce-Backend",
								category: "Cloud Native",
							},
							{
								name: "Angular Blog Platform",
								description:
									"Modern full-stack blogging platform with rich text editing and real-time collaboration",
								tech: [
									"Angular",
									"TypeScript",
									"Spring Boot",
									"Java",
									"PostgreSQL",
								],
								github:
									"https://github.com/Guruprasad1399/angular-blog-platform",
								category: "Full-Stack",
							},
							{
								name: "ShopWiseLocal",
								description:
									"React Native mobile app connecting users with local businesses and services",
								tech: [
									"React Native",
									"JavaScript",
									"Node.js",
									"Firebase",
									"Maps API",
								],
								github: "https://github.com/Guruprasad1399/shopWiseLocal",
								category: "Mobile",
							},
							{
								name: "MAUI Cross-Platform App",
								description:
									".NET MAUI Windows application with Bluetooth connectivity and device integration",
								tech: ["C#", ".NET MAUI", "Windows", "Bluetooth", "IoT"],
								github: "https://github.com/Guruprasad1399/MAUI_App",
								category: "Cross-Platform",
							},
						].map((project) => (
							<Grid size={{ xs: 12, md: 6 }} key={project.name}>
								<Card
									component="a"
									href={project.github}
									target="_blank"
									sx={{
										height: "100%",
										textDecoration: "none",
										cursor: "pointer",
									}}
								>
									<CardContent sx={{ p: 4 }}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "flex-start",
												mb: 2,
											}}
										>
											<Typography
												variant="h6"
												fontWeight={600}
												color="text.primary"
												sx={{ flex: 1 }}
											>
												{project.name}
											</Typography>
											<Chip
												label={project.category}
												size="small"
												color="primary"
												variant="outlined"
												sx={{ ml: 2 }}
											/>
										</Box>
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ mb: 3, lineHeight: 1.6 }}
										>
											{project.description}
										</Typography>
										<Box
											sx={{
												display: "flex",
												flexWrap: "wrap",
												gap: 1,
												mb: 3,
											}}
										>
											{project.tech.map((tech) => (
												<Chip
													key={tech}
													label={tech}
													size="small"
													variant="outlined"
													sx={{
														fontSize: "0.75rem",
														height: "24px",
														borderColor: "grey.300",
														color: "text.secondary",
													}}
												/>
											))}
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												color: "primary.main",
											}}
										>
											<GitHub sx={{ mr: 1, fontSize: 20 }} />
											<Typography variant="body2" fontWeight={500}>
												View on GitHub
											</Typography>
										</Box>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>

					<Box sx={{ textAlign: "center", mt: 6 }}>
						<Button
							variant="contained"
							size="large"
							href="https://github.com/Guruprasad1399?tab=repositories"
							target="_blank"
							startIcon={<GitHub />}
							sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
						>
							View All 44+ Repositories
						</Button>
						<Button
							variant="outlined"
							size="large"
							href="mailto:vgp1399@gmail.com"
							startIcon={<Email />}
						>
							Get In Touch
						</Button>
					</Box>
				</Container>

				{/* Professional Experience */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Typography
						variant="h3"
						component="h2"
						gutterBottom
						className="gradient-text"
						textAlign="center"
						sx={{ mb: 6 }}
					>
						Professional Experience
					</Typography>

					<Paper sx={{ p: 6, mb: 4 }}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								mb: 3,
							}}
						>
							<Box>
								<Typography
									variant="h5"
									fontWeight={600}
									color="primary"
									gutterBottom
								>
									Software Analyst
								</Typography>
								<Typography variant="h6" color="text.primary" gutterBottom>
									Nomura Securities International, Inc.
								</Typography>
								<Typography variant="body2" color="text.secondary">
									New York, NY • 2019 - Present
								</Typography>
							</Box>
							<Chip label="Current Role" color="primary" />
						</Box>

						<Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
							Leading development of AI-powered financial solutions and scalable
							trading platforms. Responsible for architecting cloud-native
							applications, implementing machine learning models, and optimizing
							system performance for high-frequency trading environments.
						</Typography>

						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
							{[
								"Financial Technology",
								"AI/ML Integration",
								"Cloud Architecture",
								"Trading Systems",
								"Performance Optimization",
							].map((skill) => (
								<Chip
									key={skill}
									label={skill}
									variant="outlined"
									size="small"
									sx={{
										borderColor: "primary.main",
										color: "primary.main",
									}}
								/>
							))}
						</Box>
					</Paper>

					{/* Stats Section */}
					<Grid container spacing={4}>
						{[
							{ number: "5+", label: "Years Experience" },
							{ number: "44+", label: "GitHub Repositories" },
							{ number: "15+", label: "Technologies Mastered" },
							{ number: "100+", label: "Projects Delivered" },
						].map((stat) => (
							<Grid size={{ xs: 6, md: 3 }} key={stat.label}>
								<Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
									<Typography
										variant="h4"
										color="primary"
										fontWeight={700}
										gutterBottom
									>
										{stat.number}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										fontWeight={500}
									>
										{stat.label}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>

				{/* Call to Action */}
				<Container maxWidth="md" sx={{ py: 8 }}>
					<Paper sx={{ p: 6, textAlign: "center", backgroundColor: "grey.50" }}>
						<Typography
							variant="h4"
							gutterBottom
							className="gradient-text"
							fontWeight={600}
						>
							Let's Build Something Amazing Together
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ mb: 4, fontSize: "1.1rem" }}
						>
							I'm always interested in discussing new opportunities, innovative
							projects, and collaborations. Whether you're looking for a
							full-stack developer, AI specialist, or technical consultant,
							let's connect.
						</Typography>
						<Box
							sx={{
								display: "flex",
								gap: 2,
								justifyContent: "center",
								flexWrap: "wrap",
							}}
						>
							<Button
								variant="contained"
								size="large"
								href="mailto:vgp1399@gmail.com"
								startIcon={<Email />}
							>
								Send Email
							</Button>
							<Button
								variant="outlined"
								size="large"
								href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
								target="_blank"
								startIcon={<LinkedIn />}
							>
								Connect on LinkedIn
							</Button>
						</Box>
					</Paper>
				</Container>
			</Container>

			<Footer />
		</Box>
	);
}
