"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
	AppBar,
	Box,
	Button,
	Chip,
	Container,
	Dialog,
	DialogContent,
	Divider,
	Drawer,
	IconButton,
	ListItemIcon,
	Menu as MuiMenu,
	MenuItem,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Toolbar,
	Tooltip,
	Typography,
	useColorScheme,
} from "@mui/material";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
	ArrowDown,
	ArrowUp,
	ArrowUpRight,
	BriefcaseBusiness,
	Check,
	ExternalLink,
	GitFork,
	Mail,
	MapPin,
	Menu as MenuIcon,
	Moon,
	Phone,
	Sparkles,
	Star,
	Sun,
	FileText,
	X,
} from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { GitHubProfile } from "../lib/github";
import { durationSince, formatDateRange } from "../lib/dates";
import {
	education,
	experiences,
	profile,
	projects,
	skillGroups,
	type Project,
} from "../data/portfolio";

const MotionBox = motion.create(Box);

const navItems = [
	{ label: "Experience", href: "#experience" },
	{ label: "Work", href: "#work" },
	{ label: "Expertise", href: "#expertise" },
	{ label: "Contact", href: "#contact" },
];

const accentColors = {
	green: { main: "#29d884", soft: "rgba(41, 216, 132, .14)" },
	blue: { main: "#5c8dff", soft: "rgba(92, 141, 255, .14)" },
	coral: { main: "#ff735d", soft: "rgba(255, 115, 93, .14)" },
	gold: { main: "#e9b949", soft: "rgba(233, 185, 73, .14)" },
};

function LiveDuration({ start }: { start: Parameters<typeof durationSince>[0] }) {
	return <span suppressHydrationWarning>{durationSince(start)}</span>;
}

function formatGitHubDate(value?: string) {
	if (!value) return null;
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		year: "numeric",
	}).format(new Date(value));
}

function SectionHeading({
	eyebrow,
	title,
	copy,
}: {
	eyebrow: string;
	title: string;
	copy?: string;
}) {
	return (
		<Box className="section-heading">
			<Typography className="eyebrow">{eyebrow}</Typography>
			<Typography variant="h2">{title}</Typography>
			{copy && (
				<Typography className="section-copy" color="text.secondary">
					{copy}
				</Typography>
			)}
		</Box>
	);
}

function ThemeToggle() {
	const { mode, setMode } = useColorScheme();
	const nextMode = mode === "dark" ? "light" : "dark";
	return (
		<Tooltip title={`Use ${nextMode} mode`}>
			<IconButton
				aria-label={`Use ${nextMode} mode`}
				onClick={() => setMode(nextMode)}
				className="utility-button"
			>
				{mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
			</IconButton>
		</Tooltip>
	);
}

function ResumeDownloadMenu() {
	const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorElement);
	return (
		<>
			<Button
				variant="contained"
				onClick={(event) => setAnchorElement(event.currentTarget)}
				endIcon={<ArrowDown size={17} />}
				className="nav-cta"
				aria-controls={open ? "resume-download-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
			>
				Resume
			</Button>
			<MuiMenu
				id="resume-download-menu"
				anchorEl={anchorElement}
				open={open}
				onClose={() => setAnchorElement(null)}
				slotProps={{ list: { "aria-label": "Resume download formats" } }}
			>
				<MenuItem component="a" href="/api/resume/pdf" onClick={() => setAnchorElement(null)}>
					<ListItemIcon><FileText size={18} /></ListItemIcon>
					Download PDF
				</MenuItem>
				<MenuItem component="a" href="/api/resume/docx" onClick={() => setAnchorElement(null)}>
					<ListItemIcon><FileText size={18} /></ListItemIcon>
					Download Word
				</MenuItem>
			</MuiMenu>
		</>
	);
}

function Header() {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="fixed" color="transparent" elevation={0} className="site-header">
			<Container maxWidth="xl">
				<Toolbar disableGutters className="nav-toolbar">
					<Box component="a" href="#top" className="wordmark" aria-label="Home">
						<span>GV</span>
						<Typography>Guruprasad Venkatraman</Typography>
					</Box>
					<Stack direction="row" className="desktop-nav">
						{navItems.map((item) => (
							<Button color="inherit" href={item.href} key={item.href}>
								{item.label}
							</Button>
						))}
					</Stack>
					<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
						<ThemeToggle />
						<ResumeDownloadMenu />
						<IconButton
							aria-label="Open navigation"
							onClick={() => setOpen(true)}
							className="mobile-menu utility-button"
						>
							<MenuIcon size={20} />
						</IconButton>
					</Stack>
				</Toolbar>
			</Container>
			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box className="mobile-drawer">
					<Box className="drawer-header">
						<Typography sx={{ fontWeight: 700 }}>Navigate</Typography>
						<IconButton aria-label="Close navigation" onClick={() => setOpen(false)}>
							<X size={20} />
						</IconButton>
					</Box>
					{navItems.map((item, index) => (
						<Button
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="drawer-link"
						>
							<span>0{index + 1}</span>
							{item.label}
							<ArrowUpRight size={18} />
						</Button>
					))}
					<Divider sx={{ my: 2 }} />
					<Button href="/api/resume/pdf" startIcon={<FileText size={18} />} fullWidth>
						Download PDF resume
					</Button>
					<Button href="/api/resume/docx" startIcon={<FileText size={18} />} fullWidth>
						Download Word resume
					</Button>
				</Box>
			</Drawer>
		</AppBar>
	);
}

