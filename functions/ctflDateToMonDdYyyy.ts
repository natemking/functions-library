// converting contentfuls yyyy-mm-dd date to Mon dd, yyyy
export function ctflDateToMonDdYyyy(date: string) {
	if (date) {
		return new Date(date.replace('-', ',')).toLocaleDateString(undefined, {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		});
	}
	return undefined;
}