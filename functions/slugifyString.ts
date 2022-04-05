const slugifyString = (text: string) =>
	text
		.toString()
		.normalize('NFD')
		.replace(/\&/g, 'and')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')