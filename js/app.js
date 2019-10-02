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

			// any code that should be run every second
			// goes in here


		}, 1000)



	}

	//

	//

}


// make a method printData
	// this will print hunger, sleepiness, boredom, and time elapsed
	// to the screen, nbut for now, just print time as it changes
	// (u will need a div for the value to go in)

// make it so that pet's values change as time passes
	// update your print Data to print those values on the screen to 
	// in divs you will need to create
	// just focus on hunger and boredom

// make it so that he dies when hunger gets to (whatever)
	// this will involve clearInterval

// make a button to feed him
	// make that button reduce his hunger
	// call printData so that user sees that this has happened

// ^^ same for boredom

// he should die if boredom gets to 10 (or whatever)


// lights
	



$('button').on('click', () => {
	const value = $('#input-box').val()
	
	game.start(value)
})
