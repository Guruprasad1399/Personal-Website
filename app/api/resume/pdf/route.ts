import { getGitHubProfile } from "../../../lib/github";
import { buildResumeModel } from "../../../lib/resume-model";
import { renderResumePdf } from "../../../lib/resume-pdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
	const github = await getGitHubProfile();
	const pdf = await renderResumePdf(buildResumeModel(github));
	return new Response(new Uint8Array(pdf), {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": 'attachment; filename="Guruprasad_Venkatraman_Resume.pdf"',
			"Cache-Control": "private, no-store, max-age=0",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
