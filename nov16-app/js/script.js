/* js goes here */
var inputs = document.querySelector('input');
var btnObj = document.querySelector('button');
var divKit = document.getElementById('kittens');
var kittyKat = '<div></div>';

btnObj.addEventListener('click', getUserGuess);

function getUserGuess(event){
	var kittyGuess = inputs.value;
	console.log(kittyGuess);
	checkGuess(kittyGuess);
}

function checkGuess(num){
	console.log('what he said'+ num);
	if(num == 5){
		console.log(true);
	}else{
		console.log(false);
	}
}

function getRandom() {
	var x = Math.ceil(Math.random() * 50);
  
  for (var i = 1; i < x; i++){
    var div = document.createElement("div");
    divKit.appendChild(div);
   }
}
getRandom();


function getInfo(x){
	var input = inputs.value;
	if(input === x){
		console.log('match');
	}
	console.log(input);
	
}
