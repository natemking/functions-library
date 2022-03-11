export function extractHexCode(string: string): string {
	if (string) {
		const hexCode = string.match(/#(?:[0-9a-fA-F]{3}){1,2}$/);
		return hexCode[0];
	}
	return undefined;
}
