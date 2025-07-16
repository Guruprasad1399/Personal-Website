"use client";

import React from "react";
import {
	AppBar,
	Toolbar,
	Container,
	Button,
	Box,
	useMediaQuery,
	IconButton,
	Drawer,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import {
	LinkedIn,
	GitHub,
	Menu as MenuIcon,
	Download as DownloadIcon,
} from "@mui/icons-material";
import Link from "next/link";

const navItems = [
	{
		name: "Resume",
		href: "/Guruprasad_Resume.pdf",
		icon: <DownloadIcon />,
		external: true,
		download: true,
	},
	{
		name: "GitHub",
		href: "https://github.com/Guruprasad1399?tab=repositories",
		icon: <GitHub />,
		external: true,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/guruprasad-venkatraman-588591153/",
		icon: <LinkedIn />,
		external: true,
	},
];

export default function Navbar() {
	const isMobile = useMediaQuery("(max-width:768px)");
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const NavLinks = () => (
		<>
			{navItems.map((item) => (
				<Button
					key={item.name}
					component={Link}
					href={item.href}
					target={item.external ? "_blank" : undefined}
					download={item.download ? true : undefined}
					color="inherit"
					startIcon={item.icon}
					sx={{
						mx: 1,
						px: 3,
						py: 1,
						borderRadius: 2,
						fontWeight: 500,
						textTransform: "none",
						"&:hover": {
							backgroundColor: "rgba(37, 99, 235, 0.1)",
							color: "primary.main",
						},
						transition: "all 0.2s ease",
					}}
				>
					{item.name}
				</Button>
			))}
		</>
	);

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{
				backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
				backdropFilter: scrolled ? "blur(10px)" : "none",
				borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
				color: "text.primary",
				transition: "all 0.3s ease",
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						justifyContent: "space-between",
						py: 1,
					}}
				>
					{/* Logo/Name */}
					<Typography
						variant="h6"
						component={Link}
						href="/"
						sx={{
							fontWeight: 700,
							textDecoration: "none",
							color: "inherit",
							"&:hover": {
								color: "primary.main",
							},
							transition: "color 0.2s ease",
						}}
					>
						Guruprasad V.
					</Typography>

					{/* Desktop Navigation */}
					{!isMobile ? (
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<NavLinks />
						</Box>
					) : (
						<>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								sx={{
									"&:hover": {
										backgroundColor: "rgba(37, 99, 235, 0.1)",
									},
								}}
							>
								<MenuIcon />
							</IconButton>
							<Drawer
								anchor="right"
								open={drawerOpen}
								onClose={handleDrawerToggle}
								PaperProps={{
									sx: {
										width: 280,
										backgroundColor: "white",
									},
								}}
							>
								<Box
									sx={{ p: 3 }}
									role="presentation"
									onClick={handleDrawerToggle}
								>
									<Typography
										variant="h6"
										sx={{ mb: 3, fontWeight: 600, color: "text.primary" }}
									>
										Navigation
									</Typography>
									<List sx={{ p: 0 }}>
										{navItems.map((item) => (
											<ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
												<Button
													component={Link}
													href={item.href}
													target={item.external ? "_blank" : undefined}
													download={item.download ? true : undefined}
													fullWidth
													startIcon={item.icon}
													sx={{
														justifyContent: "flex-start",
														py: 2,
														px: 3,
														borderRadius: 2,
														textTransform: "none",
														fontWeight: 500,
														color: "text.primary",
														"&:hover": {
															backgroundColor: "rgba(37, 99, 235, 0.1)",
															color: "primary.main",
														},
													}}
												>
													{item.name}
												</Button>
											</ListItem>
										))}
									</List>
								</Box>
							</Drawer>
						</>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
