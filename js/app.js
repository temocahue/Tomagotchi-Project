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
	isAlive: true,

	// keep track of lights off --- use boolean

	start() {

		// instantiate Tamagotchiconst 
		newpet = new Tamagotchi('name');

		console.log(newpet)
	
		this.pet = newpet

		this.beginTimer()

	}, 
	beginTimer() {
	
		const timer = setInterval(() => {
			this.timePassed++

			if(this.isAlive == false) {
				clearInterval(timer)
			}
			if(this.timePassed % 2 === 0){
				this.pet.age += 1
			} 
			 if(this.timePassed % 5 === 0){
				this.pet.hunger += 1
			}
			if(this.timePassed % 1.5 === 0){
				this.pet.boredom += 1
			}
			if(this.timePassed % 3 === 0){
				// add logic here -- sleepiness should go down when lights are off
				this.pet.sleepiness += 1
			}
			if(this.pet.hunger > 10 || this.pet.boredom > 10 || this.pet.sleepiness > 10) {
				clearInterval(timer)
				console.log('Pet Died!!');
			} 
			

			this.printData()
		}, 1000)
		
	},

	// call this anytime the values change
	printData(){
		
		const $timer = $('#timer');
		const $age = $('#age');	
		const $hunger = $('#hunger');
		const $boredom = $('#boredom')
		const $sleepiness = $('#sleep')

		$timer.text(`timer: ${this.timePassed}s`)
		$age.text(`age: ${this.pet.age}`)
		$hunger.text(`hunger: ${this.pet.hunger}`)
		$boredom.text(`boredom: ${this.pet.boredom}`)
		$sleepiness.text(`sleepiness: ${this.pet.sleepiness}`)
	
	},

	turnOffLights() {
		// css of body -- 
		// change boolean
	},
	
	feedTamagotchi() {
		this.pet.hunger -= 1
		this.printData()

	},
	playWithTamagotchi(){
		game.pet.boredom -= 1
		this.printData()


	}

	endGame() {
		// switch this.isAlive to false
		// tell user game is over
		// reset values
		// be sassy
	


}

	


}




$('#start').on('click', () => {
	console.log('button works!!!!!!!!!!!');
	const value = $('#input-box').val()
	console.log(value, "<- value");

	game.start(value)
})

$('#feed').on('click', () => {
	game.feedTamagotchi()
})

$('#light').on('click', () => {
	game.pet.sleepiness -= 2
	console.log('light it works');
})

$('#play').on('click', () => {
	
	console.log('play it works');

})


















