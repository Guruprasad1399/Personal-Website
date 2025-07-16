import React from "react";
import {
	Box,
	Container,
	Typography,
	Link,
	Divider,
	IconButton,
} from "@mui/material";
import Grid from "@mui/system/Grid";
import { Email, LinkedIn, GitHub, LocationOn } from "@mui/icons-material";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "grey.50",
				borderTop: "1px solid",
				borderColor: "grey.200",
				py: 6,
				mt: "auto",
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} justifyContent="center">
					{/* Contact Information */}
					<Grid size={{ xs: 12, md: 6 }}>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
						>
							Get In Touch
						</Typography>

						<Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
							<Box sx={{ textAlign: "center" }}>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										mb: 2,
									}}
								>
									<Email sx={{ mr: 2, fontSize: 20, color: "primary.main" }} />
									<Link
										href="mailto:vgp1399@gmail.com"
										color="text.primary"
										underline="hover"
										sx={{ fontSize: "1rem", fontWeight: 500 }}
									>
										vgp1399@gmail.com
									</Link>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										mb: 3,
									}}
								>
									<LocationOn
										sx={{ mr: 2, fontSize: 20, color: "primary.main" }}
									/>
									<Typography variant="body1" color="text.secondary">
										New York, NY, USA
									</Typography>
								</Box>
							</Box>
						</Box>

						<Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
							<IconButton
								href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
								target="_blank"
								sx={{
									color: "primary.main",
									backgroundColor: "primary.50",
									"&:hover": {
										backgroundColor: "primary.100",
										transform: "translateY(-2px)",
									},
									transition: "all 0.2s ease",
								}}
							>
								<LinkedIn />
							</IconButton>
							<IconButton
								href="https://github.com/Guruprasad1399?tab=repositories"
								target="_blank"
								sx={{
									color: "text.primary",
									backgroundColor: "grey.100",
									"&:hover": {
										backgroundColor: "grey.200",
										transform: "translateY(-2px)",
									},
									transition: "all 0.2s ease",
								}}
							>
								<GitHub />
							</IconButton>
						</Box>
					</Grid>
				</Grid>

				<Divider sx={{ my: 4 }} />

				<Box sx={{ textAlign: "center" }}>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						&copy; {currentYear} Guruprasad Venkatraman. All rights reserved.
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ fontSize: "0.875rem" }}
					>
						Built with Next.js, TypeScript, and Material-UI
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
