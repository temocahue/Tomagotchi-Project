class Tamagotchi {
	constructor(name){
		this.age = 0;
		this.hunger = 0;
		this.boredom = 0;
		this.sleepiness = 0;
		this.name = name

	}


}

const game = {

	pet: null,
	timePassed: 0,

	start(name) {
		console.log(name)

		// instantiate Tamagotchi
		const newpet = new Tamagotchi(name)

		// console.log(newpet)
		this.pet = newpet

		this.beginTimer()

	}, 

	//
	beginTimer() {
		// start time running
		// use setInterval
		const timer = setInterval(() => {
			this.timePassed ++
			console.log(game.timePassed);




		}, 1000)



	}

	//

	//

}




$('button').on('click', () => {
	const value = $('#input-box').val()
	
	game.start(value)
})
