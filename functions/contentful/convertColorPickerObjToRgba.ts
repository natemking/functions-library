export function convertColorPickerObjToRgba(colorPickerObj: Record<string, any>): string {
	if (colorPickerObj && typeof colorPickerObj === 'object') {
		const rgba = `rgba(${colorPickerObj.rgb.r},${colorPickerObj.rgb.g},${colorPickerObj.rgb.b},${colorPickerObj.rgb.a})`;
		return rgba;
	}
	if (colorPickerObj && typeof colorPickerObj === 'string' && /^\#/.test(colorPickerObj)){
		return colorPickerObj
	}
	return undefined;
}