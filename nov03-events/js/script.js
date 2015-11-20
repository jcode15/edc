/* js goes here */
// var firstP = document.getElementsByTagName('p')[0];
// var firstInput = document.getElementsByTagName('input')[0];

// firstInput.addEventListener('select', function(){
// 	console.log('text has been selected');
// });

// firstP.addEventListener('mouseup', function(){
// 	console.log('mouse moved up');
// });

// firstP.addEventListener('mousedown', function(){
// 	console.log('mouse moved down');
// });

// firstInput.addEventListener('click', function(){
// 	console.log('pragraph has been clicked');
// });

// firstP.addEventListener('copy', function(){
// 	console.log('text has been copied');
// });
// firstP.addEventListener('cut', function(){
// 	console.log('text has been cut');
// });
// firstP.addEventListener('paste', function(){
// 	console.log('pasted to input');
// });
// firstP.addEventListener('focus', function(){
// 	console.log('input box is in focus');
// });
// firstP.addEventListener('blur', function(){
// 	console.log('input box is blurred');
// });
// firstP.addEventListener('contetmunu', function(){
// 	console.log('context menu is open');
// });
// firstInput.addEventListener('mouseenter', function(){
// 	console.log('mouse enter the input box');
// });
// firstInput.addEventListener('mouseleave', function(){
// 	console.log('mouse left the input box');
// });
// .addEventListener('mousemove', function(){
// 	console.log('mouse move');
// });

var span_object = document.getElementsByTagName('span')[0];
var div_object = document.getElementsByTagName('div');
var main_tag = document.getElementsByTagName('main')[0];
var timeLeft = userTime;
var smallObj = document.getElementsByTagName('small')[0];
var	timerId;
var userTime = Number(prompt('How many seconds to you need?'));

div_object[1].addEventListener('mouseenter', function() {
	console.log('start');
});
div_object[5].addEventListener('mouseleave', function() {
	console.log('end');
	smallObj.textContent = 'You lost with ' + timeLeft + ' seconds left';
	timeLeft = userTime;
});
span_object.addEventListener('mouseenter', function() {
	console.log('you lost');
	smallObj.textContent = 'You lost with ' + timeLeft + ' seconds left';
	timeLeft = userTime;

});
main_tag.addEventListener('mouseenter', function() {
	timerId = setInterval(countDown, 1000);
});
main_tag.addEventListener('mouseleave', function() {
	clearTimeout(timerId);
});
function countDown() {
	if (timeLeft === 0) {
		clearTimeout(timerId);
		console.log('times up');
	}else{
		console.log(timeLeft + 'seconds remain');
		timeLeft--;
		smallObj.textContent = timeLeft;
	}
}
