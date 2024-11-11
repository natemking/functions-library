/**
 * Formats a date string to 'yyyy-MM-dd' format.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 *
 * @example
 * const dateString = '20240207';
 * const formattedDateString = formatDateStringYyyyMmDd(dateString); // '2024-02-07'
 */
export function formatDateStringYyyyMmDd(dateString: string): string {
    const date = dateString.replace(/[^\d]/g, '');
    const dateLength = date.length;

    if (dateLength < 4) return date;
    if (dateLength > 4 && dateLength < 6) {
        return `${date.slice(0, 4)}-${date.slice(4, 6)}`;
    }
    if (dateLength > 6) {
        return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
    }
    return dateString;
}