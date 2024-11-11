/**
 * Converts a string to kebab-case.
 * 
 * @param string - The string to convert.
 * @returns - The kebab-case formatted string.
 * 
 * @example
 * toKebabCase('helloWorld'); // returns 'hello-world'
 * @example
 * toKebabCase('hello world, its me'); // returns 'hello-world-its-me'
 */
export const toKebabCase = (string: string): string => {
    if (!string) return '';
    return string
        .replace(/(?<lowercaseLetter>[a-z])(?<uppercaseLetter>[A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .replace(/[^\w\s-]+/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
};