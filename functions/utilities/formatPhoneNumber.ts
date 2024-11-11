/**
 * Formats a given phone number string into a standard format.
 * 
 * The function removes any non-digit characters from the input string and formats it as follows:
 * - If the phone number has 11 digits and starts with '1', the leading '1' is removed.
 * - If the phone number has less than 4 digits, it returns the digits as is.
 * - If the phone number has between 4 and 6 digits, it formats it as (XXX) XXX.
 * - If the phone number has 7 or more digits, it formats it as (XXX) XXX-XXXX.
 * 
 * @param value - The phone number string to format.
 * @returns  - The formatted phone number string.
 * 
 * @example
 * formatPhoneNumber("1234567890"); // returns "(123) 456-7890"
 * 
 * @example
 * formatPhoneNumber("11234567890"); // returns "(123) 456-7890"
 * 
 * @example
 * formatPhoneNumber("123"); // returns "123"
 * 
 * @example
 * formatPhoneNumber("12345"); // returns "(123) 45"
 */

export const formatPhoneNumber = (value: string): string => {
    if (!value) return value;

    let phoneNumber = value.replace(/[^\d]/g, '');
    let phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength === 11 && phoneNumber.startsWith('1')) {
        phoneNumber = phoneNumber.slice(1);
        phoneNumberLength = phoneNumber.length; // Update length after slicing
    }

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

   
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};