import { useCallback, useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;
/**
 * Custom hook to detect the scroll direction.
 *
 * @returns - The current scroll direction ('up', 'down', or null).
 *
 * @example
 * Usage in a functional component
 *
 * ```ts
 * const ScrollComponent: React.FC = () => {
 *     const { scrollDirection } = useScrollDirection();
 *
 *     return (
 *         <div>
 *             <p>Scroll Direction: {scrollDirection}</p>
 *         </div>
 *     );
 * };
 * ```
 */
export const useScrollDirection = (): { scrollDirection: ScrollDirection } => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
    const [prevOffset, setPrevOffset] = useState(0);

    const updateScrollDirection = useCallback((): void => {
        const scrollY = window.scrollY;

        if (scrollY > prevOffset && scrollDirection !== 'down') {
            setScrollDirection('down');
        }

        if (scrollY < prevOffset && scrollDirection !== 'up') {
            setScrollDirection('up');
        }

        setPrevOffset(scrollY);
    }, [scrollDirection, prevOffset]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [updateScrollDirection]);

    return { scrollDirection };
};
