/**
 * Checks if a date string range is valid.
 *
 * @param startDateString - The start date string.
 * @param endDateString - The end date string.
 * @returns True if the date range is valid, false otherwise.
 *
 * @example
 * const startDate = '2022-01-01';
 * const endDate = '2022-12-31';
 * const isValid = isDateStringRangeValid(startDate, endDate); // isValid will be true
 */
export const isDateStringRangeValid = (startDateString: string, endDateString: string): boolean => {
    return endDateString.replace(/-/g, '') >= startDateString.replace(/-/g, '');
};