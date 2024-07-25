export const State = new (class State {
	#image: HTMLImageElement | null = null
	imageOpacity = 0
	#needleRadius = 0
	#isAudioPlaying = false
	#currentAudio: HTMLAudioElement | null = null

	set image(value: HTMLImageElement | null) {
		this.#image = value
	}

	get image() {
		return this.#image
	}

	get needleRadius() {
		return this.#needleRadius
	}

	set needleRadius(deg: number) {
		this.#needleRadius = deg
	}

	playSonar() {
		if (this.#isAudioPlaying) return

		this.#isAudioPlaying = true

		this.#currentAudio = new Audio('/radar/sonar.mp3')
		this.#currentAudio.play().catch(console.log)

		this.#currentAudio.onended = () => {
			this.#isAudioPlaying = false
		}
	}
})()
