/**
 * Checks if the current device supports touch events.
 * 
 * @returns - Returns true if the device supports touch events, otherwise false.
 * 
 * @example
 * isTouchDevice(); // returns true or false
 */

export const isTouchDevice = (): boolean =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0;