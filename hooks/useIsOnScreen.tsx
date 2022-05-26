import { MutableRefObject, useEffect, useState } from 'react';

/** useIsOnScreen */
/****************/
export function useIsOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
			},
			{
				rootMargin,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		const refCopy = ref.current;
		return () => {
			observer.unobserve(refCopy);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount
	return isIntersecting;
}
//// Usage:
//// const ref = useRef<HTMLElement | null>(null);
//// const isVisible = useIsOnScreen(ref);
//// return (
//// 	<div ref={ref}>
////		{isVisible ? foo : bar}
////	</div>
//// )
//// can also add a root margin parameter e.g. 
//// const isAtTopOfScreen = useIsOnScreen(divRef, '0px 0px -100% 0px');
/******************/