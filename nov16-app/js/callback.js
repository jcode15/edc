var inputs = document.querySelector('input[type="text"]');
var clrBox = document.querySelector('input[type="color"]');
var subObj = document.querySelector('button');
var htmlObj = document.querySelector('html');
var dateObj = document.querySelector('input[type="date"]');

subObj.addEventListener('click', function(){
	var valuE = inputs.value;
	var clr = clrBox.value;
	var day = dateObj.value;
	// console.log(valuE);
	// console.log( getInfo() );
	getInfo(valuE);
	getColor(clr);
	dateCheck(day);
});

// inputs.addEventListener('blur', inputGrab);
// function inputGrab(){
// 	var neuValuE = inputs.value;
// 	console.log(neuValuE);
// }

function getInfo(x){
	// console.log(x);
	// console.log(parseInt(x)+5);
	//console.log('Hello Kitty');
	//return 'hello again';
	var resp = parseInt(x);
	if( !isNaN(resp) ){
		console.log(true);
	}
}

function getColor(y){
	htmlObj.style.backgroundColor = y;
}

function dateCheck(z){
	console.log(z);
}