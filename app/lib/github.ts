export type GitHubProfile = {
	publicRepos: number | null;
	followers: number;
	updatedAt: string | null;
	repositories: Record<
		string,
		{
			stars: number;
			forks: number;
			updatedAt: string;
			url: string;
			description: string | null;
			language: string | null;
			homepage: string | null;
		}
	>;
};

type GitHubUser = {
	public_repos: number;
	followers: number;
	updated_at: string;
};

type GitHubRepo = {
	name: string;
	fork: boolean;
	stargazers_count: number;
	forks_count: number;
	updated_at: string;
	html_url: string;
	description: string | null;
	language: string | null;
	homepage: string | null;
};

const fallback: GitHubProfile = {
	publicRepos: null,
	followers: 0,
	updatedAt: null,
	repositories: {},
};

export async function getGitHubProfile(): Promise<GitHubProfile> {
	try {
		const headers: Record<string, string> = {
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
		};
		if (process.env.GITHUB_TOKEN) {
			headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
		}
		const [userResponse, reposResponse] = await Promise.all([
			fetch("https://api.github.com/users/Guruprasad1399", {
				headers,
				next: { revalidate: 3600 },
			}),
			fetch(
				"https://api.github.com/users/Guruprasad1399/repos?per_page=100&sort=updated",
				{ headers, next: { revalidate: 3600 } },
			),
		]);

		if (!userResponse.ok || !reposResponse.ok) return fallback;

		const user = (await userResponse.json()) as GitHubUser;
		const repos = (await reposResponse.json()) as GitHubRepo[];
		const repositories = Object.fromEntries(
			repos
				.filter((repo) => !repo.fork)
				.map((repo) => [
					repo.name,
					{
						stars: repo.stargazers_count,
						forks: repo.forks_count,
						updatedAt: repo.updated_at,
						url: repo.html_url,
						description: repo.description,
						language: repo.language,
						homepage: repo.homepage,
					},
				]),
		);

		return {
			publicRepos: user.public_repos,
			followers: user.followers,
			updatedAt: user.updated_at,
			repositories,
		};
	} catch {
		return fallback;
	}
}
