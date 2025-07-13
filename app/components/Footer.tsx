import React from "react";
import {
	Box,
	Container,
	Typography,
	Link,
	Divider,
	IconButton,
	Chip,
} from "@mui/material";
import Grid from "@mui/system/Grid";
import {
	Email,
	LinkedIn,
	GitHub,
	LocationOn,
	Phone,
	TrendingUp,
	Code,
	Cloud,
	Psychology,
} from "@mui/icons-material";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
		{ name: "Experience", href: "#experience" },
	];

	const technologies = [
		"React",
		"Next.js",
		"TypeScript",
		"Python",
		"AWS",
		"Node.js",
	];

	return (
		<Box
			component="footer"
			sx={{
				background: "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
				color: "white",
				py: 6,
				mt: "auto",
				position: "relative",
				overflow: "hidden",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
				},
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					{/* Contact Information */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold", mb: 3 }}
						>
							Contact
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
							<Email sx={{ mr: 2, fontSize: 20, color: "primary.light" }} />
							<Link
								href="mailto:guruprasad.venkatraman@gmail.com"
								color="inherit"
								underline="hover"
								sx={{ fontSize: "0.9rem" }}
							>
								guruprasad.venkatraman@gmail.com
							</Link>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
							<LocationOn
								sx={{ mr: 2, fontSize: 20, color: "primary.light" }}
							/>
							<Typography variant="body2">New York, NY, USA</Typography>
						</Box>
						<Box sx={{ display: "flex", gap: 1, mt: 2 }}>
							<IconButton
								href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
								target="_blank"
								sx={{
									color: "white",
									bgcolor: "rgba(255,255,255,0.1)",
									"&:hover": {
										bgcolor: "#0077B5",
										transform: "translateY(-2px)",
									},
									transition: "all 0.3s ease",
								}}
							>
								<LinkedIn />
							</IconButton>
							<IconButton
								href="https://github.com/Guruprasad1399?tab=repositories"
								target="_blank"
								sx={{
									color: "white",
									bgcolor: "rgba(255,255,255,0.1)",
									"&:hover": { bgcolor: "#333", transform: "translateY(-2px)" },
									transition: "all 0.3s ease",
								}}
							>
								<GitHub />
							</IconButton>
						</Box>
					</Grid>

					{/* Quick Links */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold", mb: 3 }}
						>
							Quick Links
						</Typography>
						{quickLinks.map((link) => (
							<Box key={link.name} sx={{ mb: 1 }}>
								<Link
									href={link.href}
									color="inherit"
									underline="none"
									sx={{
										fontSize: "0.9rem",
										opacity: 0.8,
										"&:hover": { opacity: 1, color: "primary.light" },
										transition: "all 0.3s ease",
									}}
								>
									{link.name}
								</Link>
							</Box>
						))}
					</Grid>

					{/* Technologies */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold", mb: 3 }}
						>
							Core Technologies
						</Typography>
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
							{technologies.map((tech) => (
								<Chip
									key={tech}
									label={tech}
									size="small"
									sx={{
										bgcolor: "rgba(255,255,255,0.1)",
										color: "white",
										border: "1px solid rgba(255,255,255,0.2)",
										"&:hover": {
											bgcolor: "primary.main",
											transform: "translateY(-1px)",
										},
										transition: "all 0.3s ease",
									}}
								/>
							))}
						</Box>
					</Grid>

					{/* Professional Summary */}
					<Grid size={{ xs: 12, md: 3 }}>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: "bold", mb: 3 }}
						>
							About
						</Typography>
						<Typography
							variant="body2"
							sx={{ lineHeight: 1.6, opacity: 0.9, mb: 2 }}
						>
							Software Engineer at Nomura specializing in AI-powered solutions
							and cloud architecture. 5+ years of full-stack development
							experience.
						</Typography>
						<Box sx={{ display: "flex", gap: 1, mt: 2 }}>
							<Psychology sx={{ fontSize: 16, color: "primary.light" }} />
							<Typography variant="caption">AI Specialist</Typography>
						</Box>
						<Box sx={{ display: "flex", gap: 1 }}>
							<Cloud sx={{ fontSize: 16, color: "primary.light" }} />
							<Typography variant="caption">Cloud Expert</Typography>
						</Box>
					</Grid>
				</Grid>

				<Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />

				<Box sx={{ textAlign: "center" }}>
					<Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
						&copy; {currentYear} Guruprasad Venkatraman. All rights reserved.
					</Typography>
					<Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.8rem" }}>
						Built with Next.js, TypeScript, Material-UI, and Framer Motion
					</Typography>
					<Typography
						variant="body2"
						sx={{ opacity: 0.6, fontSize: "0.8rem", mt: 1 }}
					>
						🚀 Designed for performance, accessibility, and modern user
						experience
					</Typography>
					<Box
						sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}
					>
						<Link
							href="/Guruprasad_Resume.pdf"
							target="_blank"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.8rem", opacity: 0.8 }}
						>
							📄 Resume
						</Link>
						<Link
							href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
							target="_blank"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.8rem", opacity: 0.8 }}
						>
							💼 LinkedIn
						</Link>
						<Link
							href="https://github.com/Guruprasad1399?tab=repositories"
							target="_blank"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.8rem", opacity: 0.8 }}
						>
							🔗 GitHub
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
