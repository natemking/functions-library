import { useState } from 'react';
import type { UseLocalStorageReturnType } from 'types';

/**
 * React hook for syncing state with localStorage.
 *
 * @typeParam T - The type of the stored value.
 * @param key - The localStorage key.
 * @param initialValue - The initial value to use if nothing is stored.
 * @returns An object with `value`, `setValue`, and `removeValue` helpers.
 *
 * ```ts
 * @example
 * // String value
 * const { value, setValue, removeValue } = useLocalStorage('username', 'guest');
 * setValue('alice');
 * removeValue();
 *
 * @example
 * // Object value
 * const { value, setValue } = useLocalStorage('user', { name: 'guest', age: 0 });
 * setValue({ name: 'alice', age: 30 });
 *
 * @example
 * // With updater function
 * setValue(prev => ({ ...prev, age: prev.age + 1 }));
 * ```
 */
export const useLocalStorage = <T,>(key: string, initialValue: T): UseLocalStorageReturnType<T> => {
    const readValue = (): T => {
        if (typeof window === 'undefined') return initialValue;

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setLocalStoreValue = (value: T | ((val: T) => T)): void => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    const removeLocalStoreValue = (): void => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
                setStoredValue(initialValue);
            }
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    };

    return { localStoreValue: storedValue, setLocalStoreValue, removeLocalStoreValue };
};
