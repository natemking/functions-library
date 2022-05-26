import { useEffect, useState } from 'react'

/** useScrollDirection */
/***********************/
export const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<string | null>(null);
	const [prevOffset, setPrevOffset] = useState<number>(0);

	const toggleScrollDirection = () => {
		let scrollY = window.scrollY;
		if (scrollY === 0) {
			setScrollDirection(null)
		};
		if (scrollY > prevOffset) {
			setScrollDirection('down')
		} else if (scrollY < prevOffset) {
			setScrollDirection('up')
		};
		setPrevOffset(scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", toggleScrollDirection);
		return () => {
			window.removeEventListener("scroll", toggleScrollDirection);
		}
	})
	return scrollDirection;
}

//// Usage:
//// const scrollDirection = useScrollDirection;
//// scrollDirection == 'up' ? true : false;
/***********************/