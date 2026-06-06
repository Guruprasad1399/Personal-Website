import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Guruprasad Venkatraman - Professional Portfolio",
		short_name: "Guruprasad V.",
		description:
			"Senior software engineer building AI-enabled platforms, cloud-native services, and full-stack products.",
		start_url: "/",
		display: "standalone",
		background_color: "#f7f8f4",
		theme_color: "#101311",
		icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
	};
}
