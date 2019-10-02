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

	start(name) {
		console.log(name)

		// instantiate Tamagotchi
		const newpet = new Tamagotchi(name)

		console.log(newpet)

	}

}




$('button').on('click', () => {
	console.log('button works!!!!!!!!!!!');
	const value = $('#input-box').val()
	console.log(value, "<- value");
	game.start(value)
})
