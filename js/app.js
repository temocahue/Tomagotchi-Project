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
			if(this.timePassed) % 3 === 0{
				this.pet.sleepiness 
			}
			if(this.pet.hunger > 10 || this.pet.boredom > 10 || this.pet.sleepiness > 10) {
				clearInterval(timer)
				console.log('Pet Died!!');
			} 
			

			// 1. hungrier

			// 2. bored


			/// 4. sleepier -- lightsOff()



			this.printData()
		}, 1000)
		
	},

	printData(){
			
			const $timer = $('#timer');
			const $age = $('#age');	
			const $hunger = $('#hunger');
			const $boredom = $('#boredom')
			const 

			$timer.text(`timer: ${this.timePassed}s`)
			$age.text(`age: ${this.pet.age}`)
			$hunger.text(`hunger: ${this.pet.hunger}`)
			$boredom.text(`boredom: ${this.pet.boredom}`)
		
	},




	endGame() {
		// switch this.isAlive to false
		// tell user game is over
		// reset values
		// be sassy
	}

}



// $('#feed') -- on click, call method in game that reduces hunger

$('#start').on('click', () => {
	console.log('button works!!!!!!!!!!!');
	const value = $('#input-box').val()
	console.log(value, "<- value");

	game.start(value)
})

$('#feed').on('click', () => {
	game.pet.hunger -= 1
	console.log('feed it works');


})

$('#light').on('click', () => {

	console.log('light it works');


})

$('#play').on('click', () => {
	console.log('play it works');


})


















