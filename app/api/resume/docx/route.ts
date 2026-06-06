import { getGitHubProfile } from "../../../lib/github";
import { renderResumeDocx } from "../../../lib/resume-docx";
import { buildResumeModel } from "../../../lib/resume-model";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
	const github = await getGitHubProfile();
	const docx = await renderResumeDocx(buildResumeModel(github));
	return new Response(new Uint8Array(docx), {
		headers: {
			"Content-Type":
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"Content-Disposition": 'attachment; filename="Guruprasad_Venkatraman_Resume.docx"',
			"Cache-Control": "private, no-store, max-age=0",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
