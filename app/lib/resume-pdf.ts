import PDFDocument from "pdfkit";
import type { ResumeModel } from "./resume-model";

const COLORS = {
	ink: "#111827",
	muted: "#53606F",
	accent: "#155EEF",
	line: "#D9DEE5",
};

export function renderResumePdf(resume: ResumeModel): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument({
			size: "LETTER",
			margins: { top: 38, right: 44, bottom: 38, left: 44 },
			bufferPages: true,
			info: {
				Title: `${resume.name} - Resume`,
				Author: resume.name,
				Subject: resume.headline,
			},
		});
		const chunks: Buffer[] = [];
		doc.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
		doc.on("end", () => resolve(Buffer.concat(chunks)));
		doc.on("error", reject);

		const usableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
		const ensureSpace = (height: number) => {
			if (doc.y + height > doc.page.height - doc.page.margins.bottom) doc.addPage();
		};
		const sectionHeading = (label: string) => {
			ensureSpace(32);
			doc.moveDown(0.45);
			doc.font("Helvetica-Bold").fontSize(10).fillColor(COLORS.accent).text(label.toUpperCase());
			doc.moveDown(0.2);
			doc.strokeColor(COLORS.line).lineWidth(0.7).moveTo(doc.x, doc.y).lineTo(doc.x + usableWidth, doc.y).stroke();
			doc.moveDown(0.45);
		};
		const bullet = (text: string) => {
			doc.font("Helvetica").fontSize(8.4).fillColor(COLORS.ink).list([text], {
				bulletRadius: 1.4,
				bulletIndent: 3,
				textIndent: 10,
				lineGap: 1.5,
			});
			doc.moveDown(0.18);
		};

		doc.font("Helvetica-Bold").fontSize(22).fillColor(COLORS.ink).text(resume.name);
		doc.moveDown(0.1);
		doc.font("Helvetica-Bold").fontSize(10.5).fillColor(COLORS.accent).text(resume.headline);
		doc.moveDown(0.35);
		doc.font("Helvetica").fontSize(8.4).fillColor(COLORS.muted).text(
			`${resume.location}  |  ${resume.email}  |  ${resume.phone}`,
		);
		doc.fillColor(COLORS.accent).text(resume.linkedinLabel, { link: resume.linkedinUrl, continued: true });
		doc.fillColor(COLORS.muted).text("  |  ", { continued: true });
		doc.fillColor(COLORS.accent).text(resume.githubLabel, { link: resume.githubUrl, continued: true });
		doc.fillColor(COLORS.muted).text("  |  ", { continued: true });
		doc.fillColor(COLORS.accent).text(resume.portfolioLabel, { link: resume.portfolioUrl });

		sectionHeading("Professional Summary");
		doc.font("Helvetica").fontSize(9).fillColor(COLORS.ink).text(resume.summary, { lineGap: 2 });

		sectionHeading("Technical Expertise");
		for (const group of resume.skills) {
			doc.font("Helvetica-Bold").fontSize(8.5).fillColor(COLORS.ink).text(`${group.label}: `, { continued: true });
			doc.font("Helvetica").fillColor(COLORS.muted).text(group.items, { lineGap: 1 });
		}

		sectionHeading("Professional Experience");
		for (const role of resume.experience) {
			ensureSpace(role.highlights.length ? 112 : 68);
			const roleY = doc.y;
			doc.font("Helvetica-Bold").fontSize(10).fillColor(COLORS.ink).text(role.role, { width: usableWidth * 0.68 });
			doc.font("Helvetica").fontSize(8).fillColor(COLORS.muted).text(role.period, doc.page.margins.left + usableWidth * 0.7, roleY + 1, {
				width: usableWidth * 0.3,
				align: "right",
			});
			doc.x = doc.page.margins.left;
			doc.y = Math.max(doc.y, roleY + 13);
			doc.font("Helvetica-Bold").fontSize(8.7).fillColor(COLORS.accent).text(role.company, { continued: true });
			doc.font("Helvetica").fillColor(COLORS.muted).text(`  |  ${role.location}`);
			if (role.summary) {
				doc.moveDown(0.18);
				doc.font("Helvetica").fontSize(8.4).fillColor(COLORS.ink).text(role.summary, { lineGap: 1.4 });
				doc.moveDown(0.2);
			}
			for (const highlight of role.highlights) bullet(highlight);
			doc.font("Helvetica-Oblique").fontSize(7.7).fillColor(COLORS.muted).text(role.stack);
			doc.moveDown(0.42);
		}

		sectionHeading("Selected Projects");
		for (const project of resume.projects) {
			ensureSpace(62);
			doc.font("Helvetica-Bold").fontSize(9.2).fillColor(COLORS.ink).text(project.name, { continued: true });
			doc.font("Helvetica").fontSize(8).fillColor(COLORS.muted).text(`  |  ${project.category}`);
			doc.font("Helvetica").fontSize(8.3).fillColor(COLORS.ink).text(project.description, { lineGap: 1.3 });
			doc.font("Helvetica-Oblique").fontSize(7.6).fillColor(COLORS.muted).text(project.stack, { continued: true });
			doc.fillColor(COLORS.accent).text("  |  Repository", { link: project.url });
			doc.moveDown(0.38);
		}

		sectionHeading("Education");
		for (const item of resume.education) {
			ensureSpace(40);
			const educationY = doc.y;
			doc.font("Helvetica-Bold").fontSize(9.2).fillColor(COLORS.ink).text(item.degree, { width: usableWidth * 0.7 });
			doc.font("Helvetica").fontSize(8).fillColor(COLORS.muted).text(item.period, doc.page.margins.left + usableWidth * 0.72, educationY + 1, {
				width: usableWidth * 0.28,
				align: "right",
			});
			doc.x = doc.page.margins.left;
			doc.y = Math.max(doc.y, educationY + 13);
			doc.font("Helvetica").fontSize(8.2).fillColor(COLORS.muted).text(`${item.school}  |  ${item.detail}`);
			doc.moveDown(0.28);
		}

		const pages = doc.bufferedPageRange();
		for (let index = pages.start; index < pages.start + pages.count; index += 1) {
			doc.switchToPage(index);
			const footerY = doc.page.height - doc.page.margins.bottom - 20;
			doc.font("Helvetica").fontSize(7).fillColor(COLORS.muted).text(
				`${resume.githubSummary}  |  Generated ${resume.generatedAt}  |  ${index + 1}/${pages.count}`,
				doc.page.margins.left,
				footerY,
				{ width: usableWidth, align: "center" },
			);
		}

		doc.end();
	});
}
