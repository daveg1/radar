import { Constants } from '../constants'

export const degToRad = (deg: number) => (deg - 90) * (Math.PI / 180)

export const pointOnCircle = (radius: number, deg: number) => {
	const theta = degToRad(deg)
	const x = radius * Math.cos(theta) + Constants.ORIGIN
	const y = radius * Math.sin(theta) + Constants.ORIGIN
	return { x, y }
}
