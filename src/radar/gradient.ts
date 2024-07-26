import { Constants } from '../constants'

export const renderGradient = (ctx: CanvasRenderingContext2D) => {
	const { COLOR_TEAL, ORIGIN, RADIUS } = Constants

	const gradient = ctx.createRadialGradient(ORIGIN, ORIGIN, 0, ORIGIN, ORIGIN, RADIUS)

	// Add three color stops
	gradient.addColorStop(0, COLOR_TEAL)
	// gradient.addColorStop(1, 'black')
	gradient.addColorStop(1, 'transparent')

	// Set the fill style and draw a rectangle
	ctx.fillStyle = gradient
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
