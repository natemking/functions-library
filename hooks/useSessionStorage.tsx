import { useCallback, useState } from 'react';

const parseJSON = (value: string | null) => {
	try {
		return value === 'undefined' ? undefined : JSON.parse(value ?? '');
	} catch {
		console.log('parsing error on', { value });
		return undefined;
	}
};

const useSessionStorage = (key: string, initialValue: any = '') => {
	const getValue = useCallback(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}
		try {
			const value = window.sessionStorage.getItem(key);
			return value ? parseJSON(value) : initialValue;
		} catch (err) {
			console.warn(`Error reading sessionStorage key “${key}”:`, err);
			return initialValue;
		}
	}, [initialValue, key]);

	const [storedValue, setStoredValue] = useState(getValue);

	const setValue = useCallback(
		(newValue: any) => {
			if (typeof window === 'undefined') {
				console.warn(
					`Tried setting sessionStorage key “${key}” even though environment is not a client`
				);
			}
			try {
				window.sessionStorage.setItem(key, JSON.stringify(newValue));
				setStoredValue(newValue);
			} catch (err) {
				if (err)
					console.warn(
						`Error setting sessionStorage key “${key}”:`,
						err
					);
			}
		},
		[key]
	);

	return [storedValue, setValue];
};

export default useSessionStorage;

/** Usage
 * get & set values:
 * const [value, setValue] = useSessionStorage('key', initialValue)
 *
 * get value only:
 * const [value] = useSessionStorage('key')
 *
 * set value only:
 * const [, setValue] = useSessionStorage('key', initialValue)
 */