function CapabilityMap() {
	const reduceMotion = useReducedMotion();
	const nodes = [
		{ label: "React", x: "5%", y: "18%", delay: 0 },
		{ label: "Java", x: "69%", y: "10%", delay: 0.15 },
		{ label: "Bedrock", x: "4%", y: "70%", delay: 0.3 },
		{ label: "MCP", x: "73%", y: "72%", delay: 0.45 },
	];
	return (
		<Box className="capability-map" aria-label="Technology capability map">
			<svg viewBox="0 0 600 520" aria-hidden="true" className="network-lines">
				<path d="M100 130 C210 130 220 250 300 260" />
				<path d="M500 100 C390 120 400 230 300 260" />
				<path d="M95 420 C190 390 205 290 300 260" />
				<path d="M505 420 C410 390 410 300 300 260" />
			</svg>
			<Box className="portrait-frame">
				<Image
					src="/GuruprasadVenkatraman.jpg"
					alt="Guruprasad Venkatraman"
					fill
					priority
					sizes="(max-width: 900px) 68vw, 360px"
				/>
				<Box className="portrait-scan" />
			</Box>
			{nodes.map((node) => (
				<MotionBox
					key={node.label}
					className="map-node"
					sx={{ left: node.x, top: node.y }}
					animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
					transition={{ duration: 4, repeat: Infinity, delay: node.delay }}
				>
					<span />
					{node.label}
				</MotionBox>
			))}
			<Box className="map-status">
				<span /> Live systems
			</Box>
		</Box>
	);
}

function Hero({ github }: { github: GitHubProfile }) {
	return (
		<Box component="section" id="top" className="hero-section">
			<Container maxWidth="xl" className="hero-grid">
				<MotionBox
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65 }}
					className="hero-copy"
				>
					<Box className="availability">
						<span /> {profile.status}
					</Box>
					<Typography variant="h1">
						Engineering systems that turn <em>complexity</em> into momentum.
					</Typography>
					<Typography className="hero-intro">
						I&apos;m Guruprasad, a senior full-stack engineer working across AI,
						cloud platforms, and enterprise product systems. I build reliable
						services and interfaces that help teams move faster.
					</Typography>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} className="hero-actions">
						<Button variant="contained" href="#work" endIcon={<ArrowDown size={18} />}>
							Explore my work
						</Button>
						<Button variant="outlined" href={`mailto:${profile.email}`} startIcon={<Mail size={18} />}>
							Start a conversation
						</Button>
					</Stack>
					<Box className="hero-meta">
						<span><MapPin size={16} /> {profile.location}</span>
						<span><BriefcaseBusiness size={16} /> Senior Software Engineer at Nomura</span>
					</Box>
				</MotionBox>
				<MotionBox
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					<CapabilityMap />
				</MotionBox>
			</Container>
			<Container maxWidth="xl">
				<Box className="proof-strip">
					<div><strong><LiveDuration start={profile.careerStart} /></strong><span>Professional experience</span></div>
					<div><strong>{profile.verifiedImpact.usersSupported}+</strong><span>Enterprise users supported</span></div>
					<div><strong>{github.publicRepos === null ? "Live profile" : `${github.publicRepos} public`}</strong><span>GitHub repositories</span></div>
					<div><strong>{profile.verifiedImpact.processingImprovementPercent}%</strong><span>Processing-time improvement</span></div>
				</Box>
			</Container>
		</Box>
	);
}

