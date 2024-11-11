// for use w/ Contentfuls Image Focal Point feature

export function positionBgImgWFocalPoint(image: Record<string, unknown>): string {
    const xFocalPoint= image.fields?.focalPoint?.focalPoint.x as number;
    const yFocalPoint = image.fields?.focalPoint?.focalPoint.y as number;
    const imgIntrinsicWidth = image.fields?.image?.fields.file.details.image.width as number;
    const imgIntrinsicHeight = image.fields?.image?.fields.file.details.image.height as number;

    return `calc((${xFocalPoint / imgIntrinsicWidth} * 100%)) calc((${
        yFocalPoint / imgIntrinsicHeight
    } * 100%))`;
}
