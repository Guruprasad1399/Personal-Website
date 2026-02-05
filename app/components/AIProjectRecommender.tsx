"use client";
import React, { useState } from "react";
import {
	Box,
	Paper,
	Typography,
	Chip,
	Button,
	Card,
	CardContent,
	Fade,
	CircularProgress,
} from "@mui/material";
import { AutoAwesome as AIIcon, GitHub, Psychology } from "@mui/icons-material";

interface Project {
	name: string;
	description: string;
	tech: string[];
	github: string;
	category: string;
	tags: string[];
	complexity: number;
	aiScore: number;
}

const PROJECTS: Project[] = [
	{
		name: "NovaTrader",
		description:
			"Full-stack trading platform with real-time market data, portfolio management, and advanced analytics",
		tech: ["TypeScript", "React", "Python", "AWS", "Real-time APIs"],
		github: "https://github.com/Guruprasad1399/NovaTrader",
		category: "Enterprise",
		tags: ["fintech", "trading", "real-time", "analytics", "enterprise"],
		complexity: 9,
		aiScore: 7,
	},
	{
		name: "AI Application",
		description:
			"Advanced AI application with machine learning integrations and intelligent user interfaces",
		tech: ["TypeScript", "AI/ML", "React", "Next.js", "OpenAI"],
		github: "https://github.com/Guruprasad1399/AI_App",
		category: "AI/ML",
		tags: ["ai", "machine-learning", "openai", "intelligent", "automation"],
		complexity: 8,
		aiScore: 10,
	},
	{
		name: "Cloud E-commerce Backend",
		description:
			"Scalable microservices architecture for high-volume e-commerce operations",
		tech: ["Node.js", "GraphQL", "Docker", "Kubernetes", "MongoDB"],
		github: "https://github.com/Guruprasad1399/Cloud-native_e-commerce-Backend",
		category: "Cloud Native",
		tags: ["cloud", "microservices", "scalable", "ecommerce", "kubernetes"],
		complexity: 8,
		aiScore: 6,
	},
	{
		name: "Angular Blog Platform",
		description:
			"Modern full-stack blogging platform with rich text editing and real-time collaboration",
		tech: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
		github: "https://github.com/Guruprasad1399/angular-blog-platform",
		category: "Full-Stack",
		tags: ["blog", "collaboration", "content", "full-stack", "angular"],
		complexity: 7,
		aiScore: 5,
	},
	{
		name: "ShopWiseLocal",
		description:
			"React Native mobile app connecting users with local businesses and services",
		tech: ["React Native", "JavaScript", "Node.js", "Firebase", "Maps API"],
		github: "https://github.com/Guruprasad1399/shopWiseLocal",
		category: "Mobile",
		tags: ["mobile", "local", "business", "maps", "community"],
		complexity: 6,
		aiScore: 4,
	},
	{
		name: "MAUI Cross-Platform App",
		description:
			".NET MAUI Windows application with Bluetooth connectivity and device integration",
		tech: ["C#", ".NET MAUI", "Windows", "Bluetooth", "IoT"],
		github: "https://github.com/Guruprasad1399/MAUI_App",
		category: "Cross-Platform",
		tags: ["cross-platform", "iot", "bluetooth", "windows", "devices"],
		complexity: 7,
		aiScore: 5,
	},
];

const INTEREST_CATEGORIES = [
	{
		name: "AI & Machine Learning",
		tags: ["ai", "machine-learning", "intelligent", "automation"],
		icon: "🤖",
	},
	{
		name: "Cloud & DevOps",
		tags: ["cloud", "microservices", "scalable", "kubernetes"],
		icon: "☁️",
	},
	{
		name: "Financial Technology",
		tags: ["fintech", "trading", "analytics", "enterprise"],
		icon: "💰",
	},
	{
		name: "Mobile Development",
		tags: ["mobile", "cross-platform", "apps"],
		icon: "📱",
	},
	{
		name: "Full-Stack Web",
		tags: ["full-stack", "web", "blog", "content"],
		icon: "🌐",
	},
	{
		name: "IoT & Hardware",
		tags: ["iot", "bluetooth", "devices", "hardware"],
		icon: "🔧",
	},
];

