/* js goes here */

var clickBtn = document.getElementsByTagName('button')[0];
var inputs = document.getElementsByTagName('input');
var result = document.getElementById('results');


clickBtn.addEventListener('click', disableMe);

function getRandom(x) {
	var y = Math.floor(Math.random() * 100) + 1;
	return x * y;
}

function disableMe() {
	//console.log('it works');
	for(var i = 0; i < inputs.length; i++) {
		//console.log(inputs[i]);
		if (inputs[i].disabled){
			inputs[i].disabled = false;
		}else {
			inputs[i].disabled = true;
			inputs[0].value = '';
		}
	}

}

inputs[1].addEventListener('click', getInput);

inputs[0].addEventListener('keydown', function(event){
	if (event.keyCode === 13) {
		getInput();
	}
});

function getInput(){
	var inputValue = inputs[0].value;
	if (!!inputValue && !isNaN(inputValue)) {
		result.textContent = getRandom(inputValue);
		disableMe();
		inputValue = '';
	}else if (!!inputValue === isNaN(inputValue)) {
		result.textContent = (inputValue + ' Please enter a number');
		//alert('Please enter a number');
	}
	result.addEventListener('dblclick', function(){
		this.remove();
	});

}


function getUserName(){
	var firstName = prompt('what it your first name?');
	var newEL = document.createElement('h1');
	var parent = clickBtn.parentNode;
	
	 if (!!firstName === !isNaN(firstName)) {
		alert(' Please enter your name');
		getUserName();
	}else{
		newEL.textContent = 'welcome ' + firstName + ', please press button.';
		parent.insertBefore(newEL, clickBtn);	
	}
}

getUserName();


