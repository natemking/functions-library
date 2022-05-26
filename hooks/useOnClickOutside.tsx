// @ts-nocheck
import {useEffect, RefObject} from 'react'

/** useOnClickOutside */
/***********************/
type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: Handler
) {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref?.current || ref.current.contains(event.target as Node)) {
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
	}, [ref, handler]);
}
// because passed in handler is a new func on every render that
// will cause this effect callback/cleanup to run every render.
// to optimize, wrap handler in useCallback

//// Usage:
//// const [showMenu, setShowMenu] = useState<boolean>(false);
//// const menuBtnRef = useRef(); - Create a ref to the element for which we want to detect outside clicks
//// useOnClickOutside(menuBtnRef, useCallback(() => {setShowMenu(false)},[]));