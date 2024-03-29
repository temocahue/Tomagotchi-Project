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
	lightOn: true,

	start() {

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
			if(this.pet.age == 2){
				$('#begin').show()
				$('#baby').hide()
			}
			if(this.pet.hunger > 10 || this.pet.boredom > 10 || this.pet.sleepiness > 10) {
				clearInterval(timer)
				$('#dead').show()
				$('#begin').hide()
				$('#wake').hide()
				$('#playing').hide()
				$('#feeding').hide()
				$('#feeding').hide()
				$("#sleeping").hide()
				$('#baby').hide()
				this.printData()
				this.endGame()
			} 
			
			

			this.printData()
		}, 1000)
		
	},

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

	turnOnLights(){
		$('body').css('background-color', 'white')
		this.lightOn = true;


	},

	turnOffLights() {
		this.pet.sleepiness -= 2
		this.printData()
		$('body').css('background-color', 'black') 
		this.lightOn = false;

	},
	
	feedTamagotchi() {
		this.pet.hunger -= 1
		this.printData()

	},
	playWithTamagotchi(){
		this.pet.boredom -= 2
		this.printData()


	},



	endGame() {
		this.pet.age = 0
		this.pet.hunger = 0
		this.pet.boredom = 0
		this.pet.sleepiness = 0
		$('#gameover').text(`gameover!`)
			
	


    }

}


	







$('#start').on('click', () => {
	const value = $('#input-box').val()
	$('#baby').show()
	$('#playing').hide()
	$('#feeding').hide()
	$("#sleeping").hide()
	$('#wake').hide()
	$('#begin').hide()
	game.start(value)
})

$('#feed').on('click', () => {
	$('#feeding').show()
	$("#playing").hide()
	$('#begin').hide()
	$("#sleeping").hide()
	$('#wake').hide()
	$('#baby').hide()
	game.feedTamagotchi()
})

$('#lightoff').on('click', () => {
	$('#sleeping').show()
	$('#feeding').hide()
	$('#playing').hide()
	$('#begin').hide()
	$('#feeding').hide()
	$('#wake').hide()
	$('#baby').hide()
	
	game.turnOffLights()
	
})

$('#play').on('click', () => {
	$('#playing').show()
	$('#begin').hide()
	$('#feeding').hide()
	$("#sleeping").hide()
	$('#wake').hide()
	$('#baby').hide()
	game.playWithTamagotchi()
	

})

$('#lighton').on('click', () => {
	$('#wake').show()
	$('#playing').hide()
	$('#feeding').hide()
	$('#begin').hide()
	$('#feeding').hide()
	$("#sleeping").hide()
	$('#baby').hide()
	
	
	game.turnOnLights()

})
















