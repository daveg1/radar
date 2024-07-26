import { Constants } from '../constants'

export const renderConcentric = (ctx: CanvasRenderingContext2D) => {
	const { ORIGIN, LINE_WIDTH, PADDING_OUTER, RADIUS, COLOR_GREEN } = Constants

	const innerCircles = 4
	const startRadius = RADIUS - LINE_WIDTH - PADDING_OUTER
	const endRadius = 50
	const radiusGap = (startRadius - endRadius) / innerCircles

	ctx.strokeStyle = COLOR_GREEN
	ctx.lineWidth = 2

	for (let i = 0; i <= innerCircles; i++) {
		ctx.beginPath()
		ctx.arc(ORIGIN, ORIGIN, startRadius - radiusGap * i, 0, 2 * Math.PI)
		ctx.stroke()
		ctx.closePath()
	}
}
