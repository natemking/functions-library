type ColorPickerObj = {
    rgb: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
}

export function convertColorPickerObjToRgba(colorPickerObj: ColorPickerObj | string): string | undefined {
	if (colorPickerObj && typeof colorPickerObj === 'object') {
		const rgba = `rgba(${colorPickerObj.rgb.r},${colorPickerObj.rgb.g},${colorPickerObj.rgb.b},${colorPickerObj.rgb.a})`;
		return rgba;
	}
	if (colorPickerObj && typeof colorPickerObj === 'string' && colorPickerObj.startsWith('#')){
		return colorPickerObj
	}
	return undefined;
}