import { useEffect, useRef, useState } from 'react';

type UseScrollLockOptions = {
	autoLock?: boolean;
	lockTarget?: HTMLElement | string;
	widthReflow?: boolean;
};

type UseScrollLockReturn = {
	isLocked: boolean;
	lock: () => void;
	unlock: () => void;
};

type OriginalStyle = {
	overflow: CSSStyleDeclaration['overflow'];
	paddingRight: CSSStyleDeclaration['paddingRight'];
};

/**
 * A custom hook to lock and unlock the body scroll.
 *
 * @param autoLock - If true, the body scroll will be locked automatically when the component mounts.
 * @param lockTarget - The target element to lock the scroll on. If a string is provided, it will be used as a selector to find the element.
 * @param widthReflow - If true, the padding right will be adjusted to prevent layout shift when the scrollbar is hidden.
 *
 * @returns An object containing:
 *  - isLocked: A boolean indicating if the scroll is currently locked.
 *  - lock: A function to lock the scroll.
 *  - unlock: A function to unlock the scroll.
 *
 * @example
 * Usage in a functional component
 *
 * ```ts
 * function App() {
 *   const { isLocked, lock, unlock } = useLockBodyScroll(true, '#scrollTarget', true);
 *
 *   return (
 *     <div>
 *       <button onClick={lock}>Lock Scroll</button>
 *       <button onClick={unlock}>Unlock Scroll</button>
 *       <div id="scrollTarget" style={{ height: '200vh' }}>
 *         Scrollable content here...
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */

export const useScrollLock = (
	options: UseScrollLockOptions = {}
): UseScrollLockReturn => {
	const { autoLock = true, lockTarget, widthReflow = true } = options;
	const [isLocked, setIsLocked] = useState(false);
	const target = useRef<HTMLElement | null>(null);
	const originalStyle = useRef<OriginalStyle | null>(null);

	const lock = (): void => {
		if (target.current) {
			const { overflow, paddingRight } = target.current.style;

			// Save the original styles
			originalStyle.current = { overflow, paddingRight };

			// Prevent width reflow
			if (widthReflow) {
				// Use window inner width if body is the target as global scrollbar isn't part of the document
				const offsetWidth =
					target.current === document.body
						? window.innerWidth
						: target.current.offsetWidth;
				// Get current computed padding right in pixels
				const currentPaddingRight =
					parseInt(
						window.getComputedStyle(target.current).paddingRight,
						10
					) || 0;

				const scrollbarWidth = offsetWidth - target.current.scrollWidth;
				target.current.style.paddingRight = `${
					scrollbarWidth + currentPaddingRight
				}px`;
			}

			// Lock the scroll
			target.current.style.overflow = 'hidden';

			setIsLocked(true);
		}
	};

	const unlock = (): void => {
		if (target.current && originalStyle.current) {
			target.current.style.overflow = originalStyle.current.overflow;

			// Only reset padding right if we changed it
			if (widthReflow) {
				target.current.style.paddingRight =
					originalStyle.current.paddingRight;
			}
		}

		setIsLocked(false);
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;

		if (lockTarget) {
			target.current =
				typeof lockTarget === 'string'
					? document.querySelector(lockTarget)
					: lockTarget;
		}

		if (!target.current) {
			target.current = document.body;
		}

		if (autoLock) {
			lock();
		}

		return () => {
			unlock();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps -- lock/unlock are not a dependencies
	}, [autoLock, lockTarget, widthReflow]);

	return { isLocked, lock, unlock };
};
