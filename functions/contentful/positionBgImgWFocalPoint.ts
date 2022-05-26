// for use w/ Contentfuls Image Focal Point feature

export function positionBgImgWFocalPoint(image: Record<string, any>): string {
	if (image) {
		const xFocalPoint: number = image?.fields?.focalPoint?.focalPoint.x;
		const yFocalPoint: number = image?.fields?.focalPoint?.focalPoint.y;
		const imgIntrinsicWidth: number =
			image?.fields?.image?.fields.file.details.image.width;
		const imgIntrinsicHeight: number =
			image?.fields?.image?.fields.file.details.image.height;

		return `calc((${xFocalPoint / imgIntrinsicWidth} * 100%)) calc((${
			yFocalPoint / imgIntrinsicHeight
		} * 100%))`;
	}
	return undefined;
}
