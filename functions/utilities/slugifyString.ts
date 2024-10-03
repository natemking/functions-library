/**
 * Converts a string to a URL-friendly slug.
 * 
 * @param string - The input string to be slugified.
 * @returns - The slugified string.
 * 
 * @example
 * slugifyString('Order History 2'); // 'order-history-2'
 * slugifyString('Café & Restaurant'); // 'cafe-and-restaurant'
 */
export const slugifyString = (string: string): string => {
	if (string) {
		return string
			.toString()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/&/g, 'and')
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-');
	}
	console.error('ERR: slugifyString - undefined string');
	return '';
}