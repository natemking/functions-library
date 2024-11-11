/**
 * Replaces an element at a specific index in an array with a new value.
 *
 * @typeParam T - The type of the elements in the array.
 * @param array - The array to be modified.
 * @param index - The index of the element to be replaced.
 * @param replaceWith - The new value that will replace the element at the specified index.
 *
 * @returns A new array with the replaced element.
 *
 * @example
 * const originalArray = [1, 2, 3, 4, 5];
 * const replacedArray = replaceAtArrayIndex(originalArray, 2, 10);
 * // replacedArray is [1, 2, 10, 4, 5]
 */
export const replaceAtArrayIndex = <T>(array: T[], index: number, replaceWith: T): T[] =>
    array.map((item, idx) => (idx === index ? replaceWith : item));