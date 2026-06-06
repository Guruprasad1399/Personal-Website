import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import { profile } from "./data/portfolio";
import "./globals.css";

const geist = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(profile.siteUrl),
	title: {
		default: "Guruprasad Venkatraman | Senior Software Engineer",
		template: "%s | Guruprasad Venkatraman",
	},
	description:
		"Senior software engineer building AI-enabled platforms, cloud-native services, and modern full-stack products.",
	keywords: [
		"Guruprasad Venkatraman",
		"Senior Software Engineer",
		"Full-Stack Engineer",
		"AI Engineer",
		"Java",
		"React",
		"AWS Bedrock",
		"Model Context Protocol",
	],
	openGraph: {
		title: "Guruprasad Venkatraman | Senior Software Engineer",
		description:
			"AI, cloud, and full-stack engineering for complex enterprise systems.",
		type: "website",
		images: ["/GuruprasadVenkatraman.jpg"],
	},
	robots: { index: true, follow: true },
	alternates: { canonical: "/" },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f7f8f4" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0c0b" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geist.variable} ${geistMono.variable}`}>
				<InitColorSchemeScript attribute="class" />
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
