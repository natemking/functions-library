/**
 * Checks if a given date string is valid and represents a date in the past.
 * @param dateString - The date string to validate.
 * @returns A boolean indicating whether the date string is valid and represents a date in the past.
 *
 * @example
 * const pastDate = '2020-01-01';
 * const isValid = isDateStringValid(pastDate); // isValid will be true
 */
export const isDateStringValid = (dateString: string): boolean => {
    const today = new Date();
    const date = new Date(dateString);

    return !isNaN(date.getTime()) && date <= today;
};