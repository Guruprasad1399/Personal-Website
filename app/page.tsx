"use client";
import React from "react";
import { motion } from "framer-motion";
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
import { Download as DownloadIcon, GitHub } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DynamicHeroSection from "./components/DynamicHeroSection";

export default function Home() {
	return (
		<Box className="flex flex-col min-h-screen">
			<Navbar />

			<Container component="main" sx={{ flexGrow: 1 }}>
				{/* Hero Section */}
				<DynamicHeroSection />

				{/* Professional Summary */}
				<Container maxWidth="lg" sx={{ py: 8, position: "relative" }}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Paper
							elevation={6}
							sx={{
								p: 6,
								borderRadius: 4,
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								color: "white",
								position: "relative",
								overflow: "hidden",
							}}
						>
							<Box sx={{ position: "relative", zIndex: 1 }}>
								<Grid container spacing={4} alignItems="center">
									<Grid size={{ xs: 12, md: 8 }}>
										<Typography
											variant="h3"
											component="h1"
											gutterBottom
											fontWeight="bold"
										>
											🚀 Software Engineer & AI Innovator
										</Typography>
										<Typography
											variant="h6"
											sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}
										>
											Passionate about building scalable solutions with 44+
											GitHub repositories spanning AI/ML, cloud architecture,
											and full-stack development. Currently shaping the future
											of financial technology at Nomura.
										</Typography>
										<Box
											sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}
										>
											{[
												"🤖 AI/ML Specialist",
												"☁️ Cloud Architect",
												"🚀 Full-Stack Developer",
												"💡 Tech Innovator",
											].map((skill) => (
												<Chip
													key={skill}
													label={skill}
													sx={{
														background: "rgba(255,255,255,0.2)",
														color: "white",
														fontWeight: "bold",
														py: 2,
														px: 1,
													}}
												/>
											))}
										</Box>
										<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
											<Button
												variant="outlined"
												size="large"
												href="/Guruprasad_Resume.pdf"
												target="_blank"
												download
												startIcon={<DownloadIcon />}
												sx={{
													color: "white",
													borderColor: "white",
													py: 1.5,
													px: 3,
													borderRadius: 3,
													fontWeight: "bold",
													"&:hover": {
														background: "rgba(255,255,255,0.1)",
														borderColor: "white",
													},
												}}
											>
												Download Resume
											</Button>
											<Button
												variant="contained"
												size="large"
												href="https://github.com/Guruprasad1399"
												target="_blank"
												startIcon={<GitHub />}
												sx={{
													background: "rgba(255,255,255,0.2)",
													color: "white",
													py: 1.5,
													px: 3,
													borderRadius: 3,
													fontWeight: "bold",
													"&:hover": {
														background: "rgba(255,255,255,0.3)",
													},
												}}
											>
												View GitHub Portfolio
											</Button>
										</Box>
									</Grid>
									<Grid size={{ xs: 12, md: 4 }}>
										<Box sx={{ textAlign: "center" }}>
											<motion.div
												animate={{ rotate: [0, 360] }}
												transition={{
													duration: 20,
													repeat: Infinity,
													ease: "linear",
												}}
											>
												<Avatar
													src="/GuruprasadVenkatraman.jpg"
													sx={{
														width: 200,
														height: 200,
														mx: "auto",
														mb: 2,
														border: "4px solid rgba(255,255,255,0.3)",
														boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
													}}
												/>
											</motion.div>
											<Typography variant="h6" fontWeight="bold">
												Guruprasad Venkatraman
											</Typography>
											<Typography variant="body2" sx={{ opacity: 0.9 }}>
												📍 New York, NY • 🎯 5+ Years Experience
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</motion.div>
				</Container>

				{/* GitHub Portfolio Showcase */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<Typography
							variant="h3"
							component="h2"
							fontWeight="bold"
							textAlign="center"
							gutterBottom
							sx={{
								mb: 6,
								background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							🌟 Featured GitHub Projects
						</Typography>
					</motion.div>

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
								badge: "⭐ Enterprise",
							},
							{
								name: "AI_App",
								description:
									"Advanced AI application with machine learning integrations and intelligent user interfaces",
								tech: ["TypeScript", "AI/ML", "React", "Next.js", "OpenAI"],
								github: "https://github.com/Guruprasad1399/AI_App",
								badge: "🤖 AI-Powered",
							},
							{
								name: "Cloud E-commerce Backend",
								description:
									"Scalable microservices architecture for high-volume e-commerce operations",
								tech: ["Node.js", "GraphQL", "Docker", "Kubernetes", "MongoDB"],
								github:
									"https://github.com/Guruprasad1399/Cloud-native_e-commerce-Backend",
								badge: "☁️ Cloud Native",
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
								badge: "📝 Full-Stack",
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
								badge: "🏆 Award Winner",
							},
							{
								name: "MAUI Cross-Platform App",
								description:
									".NET MAUI Windows application with Bluetooth connectivity and device integration",
								tech: ["C#", ".NET MAUI", "Windows", "Bluetooth", "IoT"],
								github: "https://github.com/Guruprasad1399/MAUI_App",
								badge: "📱 Cross-Platform",
							},
						].map((project, index) => (
							<Grid size={{ xs: 12, md: 6 }} key={project.name}>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									whileHover={{ y: -5 }}
								>
									<Card
										component="a"
										href={project.github}
										target="_blank"
										sx={{
											height: "100%",
											borderRadius: 3,
											overflow: "hidden",
											textDecoration: "none",
											background:
												"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
											border: "1px solid rgba(0,0,0,0.1)",
											transition: "all 0.3s ease",
											"&:hover": {
												transform: "translateY(-5px)",
												boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
												borderColor: "primary.main",
											},
										}}
									>
										<CardContent sx={{ p: 4 }}>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													mb: 2,
												}}
											>
												<Typography
													variant="h6"
													fontWeight="bold"
													color="primary"
												>
													{project.name}
												</Typography>
												<Chip
													label={project.badge}
													size="small"
													sx={{
														background:
															"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
														color: "white",
														fontWeight: "bold",
													}}
												/>
											</Box>
											<Typography
												variant="body2"
												sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
											>
												{project.description}
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexWrap: "wrap",
													gap: 0.5,
													mb: 2,
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
															borderColor: "primary.main",
															color: "primary.main",
														}}
													/>
												))}
											</Box>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
												}}
											>
												<Typography
													variant="body2"
													color="primary"
													fontWeight="bold"
												>
													View on GitHub →
												</Typography>
												<GitHub color="primary" />
											</Box>
										</CardContent>
									</Card>
								</motion.div>
							</Grid>
						))}
					</Grid>

					{/* GitHub Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<Box sx={{ textAlign: "center", mt: 6 }}>
							<Button
								variant="contained"
								size="large"
								href="https://github.com/Guruprasad1399?tab=repositories"
								target="_blank"
								startIcon={<GitHub />}
								sx={{
									py: 2,
									px: 4,
									borderRadius: 4,
									fontSize: "1.1rem",
									fontWeight: "bold",
									background:
										"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
									"&:hover": {
										background:
											"linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
										transform: "translateY(-2px)",
										boxShadow: "0 8px 25px rgba(33,150,243,0.3)",
									},
									transition: "all 0.3s ease",
								}}
							>
								Explore All 44+ Repositories
							</Button>
							<Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
								Showcasing expertise in AI/ML, Cloud Architecture, Full-Stack
								Development, and more
							</Typography>
						</Box>
					</motion.div>
				</Container>

				{/* Professional Experience Highlight */}
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Paper
							elevation={8}
							sx={{
								p: 6,
								borderRadius: 4,
								background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
								color: "white",
								textAlign: "center",
							}}
						>
							<Typography
								variant="h4"
								component="h2"
								fontWeight="bold"
								gutterBottom
							>
								💼 Professional Journey
							</Typography>
							<Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
								Software Analyst at Nomura • New York, NY
							</Typography>
							<Grid container spacing={6} sx={{ mt: 2 }}>
								{[
									{ number: "5+", label: "Years Experience" },
									{ number: "44+", label: "GitHub Repos" },
									{ number: "15+", label: "Technologies" },
									{ number: "100%", label: "Dedication" },
								].map((stat) => (
									<Grid size={{ xs: 6, md: 3 }} key={stat.label}>
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<Typography
												variant="h3"
												component="div"
												fontWeight="bold"
											>
												{stat.number}
											</Typography>
											<Typography variant="body1" sx={{ opacity: 0.9 }}>
												{stat.label}
											</Typography>
										</motion.div>
									</Grid>
								))}
							</Grid>
						</Paper>
					</motion.div>
				</Container>
			</Container>

			<Footer />
		</Box>
	);
}
