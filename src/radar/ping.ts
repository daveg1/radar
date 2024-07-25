import { State } from '../state'

export const renderPing = (ctx: CanvasRenderingContext2D) => {
	if (!State.image) return

	if (State.needleRadius >= 70 && State.needleRadius <= 75) {
		State.playSonar()
		State.imageOpacity = 1
	}

	ctx.globalAlpha = State.imageOpacity
	State.imageOpacity -= 0.008
	ctx.drawImage(State.image, 480, 260, 200, 200)
}
