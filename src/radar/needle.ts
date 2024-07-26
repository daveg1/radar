import { pointOnCircle } from '../utils/point'
import { Constants } from '../constants'
import { State } from '../state'

export const renderNeedle = (ctx: CanvasRenderingContext2D) => {
	const { COLOR_GREEN, LINE_WIDTH, ORIGIN, PADDING_OUTER, RADIUS } = Constants

	const points = pointOnCircle(RADIUS - PADDING_OUTER - LINE_WIDTH, State.needleRadius + 1)
	const lagged = pointOnCircle(RADIUS - PADDING_OUTER - LINE_WIDTH, State.needleRadius - 1)

	ctx.fillStyle = COLOR_GREEN

	ctx.beginPath()
	ctx.moveTo(ORIGIN, ORIGIN)
	ctx.lineTo(points.x, points.y)
	ctx.lineTo(lagged.x, lagged.y)
	ctx.lineTo(ORIGIN, ORIGIN)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(ORIGIN, ORIGIN, LINE_WIDTH / 2, 0, 2 * Math.PI)
	ctx.fill()
}
