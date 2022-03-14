import { RefObject, useEffect, useRef, useState } from 'react';

export function useIsOnScreen(ref: RefObject<HTMLElement>) {
	const observerRef = useRef<IntersectionObserver | null>(null);
	const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(([entry]) =>
			setIsOnScreen(entry.isIntersecting)
		);
	}, []);

	useEffect(() => {
		observerRef.current.observe(ref.current);
		return () => {
			observerRef.current.disconnect();
		};
	}, [ref]);

	return isOnScreen;
}
