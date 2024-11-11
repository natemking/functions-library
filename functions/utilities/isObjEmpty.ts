/**
 * Checks if an object is empty.
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 *
 * @example
 * ```ts
 * const emptyObj = {};
 * const nonEmptyObj = { key: 'value' };
 * ```
 * const isEmpty = isObjEmpty(emptyObj); // isEmpty will be true
 *
 * const isNotEmpty = isObjEmpty(nonEmptyObj); // isNotEmpty will be false
 */
export const isObjEmpty = (obj: unknown): boolean => {
    if (!obj) return false;
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
