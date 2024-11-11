/**
 * Validates an email address based on specific criteria.
 *
 * The validation checks:
 * - Recipient name: Cannot start with a special character, max 64 characters.
 * - Domain name: No special characters except for _-. , max 253 characters.
 * - Top-level domain: No special characters except for _-. , cannot end in special characters, max 4 characters.
 * - No special characters repeat twice in a row.
 *
 * @param email - The email address to validate.
 * @returns - Returns true if the email is valid, otherwise false.
 *
 * @example
 * validateEmail('test@example.com'); // returns true
 * @example
 * validateEmail('test..example@example.com'); // returns false
 * @example
 * validateEmail('test@exa_mple.com'); // returns true
 * @example
 * validateEmail('test@.example.com'); // returns false
 */

export const validateEmail = (email: string): boolean =>
	/^[A-Za-z0-9][\w-\\.!#$%&'*+-/=?^`{|]{0,64}@(?<domainPart>[\w-]{1,253}\.)+[\w-]{2,4}$/gi.test(
		email
	) && !/(?<specialChar>[-\\.!#$%&'*+-/=?^`{|])\1{1,}/gi.test(email);
