import { useEffect, useState } from 'react';

/** useScreenDimension */
/***********************/
interface ScreenDimension {
	width: number;
	height: number;
}

export function useScreenDimension(): ScreenDimension {
	const [dimension, setDimension] = useState<ScreenDimension>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () =>
				setDimension({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			window.addEventListener('resize', handleResize);
			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return dimension;
}
//// Usage:
//// const { width, height } = useScreenDimension();
/******************/