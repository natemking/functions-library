import { useCallback, useState } from 'react';

const parseJSON = <T,>(value: string | null): T | undefined => {
    try {
        return value !== null ? (JSON.parse(value) as T) : undefined;
    } catch {
        console.error('parsing error on', { value });
        return undefined;
    }
};

const IS_SERVER = typeof window === 'undefined';

/**
 * A custom hook to manage state that is synchronized with sessionStorage.
 *
 * @param key - The key under which the value is stored in sessionStorage.
 * @param initialValue - The initial value to use if there is no value in sessionStorage.
 *
 * @returns Returns a stateful value, a function to update it, and a function to remove it.
 *
 * @example
 * Usage in a functional component
 *
 * ```ts
 * function App() {
 *   const [name, setName, removeName] = useSessionStorage<string>('name', 'John Doe');
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={name}
 *         onChange={(e) => setName(e.target.value)}
 *       />
 *       <button onClick={removeName}>Remove Name</button>
 *       <p>{name}</p>
 *     </div>
 *   );
 * }
 * ```
 */

export const useSessionStorage = <T,>(
    key: string,
    initialValue?: T
): [value: T | undefined, setValue: (newValue: T) => void, removeValue: () => void] => {
    const getValue = useCallback(() => {
        if (IS_SERVER) {
            return initialValue;
        }
        try {
            const value = window.sessionStorage.getItem(key);
            return value ? (parseJSON(value) as T) : initialValue;
        } catch (err) {
            console.error(`Error reading sessionStorage key “${key}”:`, err);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T | undefined>(() => getValue());

    const setValue = useCallback(
        (newValue: T) => {
            if (IS_SERVER) {
                console.error(
                    `Tried setting sessionStorage key “${key}” even though environment is not a client`
                );
            }
            try {
                window.sessionStorage.setItem(key, JSON.stringify(newValue));
                setStoredValue(newValue);
            } catch (err) {
                if (err) console.error(`Error setting sessionStorage key “${key}”:`, err);
            }
        },
        [key]
    );

    const removeValue = useCallback(() => {
        if (IS_SERVER) {
            console.error(
                `Tried removing sessionStorage key “${key}” even though environment is not a client`
            );
            return;
        }
        try {
            window.sessionStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (err) {
            console.error(`Error removing sessionStorage key “${key}”:`, err);
        }
    }, [initialValue, key]);

    return [storedValue, setValue, removeValue];
};
