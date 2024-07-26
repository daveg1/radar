import { pointOnCircle, degToRad } from '../utils/point'
import { Constants } from '../constants'

export const renderText = (ctx: CanvasRenderingContext2D) => {
	const { COLOR_GREEN, PADDING_OUTER, RADIUS } = Constants

	ctx.strokeStyle = COLOR_GREEN
	ctx.fillStyle = COLOR_GREEN
	ctx.font = `1em monospace`

	for (let deg = 0; deg < 360; deg += 10) {
		// TODO: change this value depending on the side the text is on
		if (deg > 180 && deg < 360) {
			ctx.textAlign = 'right'
		} else if (deg > 0 && deg < 180) {
			ctx.textAlign = 'left'
		} else {
			ctx.textAlign = 'center'
		}

		if (deg > 90 && deg < 270) {
			ctx.textBaseline = 'top'
		} else if (deg === 270 || deg === 90) {
			ctx.textBaseline = 'middle'
		} else {
			ctx.textBaseline = 'alphabetic'
		}

		const { x, y } = pointOnCircle(RADIUS - PADDING_OUTER, deg)

		const offsetX = 4 * Math.cos(degToRad(deg)) * 1
		const offsetY = 8 * Math.sin(degToRad(deg)) * 1

		ctx.fillText(`${deg}`.padStart(3, '0'), x + offsetX, y + offsetY)
	}
}
