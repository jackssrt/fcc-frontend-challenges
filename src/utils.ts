export function dedent(strings: TemplateStringsArray, ...values: unknown[]): string {
	return strings
		.reduce((acc, cur, i) => {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
			return `${acc}${values[i - 1] ?? ""}${cur}`;
		}, "")
		.replace(/^(\t| {4})+/gm, "");
}
