import { useEffect, useRef, useState } from 'react';

export function DoubleHorizontalScroller({ children }: { children: React.ReactNode }): React.JSX.Element {
    const topScrollbarRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    // Measure the scrollable width of the content
    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth);
        }
    }, [children]);

    // Keep the scrollbars in sync
    const syncScroll = (source: 'top' | 'content'): void => {
        if (!topScrollbarRef.current || !contentRef.current) return;

        if (source === 'top') {
            contentRef.current.scrollLeft = topScrollbarRef.current.scrollLeft;
        } else {
            topScrollbarRef.current.scrollLeft = contentRef.current.scrollLeft;
        }
    };

    return (
        <div className='w-full max-w-full relative'>
            {/* Top scrollbar container */}
            <div
                className='h-5 max-w-full overflow-x-auto overflow-y-hidden border-b border-gray-200'
                onScroll={() => {
                    syncScroll('top');
                }}
                ref={topScrollbarRef}
            >
                <div
                    className='h-full'
                    style={{ width: contentWidth }}
                />
            </div>

            {/* Main content container */}
            <div
                className='overflow-x-auto overflow-y-hidden'
                onScroll={() => {
                    syncScroll('content');
                }}
                ref={contentRef}
            >
                <div className='min-w-max'>{children}</div>
            </div>
        </div>
    );
}
