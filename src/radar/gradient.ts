import { COLOR_TEAL, ORIGIN, RADAR_SIZE, RADIUS } from '../constants'

export const renderGradient = (ctx: CanvasRenderingContext2D) => {
	const gradient = ctx.createRadialGradient(ORIGIN, ORIGIN, 0, ORIGIN, ORIGIN, RADIUS)

	// Add three color stops
	gradient.addColorStop(0, COLOR_TEAL)
	// gradient.addColorStop(1, 'black')
	gradient.addColorStop(1, 'transparent')

	// Set the fill style and draw a rectangle
	ctx.fillStyle = gradient
	ctx.fillRect(0, 0, RADAR_SIZE, RADAR_SIZE)
}
