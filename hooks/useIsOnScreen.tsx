import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

/**
 * Custom hook to check if an element is on screen.
 *
 * @param ref - The ref of the element to observe.
 * @param rootMargin - The root margin for the IntersectionObserver.
 * @returns Whether the element is intersecting with the viewport.
 *
 * @example
 * Usage in a functional component
 *
 * ```ts
 * const Component = () => {
 *     const ref = useRef<HTMLElement | null>(null);
 *     const isVisible = useIsOnScreen(ref);
 *
 *     return (
 *         <div ref={ref}>
 *             {isVisible ? 'Element is visible' : 'Element is not visible'}
 *         </div>
 *     );
 * };
 * ```
 */

export const useIsOnScreen = <T extends Element>(
    ref: MutableRefObject<T | null>,
    rootMargin = '0px'
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};