/* js goes here */

var textArea = document.getElementsByTagName('textarea')[0];
var keyOutput = document.querySelector('main div p:first-child');
var delOutput = document.querySelector('main div p:last-child');
var timeOutput = document.querySelector('main p:first-child');
var characterNum = 0;
var deleteNum = 0;
var compareText = document.getElementById('compare').textContent;
var keyTimer;
var timeStart = 38;
var timeLeft = timeStart;

var pageTwoBtn = document.getElementById('page2');
var mainObj = document.getElementsByTagName('main')[0];
var pagetwo = 
'<button type="button">go back</button>'+
'<h1>This is page 2</h1>'+
'<div class="cta"><p>This is my call to action. Or like tom said transit authority.</p></div>'+
'<footer>Copywrite lol &copy;2015</footer>';

textArea.addEventListener('keypress', getCharacter);
textArea.addEventListener('keydown', checkDelete);
textArea.addEventListener('focus', keyTimer);
pageTwoBtn.addEventListener('click', function(){
	mainObj.innerHTML = pagetwo;
});

function checkDelete(event) {
	if(event.which == 46 || event.which == 8){
		deleteNum = deleteNum + 1;
		delOutput.textContent = deleteNum;
		//console.log('delete');
	}
}

function getCharacter(event){
	var character;
	if (event.which == null) {
		character = String.fromCharCode(event.keyCode);
	}else if(event.which != 0 && event.keyCode != 0) {
		character = String.fromCharCode(event.which);
	}else{
		console.log('special key');
	}
	countCharacters();
}

function countCharacters(){
	characterNum = characterNum + 1;
	keyOutput.textContent = characterNum;
	console.log(keyOutput);
}

function keyTimer(){
	keyTimer = setInterval(countDown, 1000);
}

function countDown(){
	if(timeLeft === 0) {
		clearTimeout(keyTimer);
		timeOutput.textContent = 'Times up!';
		wrapUp();
	}
	else{
		timeOutput.textContent = timeLeft;
		console.log(timeLeft);
		timeLeft--;
	}
}

function wrapUp(){
		textObj.readOnly = true;
		var userText = textObj.value;
		console.log(compareText.localeCompare(userText));
}