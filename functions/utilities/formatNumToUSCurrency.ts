/**
 * Formats a number to US currency format.
 *
 * @param value - The number to format.
 * @returns The formatted currency string.
 *
 * @example
 * const value = 1234.56;
 * const formattedValue = formatToUsCurrency(value); // '$1,234.56'
 */
export function formatNumToUsCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(isNaN(value) ? 0 : value);
}