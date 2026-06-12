import { ImageResponse } from "next/og";

export const alt = "Guruprasad Venkatraman – Senior Software Engineer · AI & Cloud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGS = ["Java · Spring Boot", "React · Next.js", "AWS Bedrock", "MCP", "Python"];

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "#0a0c0b",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "72px 80px",
					fontFamily: "sans-serif",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Grid background */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"linear-gradient(rgba(42,49,44,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(42,49,44,0.55) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
						display: "flex",
					}}
				/>
				{/* Fade edges */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(90deg, #0a0c0b 0%, transparent 30%, transparent 70%, #0a0c0b 100%)",
						display: "flex",
					}}
				/>

				{/* Top bar */}
				<div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
					<div
						style={{
							width: "44px",
							height: "44px",
							background: "#f4f7f2",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "15px",
							fontWeight: 700,
							color: "#0a0c0b",
						}}
					>
						GV
					</div>
					<div
						style={{
							display: "flex",
							fontSize: "13px",
							color: "#5d655f",
							letterSpacing: "0.12em",
							textTransform: "uppercase",
						}}
					>
						guruprasad venkatraman
					</div>
				</div>

				{/* Main content */}
				<div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div
							style={{
								fontSize: "76px",
								fontWeight: 800,
								color: "#f4f7f2",
								lineHeight: 1.05,
								letterSpacing: "-0.03em",
								display: "flex",
							}}
						>
							Senior Software
						</div>
						<div
							style={{
								fontSize: "76px",
								fontWeight: 800,
								color: "#f4f7f2",
								lineHeight: 1.05,
								letterSpacing: "-0.03em",
								display: "flex",
							}}
						>
							Engineer
						</div>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
						<div style={{ width: "40px", height: "3px", background: "#22c979", display: "flex" }} />
						<div style={{ display: "flex", fontSize: "22px", color: "#aeb8b0", letterSpacing: "-0.01em" }}>
							AI-enabled platforms · Cloud · Full-stack
						</div>
					</div>
				</div>

				{/* Bottom tags */}
				<div style={{ display: "flex", gap: "10px", position: "relative", flexWrap: "wrap" }}>
					{TAGS.map((tag) => (
						<div
							key={tag}
							style={{
								display: "flex",
								padding: "9px 16px",
								border: "1px solid #2a312c",
								color: "#6ee7a8",
								fontSize: "13px",
								letterSpacing: "0.02em",
								fontFamily: "monospace",
							}}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		),
		size,
	);
}