export default function AIProjectRecommender() {
	const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
	const [recommendations, setRecommendations] = useState<Project[]>([]);
	const [isAnalyzing, setIsAnalyzing] = useState(false);
	const [showRecommendations, setShowRecommendations] = useState(false);

	const calculateRecommendationScore = (
		project: Project,
		interests: string[]
	): number => {
		let score = 0;

		// Tag matching score
		const tagMatches = project.tags.filter((tag) =>
			interests.some((interest) =>
				INTEREST_CATEGORIES.find((cat) => cat.name === interest)?.tags.includes(
					tag
				)
			)
		).length;
		score += tagMatches * 3;

		// AI bonus for AI-related interests
		if (interests.includes("AI & Machine Learning")) {
			score += project.aiScore;
		}

		// Complexity bonus for technical interests
		if (
			interests.includes("Cloud & DevOps") ||
			interests.includes("Financial Technology")
		) {
			score += project.complexity * 0.5;
		}

		// Category direct match
		if (
			interests.some((interest) =>
				project.category.toLowerCase().includes(interest.toLowerCase())
			)
		) {
			score += 5;
		}

		return score;
	};

	const generateRecommendations = async () => {
		if (selectedInterests.length === 0) return;

		setIsAnalyzing(true);

		// Simulate AI analysis time
		await new Promise((resolve) => setTimeout(resolve, 2000));

		const scoredProjects = PROJECTS.map((project) => ({
			...project,
			recommendationScore: calculateRecommendationScore(
				project,
				selectedInterests
			),
		}))
			.filter((project) => project.recommendationScore > 0)
			.sort((a, b) => b.recommendationScore - a.recommendationScore)
			.slice(0, 3);

		setRecommendations(scoredProjects);
		setIsAnalyzing(false);
		setShowRecommendations(true);
	};

	const handleInterestToggle = (interest: string) => {
		setSelectedInterests((prev) =>
			prev.includes(interest)
				? prev.filter((i) => i !== interest)
				: [...prev, interest]
		);
		setShowRecommendations(false);
	};

	const resetRecommendations = () => {
		setSelectedInterests([]);
		setRecommendations([]);
		setShowRecommendations(false);
	};

	return (
		<Paper
			sx={{
				p: 6,
				backgroundColor: "grey.50",
				border: "1px solid",
				borderColor: "grey.200",
			}}
		>
			<Box sx={{ textAlign: "center", mb: 4 }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 2,
						mb: 2,
					}}
				>
					<AIIcon color="primary" sx={{ fontSize: 32 }} />
					<Typography variant="h4" className="gradient-text" fontWeight={600}>
						AI Project Recommender
					</Typography>
				</Box>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ fontSize: "1.1rem" }}
				>
					Tell me your interests, and I'll recommend the most relevant projects
					from my portfolio
				</Typography>
			</Box>

			{!showRecommendations && (
				<>
					<Typography
						variant="h6"
						gutterBottom
						sx={{ mb: 3, textAlign: "center" }}
					>
						What interests you most?
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
						{INTEREST_CATEGORIES.map((category) => (
							<Chip
								key={category.name}
								label={`${category.icon} ${category.name}`}
								variant={
									selectedInterests.includes(category.name)
										? "filled"
										: "outlined"
								}
								color={
									selectedInterests.includes(category.name)
										? "primary"
										: "default"
								}
								onClick={() => handleInterestToggle(category.name)}
								sx={{
									fontSize: "1rem",
									py: 2,
									px: 1,
									cursor: "pointer",
									"&:hover": {
										backgroundColor: selectedInterests.includes(category.name)
											? "primary.dark"
											: "primary.50",
									},
									transition: "all 0.2s ease",
								}}
							/>
						))}
					</Box>

					<Box sx={{ textAlign: "center" }}>
						<Button
							variant="contained"
							size="large"
							onClick={generateRecommendations}
							disabled={selectedInterests.length === 0 || isAnalyzing}
							startIcon={
								isAnalyzing ? (
									<CircularProgress size={20} color="inherit" />
								) : (
									<Psychology />
								)
							}
							sx={{ px: 4, py: 1.5 }}
						>
							{isAnalyzing
								? "Analyzing Your Interests..."
								: "Get AI Recommendations"}
						</Button>
					</Box>
				</>
			)}

			{showRecommendations && (
				<Fade in={showRecommendations}>
					<Box>
						<Box sx={{ textAlign: "center", mb: 4 }}>
							<Typography
								variant="h5"
								gutterBottom
								color="primary"
								fontWeight={600}
							>
								🎯 Recommended Projects for You
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Based on your interests: {selectedInterests.join(", ")}
							</Typography>
						</Box>

						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
							{recommendations.map((project, index) => (
								<Box key={project.name} sx={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '300px' }}>
									<Fade in={true} timeout={500 + index * 200}>
										<Card
											component="a"
											href={project.github}
											target="_blank"
											sx={{
												height: "100%",
												textDecoration: "none",
												cursor: "pointer",
												border: "2px solid",
												borderColor: index === 0 ? "primary.main" : "grey.200",
												position: "relative",
												"&:hover": {
													transform: "translateY(-4px)",
													boxShadow: 4,
												},
												transition: "all 0.2s ease",
											}}
										>
											{index === 0 && (
												<Chip
													label="🏆 Top Match"
													color="primary"
													size="small"
													sx={{
														position: "absolute",
														top: 12,
														right: 12,
														zIndex: 1,
														fontWeight: 600,
													}}
												/>
											)}
											<CardContent sx={{ p: 3 }}>
												<Typography variant="h6" fontWeight={600} gutterBottom>
													{project.name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													sx={{ mb: 2, lineHeight: 1.5 }}
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
													{project.tech.slice(0, 3).map((tech) => (
														<Chip
															key={tech}
															label={tech}
															size="small"
															variant="outlined"
															sx={{ fontSize: "0.7rem" }}
														/>
													))}
													{project.tech.length > 3 && (
														<Chip
															label={`+${project.tech.length - 3} more`}
															size="small"
															variant="outlined"
															sx={{ fontSize: "0.7rem", opacity: 0.7 }}
														/>
													)}
												</Box>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
													}}
												>
													<Chip
														label={project.category}
														size="small"
														color="primary"
														variant="outlined"
													/>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															color: "primary.main",
														}}
													>
														<GitHub sx={{ mr: 0.5, fontSize: 16 }} />
														<Typography variant="caption" fontWeight={500}>
															View Code
														</Typography>
													</Box>
												</Box>
											</CardContent>
										</Card>
									</Fade>
								</Box>
							))}
						</Box>

						<Box sx={{ textAlign: "center" }}>
							<Button
								variant="outlined"
								onClick={resetRecommendations}
								sx={{ mr: 2 }}
							>
								Try Different Interests
							</Button>
							<Button
								variant="contained"
								href="https://github.com/Guruprasad1399?tab=repositories"
								target="_blank"
								startIcon={<GitHub />}
							>
								View All Projects
							</Button>
						</Box>
					</Box>
				</Fade>
			)}
		</Paper>
	);
}
