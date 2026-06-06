import { getGitHubProfile } from "./lib/github";
import Portfolio from "./components/Portfolio";
import { education, experiences, profile } from "./data/portfolio";

export const revalidate = 3600;

export default async function Home() {
	const github = await getGitHubProfile();
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: profile.name,
		url: profile.siteUrl,
		image: `${profile.siteUrl}/GuruprasadVenkatraman.jpg`,
		jobTitle: experiences[0].role,
		worksFor: { "@type": "Organization", name: experiences[0].company },
		alumniOf: education.slice(1).map((item) => ({
			"@type": "EducationalOrganization",
			name: item.school,
		})),
		email: `mailto:${profile.email}`,
		telephone: profile.phoneHref,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Bensalem",
			addressRegion: "PA",
			addressCountry: "US",
		},
		sameAs: [profile.github, profile.linkedin],
		knowsAbout: [
			"Full-stack engineering",
			"Artificial intelligence",
			"Cloud computing",
			"Java",
			"React",
			"AWS Bedrock",
			"Model Context Protocol",
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Portfolio github={github} />
		</>
	);
}
