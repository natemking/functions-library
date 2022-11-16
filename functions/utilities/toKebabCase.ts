export const toKebabCase = (string: string) => {
    if (!string) return "";
    return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}