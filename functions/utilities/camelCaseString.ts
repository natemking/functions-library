/**
 * Converts a string to camelCase.
 *
 * @param string - The string to convert to camelCase.
 * @returns The input string converted to camelCase.
 *
 * @example
 * // returns "helloWorld"
 * camelCaseString("Hello World")
 */
export const camelCaseString = (string: string): string => {
    if (string) {
        return string
            .replace(/(?<lowercaseOrDigit>[a-z0-9])(?<uppercaseLetter>[A-Z])/g, '$1 $2') // add space before capital letters that follow lowercase letters or numbers
            .split(' ')
            .map(
                (word, index) =>
                    word.charAt(0)[index === 0 ? 'toLowerCase' : 'toUpperCase']() +
                    word.slice(1).toLowerCase()
            )
            .join('');
    }
    console.error('ERR: camelCaseString - undefined string');
    return '';
};