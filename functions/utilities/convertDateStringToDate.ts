/**
 Converts a date string in the format 'yyyy-mm-dd' to a Date object.
 *
 * @param dateString - The date string to convert.
 * @returns The resulting Date object.
 *
 * @example
 *
 * convertDateStringToDate('2022-12-31');
 * // Returns: Date object representing December 31, 2022
 */
 export function convertDateStringToDate(dateString: string): Date {
    return new Date(dateString.split('-').join(', '));
}