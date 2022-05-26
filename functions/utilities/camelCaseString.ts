export function camelCaseString(string: string) {
	if (string) {
		return string
			.replace(/(?:^\w|\[A-Z\]|\b\w)/g, (word, index) => {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, '');
	}
	console.error('ERR: camelCaseString - undefined string');
	return undefined;
}