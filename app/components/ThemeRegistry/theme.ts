import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	cssVariables: {
		colorSchemeSelector: "class",
	},
	colorSchemes: {
		light: {
			palette: {
				primary: { main: "#155eef", contrastText: "#ffffff" },
				secondary: { main: "#147d4f" },
				background: { default: "#f7f8f4", paper: "#ffffff" },
				text: { primary: "#101311", secondary: "#5d655f" },
				divider: "#dfe3dc",
			},
		},
		dark: {
			palette: {
				primary: { main: "#76a7ff", contrastText: "#071122" },
				secondary: { main: "#6ee7a8" },
				background: { default: "#0a0c0b", paper: "#111512" },
				text: { primary: "#f4f7f2", secondary: "#aeb8b0" },
				divider: "#2a312c",
			},
		},
	},
	typography: {
		fontFamily: "var(--font-geist-sans), Arial, sans-serif",
		button: { textTransform: "none", fontWeight: 650 },
		h1: { fontWeight: 720, letterSpacing: 0, lineHeight: 0.98 },
		h2: { fontWeight: 680, letterSpacing: 0, lineHeight: 1.08 },
		h3: { fontWeight: 650, letterSpacing: 0, lineHeight: 1.12 },
	},
	shape: { borderRadius: 8 },
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					padding: "10px 16px",
					boxShadow: "none",
					minHeight: 44,
				},
			},
		},
		MuiChip: {
			styleOverrides: { root: { borderRadius: 5, fontWeight: 600 } },
		},
		MuiPaper: {
			styleOverrides: { root: { backgroundImage: "none" } },
		},
		MuiIconButton: {
			styleOverrides: { root: { borderRadius: 6 } },
		},
	},
});

export default theme;
