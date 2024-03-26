import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, delay?: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;

/** Usage

export default function Component() {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  // Fetch API (optional)
    useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
    }, [debouncedValue])

    return (
    <div>
        <input type="text" value={value} onChange={handleChange} />
    </div>
    )
}
 
 
******* */