function ExperienceSection() {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? experiences : experiences.slice(0, 4);
	return (
		<Box component="section" id="experience" className="section-band">
			<Container maxWidth="xl">
				<SectionHeading
					eyebrow="01 / Experience"
					title="Enterprise depth. Product instincts."
					copy="A progression from mobile product engineering to AI-enabled enterprise platforms and distributed backend systems."
				/>
				<Box className="experience-layout">
					<Box className="experience-spotlight">
						<Typography className="mono-label">CURRENT FOCUS</Typography>
						<Typography variant="h3">AI-native tools for high-stakes systems.</Typography>
						<Typography color="text.secondary">
							At Nomura, I work where enterprise software, operational data, and
							applied AI meet: microservices, MCP integrations, observability, and
							ML-informed risk workflows.
						</Typography>
						<Box className="spotlight-metrics">
							<div><strong>{profile.verifiedImpact.serviceRange}</strong><span>services in the ecosystem</span></div>
							<div><strong>{profile.verifiedImpact.hoursAutomated}+ hrs</strong><span>repetitive work automated</span></div>
							<div><strong><LiveDuration start={experiences[0].start} /></strong><span>in current role</span></div>
						</Box>
					</Box>
					<Box className="timeline">
						<AnimatePresence initial={false}>
							{visible.map((item, index) => (
								<MotionBox
									key={`${item.company}-${item.role}`}
									className="timeline-item"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
								>
									<Box className="timeline-index">{String(index + 1).padStart(2, "0")}</Box>
									<Box className="timeline-content">
										<Box className="timeline-title-row">
											<Box>
												<Typography variant="h5">{item.role}</Typography>
												<Typography className="company-name">{item.company}</Typography>
											</Box>
							<Box className="timeline-date"><span>{formatDateRange(item.start, item.end)}</span>{item.location}</Box>
										</Box>
										<Typography color="text.secondary" className="timeline-summary">{item.summary}</Typography>
										{item.highlights.length > 0 && (
											<Box component="ul" className="achievement-list">
												{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
											</Box>
										)}
										<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
											{item.stack.map((technology) => <Chip key={technology} label={technology} size="small" variant="outlined" />)}
										</Stack>
									</Box>
								</MotionBox>
							))}
						</AnimatePresence>
						<Button onClick={() => setExpanded((value) => !value)} endIcon={expanded ? <ArrowUp size={17} /> : <ArrowDown size={17} />}>
							{expanded ? "Show selected experience" : "Show full timeline"}
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

function ProjectVisual({ project }: { project: Project }) {
	const accent = accentColors[project.accent];
	return (
		<Box className="project-visual" sx={{ "--project-accent": accent.main, "--project-soft": accent.soft }}>
			<Box className="project-visual-top"><span /><span /><span /><Typography>{project.repository}</Typography></Box>
			<Box className="project-code-lines">
				<span className="wide" /><span /><span className="mid" /><span /><span className="wide" />
			</Box>
			<Box className="project-signal"><Sparkles size={20} /><strong>{project.category}</strong></Box>
		</Box>
	);
}

function ProjectDialog({ project, onClose, github }: { project: Project | null; onClose: () => void; github: GitHubProfile }) {
	if (!project) return null;
	const repo = github.repositories[project.repository];
	const url = repo?.url ?? `https://github.com/Guruprasad1399/${project.repository}`;
	const description = repo?.description || project.description;
	return (
		<Dialog open onClose={onClose} maxWidth="md" fullWidth>
			<DialogContent className="project-dialog">
				<Box className="dialog-actions"><Chip label={project.category} /><IconButton aria-label="Close project details" onClick={onClose}><X size={20} /></IconButton></Box>
				<ProjectVisual project={project} />
				<Typography variant="h3">{project.name}</Typography>
				<Typography color="text.secondary" className="dialog-description">{description}</Typography>
				<Box className="dialog-outcome"><Check size={20} /><Typography>{project.outcome}</Typography></Box>
				<Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
					{repo?.language && <Chip label={repo.language} color="primary" />}
					{project.stack.map((item) => <Chip key={item} label={item} variant="outlined" />)}
				</Stack>
				<Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
					<Button variant="contained" href={url} target="_blank" rel="noreferrer" endIcon={<ExternalLink size={17} />}>View repository</Button>
					{repo?.homepage && <Button variant="outlined" href={repo.homepage} target="_blank" rel="noreferrer" endIcon={<ArrowUpRight size={17} />}>Open live project</Button>}
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

function WorkSection({ github }: { github: GitHubProfile }) {
	const [filter, setFilter] = useState("All");
	const [selected, setSelected] = useState<Project | null>(null);
	const categories = ["All", "AI", "Full Stack", "Mobile", "Platform"];
	const filtered = useMemo(() => projects.filter((project) => filter === "All" || project.category === filter), [filter]);
	return (
		<Box component="section" id="work" className="section-band section-contrast">
			<Container maxWidth="xl">
				<Box className="work-heading-row">
					<SectionHeading eyebrow="02 / Selected work" title="Projects built to learn, validate, and ship." copy="A curated set of public repositories. Metadata is refreshed from GitHub automatically." />
					<ToggleButtonGroup exclusive value={filter} onChange={(_, value) => value && setFilter(value)} size="small" aria-label="Filter projects">
						{categories.map((category) => <ToggleButton key={category} value={category}>{category}</ToggleButton>)}
					</ToggleButtonGroup>
				</Box>
				<MotionBox layout className="project-grid">
					<AnimatePresence mode="popLayout">
						{filtered.map((project) => {
							const repo = github.repositories[project.repository];
							const description = repo?.description || project.description;
							const updated = formatGitHubDate(repo?.updatedAt);
							return (
								<MotionBox layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }} className="project-card" key={project.repository} onClick={() => setSelected(project)} role="button" tabIndex={0} aria-label={`View details for ${project.name}`} onKeyDown={(event) => (event.key === "Enter" || event.key === " ") && setSelected(project)}>
									<ProjectVisual project={project} />
									<Box className="project-card-body">
										<Box><Typography className="mono-label">{project.category}</Typography><Typography variant="h4">{project.name}</Typography></Box>
										<Typography color="text.secondary">{description}</Typography>
										<Box className="project-footer"><Stack direction="row" spacing={2}>{repo ? <><span><Star size={14} />{repo.stars}</span><span><GitFork size={14} />{repo.forks}</span>{updated && <span>Updated {updated}</span>}</> : <span><GitHubIcon sx={{ fontSize: 14 }} />Public repository</span>}</Stack><span>View case <ArrowUpRight size={17} /></span></Box>
									</Box>
								</MotionBox>
							);
						})}
					</AnimatePresence>
				</MotionBox>
				<Box className="github-callout">
					<Box><GitHubIcon sx={{ fontSize: 24 }} /><div><Typography sx={{ fontWeight: 700 }}>The rest of the build log</Typography><Typography color="text.secondary">Explore {github.publicRepos === null ? "my public repositories" : `${github.publicRepos} public repositories`}{github.followers > 0 ? ` followed by ${github.followers} developers` : ""} and ongoing experiments on GitHub.</Typography></div></Box>
					<Button href={profile.github} target="_blank" rel="noreferrer" endIcon={<ArrowUpRight size={17} />}>Open GitHub</Button>
				</Box>
			</Container>
			<ProjectDialog project={selected} onClose={() => setSelected(null)} github={github} />
		</Box>
	);
}

function ExpertiseSection() {
	return (
		<Box component="section" id="expertise" className="section-band">
			<Container maxWidth="xl">
				<SectionHeading eyebrow="03 / Expertise" title="Broad enough to connect the system. Deep enough to own it." copy="My strongest work happens across boundaries: backend to interface, model to tool, and prototype to production." />
				<Box className="skills-grid">
					{skillGroups.map((group, index) => (
						<Box className="skill-group" key={group.label}>
							<Box className="skill-number">0{index + 1}</Box>
							<Typography variant="h5">{group.label}</Typography>
							<Box>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</Box>
						</Box>
					))}
				</Box>
				<Box className="education-section">
					<Typography className="eyebrow">Education</Typography>
					{education.map((item) => (
						<Box className="education-row" key={item.degree}>
							<Box><Typography variant="h5">{item.degree}</Typography><Typography color="text.secondary">{item.school}</Typography></Box>
							<Box><Typography>{formatDateRange(item.start, item.end)}</Typography><Typography color="text.secondary">{item.detail}</Typography></Box>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
}

function ContactForm() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
	const [errorMsg, setErrorMsg] = useState("");
	const [fields, setFields] = useState({ name: "", email: "", message: "" });

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("sending");
		setErrorMsg("");
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fields),
			});
			const data = await res.json() as { error?: string };
			if (!res.ok) {
				setErrorMsg(data.error ?? "Something went wrong.");
				setStatus("error");
			} else {
				setStatus("sent");
			}
		} catch {
			setErrorMsg("Network error. Please email me directly.");
			setStatus("error");
		}
	}

	if (status === "sent") {
		return (
			<Box className="form-success">
				<Check size={24} />
				<Typography>Message sent. I&apos;ll get back to you soon.</Typography>
			</Box>
		);
	}

	return (
		<Box component="form" onSubmit={handleSubmit} className="contact-form">
			<Box className="form-row">
				<input
					required
					placeholder="Your name"
					autoComplete="name"
					value={fields.name}
					onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
				/>
				<input
					required
					type="email"
					placeholder="Your email"
					autoComplete="email"
					value={fields.email}
					onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
				/>
			</Box>
			<textarea
				required
				placeholder="What are you working on?"
				rows={5}
				value={fields.message}
				onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
			/>
			{status === "error" && (
				<Typography sx={{ fontSize: 13, color: "#ff735d" }}>{errorMsg}</Typography>
			)}
			<Button
				type="submit"
				variant="contained"
				disabled={status === "sending"}
				endIcon={<ArrowUpRight size={18} />}
				sx={{ alignSelf: "flex-start" }}
			>
				{status === "sending" ? "Sending…" : "Send message"}
			</Button>
		</Box>
	);
}

function ContactSection() {
	return (
		<Box component="section" id="contact" className="contact-section">
			<Container maxWidth="xl">
				<Box className="contact-layout">
					<Box>
						<Typography className="eyebrow">04 / Contact</Typography>
						<Typography variant="h2">Let&apos;s build what&apos;s next.</Typography>
						<Typography className="contact-copy">I&apos;m selectively exploring senior full-stack, platform, and applied AI opportunities where technical depth and product outcomes matter.</Typography>
						<Box className="contact-links">
							<a href={`mailto:${profile.email}`}><Mail size={22} /><span>Email<strong>{profile.email}</strong></span><ArrowUpRight size={20} /></a>
							<a href={`tel:${profile.phoneHref}`}><Phone size={22} /><span>Phone<strong>{profile.phoneDisplay}</strong></span><ArrowUpRight size={20} /></a>
							<a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 22 }} /><span>LinkedIn<strong>Connect professionally</strong></span><ArrowUpRight size={20} /></a>
							<a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 22 }} /><span>GitHub<strong>@Guruprasad1399</strong></span><ArrowUpRight size={20} /></a>
						</Box>
					</Box>
					<ContactForm />
				</Box>
				<Divider />
				<Box className="footer-row"><Typography>© {new Date().getFullYear()} Guruprasad Venkatraman</Typography><Typography>Designed and engineered with Next.js, React, MUI & Motion.</Typography></Box>
			</Container>
		</Box>
	);
}

export default function Portfolio({ github }: { github: GitHubProfile }) {
	return (
		<>
			<a className="skip-link" href="#main-content">Skip to content</a>
			<Header />
			<Box component="main" id="main-content">
				<Hero github={github} />
				<ExperienceSection />
				<WorkSection github={github} />
				<ExpertiseSection />
				<ContactSection />
			</Box>
		</>
	);
}
