import { useEffect, useState } from 'react';

type ScreenDimension = {
    width: number;
    height: number;
};

const getWindowDimensions = (): ScreenDimension => {
    if (typeof window === 'undefined') {
        return { width: 0, height: 0 };
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};

/**
 * Custom hook to get the current screen dimensions.
 *
 * @returns - The current screen dimensions.
 *
 * @example
 * Usage in a functional component
 *
 * ```ts
 * const ScreenComponent = () => {
 *     const { width, height } = useScreenDimension();
 *
 *     return (
 *         <div>
 *          {`Width: ${width}, Height: ${height}`}
 *         </div>
 *     );
 * };
 * ```
 */

export const useScreenDimension = (): ScreenDimension => {
    const [dimension, setDimension] = useState(getWindowDimensions());

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = (): void => {
            setDimension(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return dimension;
};