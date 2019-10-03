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

	start() {

		// instantiate Tamagotchiconst 
		newpet = new Tamagotchi('name');

		console.log(newpet)
	
		this.pet = newpet

		this.beginTimer()

	}, 
	beginTimer() {
	
		const timer = setInterval(() => {
			this.timePassed ++
			this.printData()
		}, 1000)
		

		



	},
	printData(){
			const $timer = $('#timer');
			const $age = $('#age');	
			const $hunger = $('#hunger');
			const $boredom = $('#boredom')

			$timer.text(`timer: ${this.timePassed}s`)
			$age.text(`age: ${this.pet.age}`)

		
	}





}




$('button').on('click', () => {
	console.log('button works!!!!!!!!!!!');
	const value = $('#input-box').val()
	console.log(value, "<- value");

	game.start(value)
})