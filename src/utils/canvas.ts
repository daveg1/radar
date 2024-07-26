import { Constants } from '../constants'

export const setupLayer = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
	const { RADAR_SIZE } = Constants

	// Set up canvas size and scale
	canvas.style.width = `${RADAR_SIZE}px`
	canvas.style.height = `${RADAR_SIZE}px`

	const scale = window.devicePixelRatio
	canvas.width = Math.floor(RADAR_SIZE * scale)
	canvas.height = Math.floor(RADAR_SIZE * scale)
	ctx.scale(scale, scale)
}

export const clearLayer = (ctx: CanvasRenderingContext2D) => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
