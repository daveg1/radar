import { pointOnCircle, degToRad } from '../utils/point'
import { Constants } from '../constants'

export const renderPins = (ctx: CanvasRenderingContext2D) => {
	const { COLOR_GREEN, PADDING_OUTER, RADIUS, LINE_WIDTH } = Constants

	ctx.strokeStyle = COLOR_GREEN
	ctx.lineWidth = LINE_WIDTH
	ctx.lineCap = 'round'
	ctx.fillStyle = COLOR_GREEN
	ctx.font = `1em monospace`

	for (let deg = 0; deg < 360; deg += 10) {
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

		const textPoint = pointOnCircle(RADIUS - PADDING_OUTER + 4, deg)
		const pinStart = pointOnCircle(RADIUS - PADDING_OUTER - LINE_WIDTH, deg)
		const pinEnd = pointOnCircle(RADIUS - PADDING_OUTER + 4, deg)

		const offsetX = 4 * Math.cos(degToRad(deg)) * 1
		const offsetY = 8 * Math.sin(degToRad(deg)) * 1

		// Draw text
		ctx.fillText(`${deg}`.padStart(3, '0'), textPoint.x + offsetX, textPoint.y + offsetY)

		// Draw pin

		ctx.beginPath()
		ctx.moveTo(pinStart.x, pinStart.y)
		ctx.lineTo(pinEnd.x, pinEnd.y)
		ctx.stroke()
		ctx.closePath()

		ctx.lineWidth = LINE_WIDTH / 2

		// Render steps between 10s
		for (let step = deg + 1; step < deg + 10; step++) {
			const stepStart = pointOnCircle(RADIUS - PADDING_OUTER - LINE_WIDTH, step)
			const stepEnd = pointOnCircle(RADIUS - PADDING_OUTER + 1, step)

			ctx.beginPath()
			ctx.moveTo(stepStart.x, stepStart.y)
			ctx.lineTo(stepEnd.x, stepEnd.y)
			ctx.stroke()
			ctx.closePath()
		}
	}
}
