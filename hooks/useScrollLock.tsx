import{ useCallback } from 'react'

/** useScrollLock */
/******************/
export const useScrollLock = () => {
	const lockScroll = useCallback(() => {
		const documentWidth: number = document.documentElement.clientWidth;
		const windowWidth: number = window.innerWidth;
		const scrollBarWidth: number = windowWidth - documentWidth;
		
		document.body.style.overflowY = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
	}, [])

	const unlockScroll = useCallback(() => {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	}, []);

	return {
		lockScroll,
		unlockScroll
	};
}
//// Usage:
//// const { lockScroll, unlockScroll } = useScrollLock();
//// true ? lockScroll() : unlockScroll;
/***********************/