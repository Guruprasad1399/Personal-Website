import { education, experiences, profile, projects, skillGroups } from "../data/portfolio";
import { durationSince, formatDateRange } from "./dates";
import type { GitHubProfile } from "./github";

export function buildResumeModel(github: GitHubProfile) {
	return {
		name: profile.name,
		headline: profile.headline,
		location: profile.location,
		email: profile.email,
		phone: profile.phoneDisplay,
		githubLabel: "github.com/Guruprasad1399",
		githubUrl: profile.github,
		linkedinLabel: "linkedin.com/in/guruprasad-venkatraman-588591153",
		linkedinUrl: profile.linkedin,
		portfolioLabel: new URL(profile.siteUrl).host,
		portfolioUrl: profile.siteUrl,
		summary: `Senior full-stack engineer with ${durationSince(profile.careerStart)} of professional experience building AI-enabled platforms, cloud-native services, microservice ecosystems, and modern product interfaces. Experienced across Java, Spring Boot, React, Python, AWS Bedrock, Anthropic APIs, and Model Context Protocol integrations.`,
		experience: experiences.map((item, index) => ({
			company: item.company,
			role: item.role,
			period: formatDateRange(item.start, item.end),
			location: item.location,
			summary: index === 0 ? item.summary : "",
			highlights: item.highlights,
			stack: item.stack.join(" · "),
		})),
		skills: skillGroups.map((group) => ({
			label: group.label,
			items: group.skills.join(", "),
		})),
		projects: projects.slice(0, 2).map((project) => {
			const repository = github.repositories[project.repository];
			return {
				name: project.name,
				category: project.category,
				description: repository?.description || project.description,
				stack: project.stack.join(" · "),
				url:
					repository?.url ||
					`https://github.com/Guruprasad1399/${project.repository}`,
			};
		}),
		education: education.map((item) => ({
			degree: item.degree,
			school: item.school,
			period: formatDateRange(item.start, item.end),
			detail: item.detail,
		})),
		githubSummary:
			github.publicRepos === null
				? "Public engineering portfolio on GitHub"
				: `${github.publicRepos} public GitHub repositories`,
		generatedAt: new Intl.DateTimeFormat("en-US", {
			month: "long",
			year: "numeric",
		}).format(new Date()),
	};
}

export type ResumeModel = ReturnType<typeof buildResumeModel>;
