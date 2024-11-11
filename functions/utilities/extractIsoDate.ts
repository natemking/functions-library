/**
 * Extracts the date part from a Date object in ISO format.
 *
 * @param date - The Date object to extract the date from.
 * @returns The date part in 'yyyy-MM-dd' format.
 *
 * @example
 * const date = new Date('2024-02-07T00:00:00.000Z');
 * const isoDate = extractIsoDate(date); // '2024-02-07'
 */
export function extractIsoDate(date: Date): string {
    return date.toISOString().split('T')[0];
}