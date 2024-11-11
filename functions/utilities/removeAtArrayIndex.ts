/**
 * Removes an element at the specified index from an array.
 *
 * @typeParam T - The type of elements in the array.
 * @param array - The array from which to remove the element.
 * @param index - The index of the element to remove.
 *
 * @returns A new array with the element removed.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const index = 2;
 * const newArray = removeAtArrayIndex(array, index);
 * // newArray is [1, 2, 4, 5]
 */
export const removeAtArrayIndex = <T>(array: T[], index: number): T[] =>
    array.filter((_, idx) => idx !== index);