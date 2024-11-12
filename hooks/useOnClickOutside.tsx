import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

type MouseOrTouchEvent = MouseEvent | TouchEvent;

/**
 * Custom hook to detect clicks outside of a specified element.
 *
 * @param ref - The ref of the element to detect outside clicks.
 * @param handler - The handler function to call when an outside
 * click is detected.
 *
 * @example
 * Usage in a functional component
 *
 * NOTE, because the passed in handler is a new func on every
 * render, that will cause this effect callback/cleanup to run
 * every render. Optimize by wrapping handler in useCallback().
 *
 * ```ts
 * const DropdownMenu = () => {
 *     const [showMenu, setShowMenu] = useState<boolean>(false);
 *     const menuRef = useRef<HTMLDivElement | null>(null);
 *
 *     const handleClickOutside = useCallback(() => {
 *         setShowMenu(false);
 *     }, []);
 *
 *     useOnClickOutside(menuRef, handleClickOutside);
 *
 *     return (
 *         <div>
 *             <button onClick={() => setShowMenu((prev) => !prev)}>Toggle Menu</button>
 *             {showMenu && (
 *                 <div ref={menuRef}>
 *                     <p>Menu Item 1</p>
 *                     <p>Menu Item 2</p>
 *                 </div>
 *             )}
 *         </div>
 *     );
 * };
 * ```
 */

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: MutableRefObject<T | null>,
    handler: (event: MouseOrTouchEvent) => void
): void => {
    useEffect(() => {
        if (!ref.current) return;

        const listener = (event: MouseOrTouchEvent): void => {
            const target = event.target as HTMLElement | null;

            if (ref.current && target && ref.current.contains(target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [handler, ref]);
};
