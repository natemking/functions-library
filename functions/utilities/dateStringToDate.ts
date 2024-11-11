/**
 * Converts a date string into a Date object.
 *
 * The function expects a date string in the format 'YYYY-MM-DD' and converts it into a Date object.
 * It does this by splitting the string on '-', joining it with ', ', and passing the result to the Date constructor.
 *
 * @param dateString - The date string to convert. Expected format is 'YYYY-MM-DD'.
 * @returns The Date object corresponding to the input date string.
 *
 * @example
 *
 * convertDateStringToDate('2022-12-31');
 * // Returns: Date object representing December 31, 2022
 */
export function dateStringToDate(dateString: string): Date {
    return new Date(dateString.split('-').join(', '));
}