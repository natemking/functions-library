/**
 * Converts a camelCase string to title case.
 *
 * @param string - The camelCase string to convert to title case.
 * @returns The input string converted to title case.
 *
 * @example
 * // returns "Hello World"
 * camelToTitleCaseString("helloWorld")
 */
export function camelToTitleCaseString(string: string): string {
    if (string) {
        return string
            // Insert a space before each capital letter
            .replace(/(?<capitalLetter>[A-Z])/g, match => ` ${match}`)
            // Capitalize the first character of the string
            .replace(/^./, match => match.toUpperCase())
            .trim()
    }
    console.error('ERR: camelToTitleCaseString - undefined string');
    return '';
}