import {
	AlignmentType,
	Document,
	ExternalHyperlink,
	Footer,
	HeadingLevel,
	Packer,
	PageNumber,
	Paragraph,
	TextRun,
} from "docx";
import type { ResumeModel } from "./resume-model";

const BLUE = "155EEF";
const INK = "111827";
const MUTED = "53606F";

const link = (label: string, url: string) =>
	new ExternalHyperlink({
		link: url,
		children: [new TextRun({ text: label, color: BLUE, underline: {} })],
	});

const sectionHeading = (text: string) =>
	new Paragraph({
		text: text.toUpperCase(),
		heading: HeadingLevel.HEADING_1,
		spacing: { before: 100, after: 30 },
	});

export async function renderResumeDocx(resume: ResumeModel): Promise<Buffer> {
	const children: Paragraph[] = [
		new Paragraph({
			children: [new TextRun({ text: resume.name, bold: true, size: 34, color: INK })],
			spacing: { after: 20 },
		}),
		new Paragraph({
			children: [new TextRun({ text: resume.headline, bold: true, size: 19, color: BLUE })],
			spacing: { after: 35 },
		}),
		new Paragraph({
			children: [
				new TextRun({ text: `${resume.location}  |  ${resume.email}  |  ${resume.phone}`, color: MUTED }),
			],
			spacing: { after: 15 },
		}),
		new Paragraph({
			children: [
				link(resume.linkedinLabel, resume.linkedinUrl),
				new TextRun({ text: "  |  ", color: MUTED }),
				link(resume.githubLabel, resume.githubUrl),
				new TextRun({ text: "  |  ", color: MUTED }),
				link(resume.portfolioLabel, resume.portfolioUrl),
			],
			spacing: { after: 25 },
		}),
		sectionHeading("Professional Summary"),
		new Paragraph({ text: resume.summary, spacing: { after: 35, line: 240 } }),
		sectionHeading("Technical Expertise"),
	];

	for (const group of resume.skills) {
		children.push(
			new Paragraph({
				children: [
					new TextRun({ text: `${group.label}: `, bold: true, color: INK }),
					new TextRun({ text: group.items, color: MUTED }),
				],
				spacing: { after: 15, line: 240 },
			}),
		);
	}

	children.push(sectionHeading("Professional Experience"));
	for (const role of resume.experience) {
		children.push(
			new Paragraph({
				children: [
					new TextRun({ text: role.role, bold: true, size: 18, color: INK }),
					new TextRun({ text: `  |  ${role.period}`, color: MUTED, size: 15 }),
				],
				spacing: { before: 20, after: 8 },
				keepNext: true,
			}),
			new Paragraph({
				children: [
					new TextRun({ text: role.company, bold: true, color: BLUE }),
					new TextRun({ text: `  |  ${role.location}`, color: MUTED }),
				],
				spacing: { after: 12 },
				keepNext: true,
			}),
		);
		if (role.summary) {
			children.push(
				new Paragraph({ text: role.summary, spacing: { after: 15, line: 240 } }),
			);
		}
		for (const highlight of role.highlights) {
			children.push(
				new Paragraph({
					text: highlight,
					bullet: { level: 0 },
					spacing: { after: 8, line: 240 },
				}),
			);
		}
		children.push(
			new Paragraph({
				children: [new TextRun({ text: role.stack, italics: true, color: MUTED, size: 14 })],
				spacing: { after: 22 },
			}),
		);
	}

	children.push(sectionHeading("Selected Projects"));
	for (const project of resume.projects) {
		children.push(
			new Paragraph({
				children: [
					new TextRun({ text: project.name, bold: true, color: INK }),
					new TextRun({ text: `  |  ${project.category}`, color: MUTED }),
				],
				spacing: { before: 15, after: 8 },
				keepNext: true,
			}),
			new Paragraph({ text: project.description, spacing: { after: 8, line: 240 } }),
			new Paragraph({
				children: [
					new TextRun({ text: `${project.stack}  |  `, italics: true, color: MUTED, size: 14 }),
					link("Repository", project.url),
				],
				spacing: { after: 18 },
			}),
		);
	}

	children.push(sectionHeading("Education"));
	for (const item of resume.education) {
		children.push(
			new Paragraph({
				children: [
					new TextRun({ text: item.degree, bold: true, color: INK }),
					new TextRun({ text: `  |  ${item.school}  |  ${item.period}  |  ${item.detail}`, color: MUTED }),
				],
				spacing: { before: 8, after: 8 },
			}),
		);
	}

	const document = new Document({
		creator: resume.name,
		title: `${resume.name} - Resume`,
		description: resume.headline,
		styles: {
			default: {
				document: {
					run: { font: "Calibri", size: 17, color: INK },
					paragraph: { spacing: { after: 30, line: 240 } },
				},
			},
			paragraphStyles: [
				{
					id: "Heading1",
					name: "Heading 1",
					basedOn: "Normal",
					next: "Normal",
					quickFormat: true,
					run: { font: "Calibri", size: 19, bold: true, color: BLUE },
					paragraph: { spacing: { before: 100, after: 30 }, outlineLevel: 0 },
				},
			],
		},
		sections: [
			{
				properties: {
					page: {
						size: { width: 12240, height: 15840 },
						margin: { top: 440, right: 620, bottom: 440, left: 620 },
					},
				},
				footers: {
					default: new Footer({
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({ text: `${resume.githubSummary}  |  Generated ${resume.generatedAt}  |  Page `, color: MUTED, size: 13 }),
									new TextRun({ children: [PageNumber.CURRENT], color: MUTED, size: 13 }),
								],
							}),
						],
					}),
				},
				children,
			},
		],
	});

	return Packer.toBuffer(document);
}
