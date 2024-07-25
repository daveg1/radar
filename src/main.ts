import './style.css'
import { renderConcentric } from './radar/concentric'
import { renderGradient } from './radar/gradient'
import { renderNeedle } from './radar/needle'
import { renderPing } from './radar/ping'
import { State } from './state'
import { renderText } from './radar/text'
import { clearLayer, setupLayer } from './utils/canvas'
import { RADAR_SIZE } from './constants'

const canvasLayer1 = document.querySelector<HTMLCanvasElement>('#layer1')!
const ctxLayer1 = canvasLayer1.getContext('2d')!

const canvasLayer2 = document.querySelector<HTMLCanvasElement>('#layer2')!
const ctxLayer2 = canvasLayer2.getContext('2d')!

const canvasLayer3 = document.querySelector<HTMLCanvasElement>('#layer3')!
const ctxLayer3 = canvasLayer3.getContext('2d')!

const canvasLayer4 = document.querySelector<HTMLCanvasElement>('#layer4')!
const ctxLayer4 = canvasLayer4.getContext('2d')!

const pingImage = new Image()
pingImage.src = '/radar/ping.png'

pingImage.onload = () => {
	State.image = pingImage
}

const startBtn = document.querySelector<HTMLButtonElement>('#enable')!

startBtn.onclick = () => {
	render()
	startBtn.remove()
}

setupLayer(canvasLayer1, ctxLayer1)
setupLayer(canvasLayer2, ctxLayer2)
setupLayer(canvasLayer3, ctxLayer3)
setupLayer(canvasLayer4, ctxLayer4)

// Render components

function initial() {
	renderGradient(ctxLayer1)
	renderNeedle(ctxLayer4)
	renderConcentric(ctxLayer4)
	renderText(ctxLayer4)
}

function render() {
	requestAnimationFrame(render)

	let radius = State.needleRadius + 1.75
	radius = radius > 360 ? 0 : radius
	State.needleRadius = radius

	clearLayer(ctxLayer1)
	renderGradient(ctxLayer1)

	clearLayer(ctxLayer2)
	renderPing(ctxLayer2)

	// clearLayer(ctxLayer3)
	ctxLayer3.fillStyle = 'rgb(0 0 0 / 10%)'
	ctxLayer3.fillRect(0, 0, RADAR_SIZE, RADAR_SIZE)
	renderNeedle(ctxLayer3)

	clearLayer(ctxLayer4)
	renderNeedle(ctxLayer4)
	renderConcentric(ctxLayer4)
	renderText(ctxLayer4)
}

initial()
