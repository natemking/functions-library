import fs from 'node:fs/promises';
import path from 'node:path';
import { getErrMsg } from '#utils/helpers.ts';

/**
 * Safely loads and parses a JSON file asynchronously.
 *
 * Returns fallback value if file is missing. Throws if file exists but is corrupted
 * or unreadable (other than ENOENT).
 *
 * @param filePath - Path to the JSON file
 * @param fallback - Default value to return if file not found
 * @returns Parsed JSON data or fallback value if file missing
 * @throws Error if file exists but cannot be read or parsed
 */
export async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContent) as T;
    } catch (err) {
        if (
            err instanceof Error &&
            'code' in err &&
            typeof err.code === 'string' &&
            err.code === 'ENOENT'
        ) {
            return fallback;
        }

        // DANGER: The file exists but is corrupted (JSON parse failed) or unreadable!
        throw new Error(`Failed to read or parse JSON file at ${filePath}: ${getErrMsg(err)}`, {
            cause: err,
        });
    }
}

/**
 * Writes data as formatted JSON to a file asynchronously.
 * Creates parent directories if they don't exist. Overwrites the file if it already exists.
 *
 * @param filePath - Path to the JSON file to write
 * @param data - Data to serialize and write as JSON
 * @throws Native Node.js error if filesystem permissions fail, disk is full, or data is circular
 */
export async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}
