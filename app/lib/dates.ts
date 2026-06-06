export type YearMonth = `${number}-${number}`;
export type YearOnly = `${number}`;
export type CalendarDate = YearMonth | YearOnly;

function parseYearMonth(value: YearMonth) {
	const [year, month] = value.split("-").map(Number);
	return { year, month };
}

export function formatYearMonth(value: YearMonth) {
	const { year, month } = parseYearMonth(value);
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	}).format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatCalendarDate(value: CalendarDate) {
	return value.includes("-") ? formatYearMonth(value as YearMonth) : value;
}

export function formatDateRange(start: CalendarDate, end?: CalendarDate) {
	return `${formatCalendarDate(start)} - ${end ? formatCalendarDate(end) : "Present"}`;
}

export function durationSince(start: YearMonth, end?: YearMonth) {
	const startDate = parseYearMonth(start);
	const now = new Date();
	const endDate = end
		? parseYearMonth(end)
		: { year: now.getFullYear(), month: now.getMonth() + 1 };
	const totalMonths = Math.max(
		0,
		(endDate.year - startDate.year) * 12 + endDate.month - startDate.month,
	);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;
	return [
		years ? `${years} yr${years === 1 ? "" : "s"}` : "",
		months ? `${months} mo` : "",
	]
		.filter(Boolean)
		.join(" ");
}
