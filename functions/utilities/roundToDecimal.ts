/**
 * Rounds a number to a specified number of decimal places.
 * 
 * @param number - The number to round.
 * @param decimalPlaces - The number of decimal places to round to.
 * @returns - The rounded number.
 * 
 * @example
 * roundToDecimal(1.2345, 2); // returns 1.23
 */
export const roundToDecimal = (number: number, decimalPlaces: number): number => {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
};