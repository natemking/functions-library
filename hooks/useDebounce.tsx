import { useEffect, useState } from 'react';

/**
 * Custom hook to debounce a value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 *
 * @example
 * Usage in a functional component
 * 
 * ```ts
 * const SearchComponent = () => {
 *     const [value, setValue] = useState<string>('');
 *     const debouncedValue = useDebounce<string>(value, 500);
 *
 *     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
 *         setValue(event.target.value);
 *     };
 *
 *     useEffect(() => {
 *         // Perform the search or API call with 
 *         // the debounced search term
 *     }, [debouncedValue]);
 *
 *     return (
 *             <input 
 *              onChange={handleChange} 
 *              type="text" 
 *              value={value} 
 *             />
 *     );
 * };
 * ```
 */

const useDebounce = <T,>(value: T, delay?: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
