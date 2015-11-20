var htmlObj = document.getElementByTagName('html')[0];
var kittyContainer = document.getElementById('kittencontainer');
var input = document.querySelector('main input#input');
var btn = document.getElementById('button');
var restbtn = document.getElementById('resetbtn');

var strayCats = 0;
var cat = '<img src="img/kitten.png" alt="">'


btn.addEventListener('click', submitGuess);
restbtn.addEventListener('click', startGame);

function startGame(){
	kittyContainer.innerHTML = '';
	strayCats = randomNum(50);
	console.log(strayCats);
	for(var i = 1; i < strayCats; i++) {
		kittyContainer.innerHTML += cat;
 	}
}
startGame();

function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function submitGuess(e){
	e.preventDefault();
	var guess = input.value;
	guess.disabled = true;
	checkGame(guess);
}

function checkGame(guess){
	if (!isNaN(parseInt(guess)) && guess === strayCats){
		getAward(true);
	}else{
		getAward(false);
	}
}

function getAward(){
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 20%, 40$, 1)';
	}else{
		htmlObj.style.backgroundColor = 'hsla(0, 20%, 50$, 1)';
	}
}