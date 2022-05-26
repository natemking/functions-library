export function camelToTitleCaseString(string: string) {
	if (string) {
		return string
			.replace(/([A-Z])/g, (match) => ` ${match}`)
			.replace(/^./, (match) => match.toUpperCase())
			.trim();
	}
	console.error('ERR: camelToTitleCaseString - undefined string');
	return undefined;
}