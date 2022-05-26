export function slugifyString(string: string) {
	if (string) {
		return string
			.toString()
			.normalize('NFD')
			.replace(/\&/g, 'and')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-');
	}
	console.error('ERR: slugifyString - undefined string');
	return undefined;
}