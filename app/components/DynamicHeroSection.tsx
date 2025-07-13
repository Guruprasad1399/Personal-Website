"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Paper, Chip, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
	LocationOn as LocationIcon,
	Work as WorkIcon,
	TrendingUp as TrendingUpIcon,
	Psychology as AIIcon,
} from "@mui/icons-material";

export default function DynamicHeroSection() {
	const [currentRole, setCurrentRole] = useState(0);

	const roles = [
		"🤖 AI-Powered Full-Stack Developer",
		"🧠 Machine Learning Engineer",
		"☁️ Cloud Solutions Architect",
		"🚀 Technical Innovation Leader",
		"💡 AI Platform Developer",
		"⚡ Enterprise Software Engineer",
	];

	const highlights = [
		{ icon: <WorkIcon />, text: "Software Analyst @ Nomura", color: "#2196F3" },
		{ icon: <LocationIcon />, text: "New York, NY", color: "#4CAF50" },
		{ icon: <TrendingUpIcon />, text: "5+ Years Experience", color: "#FF9800" },
		{ icon: <AIIcon />, text: "AI/ML Specialist", color: "#9C27B0" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [roles.length]);

	return (
		<Box
			sx={{
				position: "relative",
				py: 8,
				textAlign: "center",
				overflow: "hidden",
			}}
		>
			{/* Animated Background Elements */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					opacity: 0.05,
					borderRadius: 4,
				}}
			/>

			{/* Floating Particles */}
			{[...Array(20)].map((_, i) => (
				<motion.div
					key={i}
					className="particle"
					style={{
						position: "absolute",
						width: Math.random() * 6 + 4,
						height: Math.random() * 6 + 4,
						backgroundColor: `rgba(${Math.random() * 100 + 100}, ${
							Math.random() * 100 + 150
						}, ${Math.random() * 100 + 200}, 0.3)`,
						borderRadius: "50%",
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, -30, 0],
						x: [0, Math.random() * 20 - 10, 0],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 3 + Math.random() * 2,
						repeat: Infinity,
						delay: Math.random() * 2,
					}}
				/>
			))}

			{/* Main Hero Content */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				style={{ position: "relative", zIndex: 1 }}
			>
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<Avatar
						src="/GuruprasadVenkatraman.jpg"
						alt="Guruprasad Venkatraman"
						sx={{
							width: { xs: 150, md: 200 },
							height: { xs: 150, md: 200 },
							margin: "0 auto",
							mb: 3,
							border: "4px solid",
							borderColor: "primary.main",
							boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
							transition: "all 0.3s ease-in-out",
							"&:hover": {
								boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
							},
						}}
					/>
				</motion.div>

				<Box>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						<Typography
							variant="h3"
							component="h1"
							fontWeight="bold"
							gutterBottom
							sx={{
								background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								fontSize: { xs: "2rem", md: "3rem" },
							}}
						>
							Guruprasad Venkatraman
						</Typography>
					</motion.div>

					<Box
						sx={{
							height: "80px",
							mb: 3,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={currentRole}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
							>
								<Typography
									variant="h5"
									color="primary"
									fontWeight="500"
									sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
								>
									{roles[currentRole]}
								</Typography>
							</motion.div>
						</AnimatePresence>
					</Box>

					{/* Professional Highlights */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
					>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								gap: 2,
								justifyContent: "center",
								mb: 4,
							}}
						>
							{highlights.map((highlight, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Chip
										icon={highlight.icon}
										label={highlight.text}
										sx={{
											background: `linear-gradient(45deg, ${highlight.color} 30%, ${highlight.color}99 90%)`,
											color: "white",
											fontWeight: "bold",
											fontSize: "0.9rem",
											py: 2,
											px: 1,
											"& .MuiChip-icon": {
												color: "white",
											},
										}}
									/>
								</motion.div>
							))}
						</Box>
					</motion.div>

					{/* Quick Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.6 }}
					>
						<Paper
							elevation={3}
							sx={{
								display: "inline-block",
								p: 3,
								borderRadius: 3,
								background: "rgba(255, 255, 255, 0.9)",
								backdropFilter: "blur(10px)",
								mb: 4,
							}}
						>
							<Typography
								variant="body1"
								color="text.primary"
								sx={{ fontWeight: 500 }}
							>
								Currently building AI-powered solutions at{" "}
								<strong>Nomura</strong> • Specialized in LLM integrations and
								scalable cloud architecture • Master's in CS from Cleveland
								State University
							</Typography>
						</Paper>
					</motion.div>
				</Box>
			</motion.div>
		</Box>
	);
}
