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
} from "@mui/material";
import {
	HomeRounded,
	LinkedIn,
	GitHub,
	Menu as MenuIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
	{ name: "Home", href: "/", icon: <HomeRounded /> },
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/guruprasad-venkatraman-588591153/",
		icon: <LinkedIn />,
	},
	{
		name: "GitHub",
		href: "https://github.com/Guruprasad1399?tab=repositories",
		icon: <GitHub />,
	},
];

export default function Navbar() {
	const isMobile = useMediaQuery("(max-width:600px)");
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
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
				<motion.div
					key={item.name}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button
						component={Link}
						href={item.href}
						color="inherit"
						startIcon={item.icon}
						sx={{
							mr: 2,
							borderBottom:
								pathname === item.href ? "2px solid #4ECDC4" : "none",
							borderRadius: 2,
							px: 3,
							py: 1,
							fontWeight: pathname === item.href ? "bold" : "normal",
							background:
								pathname === item.href
									? "rgba(78, 205, 196, 0.1)"
									: "transparent",
							"&:hover": {
								backgroundColor: "rgba(255, 255, 255, 0.15)",
								backdropFilter: "blur(10px)",
								transform: "translateY(-2px)",
								boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							},
							transition: "all 0.3s ease",
						}}
					>
						{item.name}
					</Button>
				</motion.div>
			))}
		</>
	);

	return (
		<AppBar
			position="sticky"
			sx={{
				marginBottom: 2,
				background: scrolled
					? "rgba(30, 41, 59, 0.95)"
					: "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
				backdropFilter: scrolled ? "blur(20px)" : "none",
				boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.1)" : "none",
				transition: "all 0.3s ease",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{ justifyContent: isMobile ? "flex-end" : "center" }}
				>
					{isMobile ? (
						<>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Drawer
								anchor="right"
								open={drawerOpen}
								onClose={handleDrawerToggle}
							>
								<Box
									sx={{ width: 250 }}
									role="presentation"
									onClick={handleDrawerToggle}
								>
									<List>
										{navItems.map((item) => (
											<ListItem key={item.name} disablePadding>
												<Button
													component={Link}
													href={item.href}
													fullWidth
													startIcon={item.icon}
													sx={{ justifyContent: "flex-start", py: 1.5 }}
												>
													{item.name}
												</Button>
											</ListItem>
										))}
									</List>
								</Box>
							</Drawer>
						</>
					) : (
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<NavLinks />
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
