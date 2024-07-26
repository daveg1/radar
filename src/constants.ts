export const getRadarSize = () => {
	return
}

export const Constants = new (class Constants {
	COLOR_GREEN = '#76D731'
	COLOR_TEAL = '#0B633B'
	FONT_SIZE = 16
	LINE_WIDTH = 3

	get PADDING_OUTER() {
		return this.FONT_SIZE * 2
	}

	get RADAR_SIZE() {
		return Math.min(750, window.innerWidth - this.PADDING_OUTER * 2)
	}

	get ORIGIN() {
		return this.RADAR_SIZE / 2
	}
	get RADIUS() {
		return this.RADAR_SIZE / 2
	}
})()
