export function formatSetSidesSizeObj(
    attribute: string,
    obj: Record<string, number>
): Record<string, string | null> {
    return {
        [`${attribute}Top`]: obj.top ? `${obj.top}px` : null,
        [`${attribute}Bottom`]: obj.bottom ? `${obj.bottom}px` : null,
        [`${attribute}Left`]: obj.left ? `${obj.left}px` : null,
        [`${attribute}Right`]: obj.right ? `${obj.right}px` : null,
    };
}
