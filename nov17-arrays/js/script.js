/* js goes here */

//var printBtn = document.getElementById('printBtn');
var	outputBox = document.querySelector('#output input');
var pushBtn = document.getElementById('pushBtn');
var pushInput = document.getElementById('pushinput');
var revBtn = document.getElementById('reverseBtn');
var popBtn = document.getElementById('popBtn');
var shiftBtn = document.getElementById('shiftBtn');
var unshiftBtn = document.getElementById('unshiftBtn');
var sortBtn = document.getElementById('sortBtn');
var joinBtn = document.getElementById('joinBtn');
var sliceBtn = document.getElementById('sliceBtn');
var spliceBtn = document.getElementById('spliceBtn');

var theArr = [];

//printBtn.addEventListener('click', printArr);

function printArr(){
	//var inputVal = this.previousElementSibling.value;
	outputBox.value = theArr;
	//this.previousElementSibling.value ='';
}
pushBtn.addEventListener('click', pushArr);
pushInput.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
    	pushBtn.click();
    }
});

function pushArr(){
	var val = this.previousElementSibling.value;
	//val = val.split(',')
	theArr.push(val);
	printArr();
	this.previousElementSibling.value = '';
}

revBtn.addEventListener('click', reverseArr);

function reverseArr(){
	theArr.reverse();
	printArr();
}

popBtn.addEventListener('click', popArr);

function popArr(){
	var val = theArr.pop();
	printArr();
	this.previousElementSibling.value = val;
}

shiftBtn.addEventListener('click', shiftArr);

function shiftArr(){
	var val = theArr.shift();
	printArr();
	this.previousElementSibling.value = val;
}

unshiftBtn.addEventListener('click', unshiftArr);
function unshiftArr(){
	var val = this.previousElementSibling.value;
	theArr.unshift(val);
	printArr();
	this.previousElementSibling.value = '';
}

sortBtn.addEventListener('click', sortArr);

function sortArr(){
	var val = this.previousElementSibling.value;
	if(val === 'numbers'){
		theArr.sort(comparison);
		printArr();
	}else{
		theArr.sort();
		printArr();
	}
}

function comparison(xy, yx){
	return xy - yx;
}

joinBtn.addEventListener('click', joinArr);

function joinArr(){
	var val = this.previousElementSibling.value;
	var str = theArr.join(val);
	outputBox.value = str;
}

sliceBtn.addEventListener('keydown', sliceArr);

function sliceArr(e){

	var val = this.previousElementSibling.value;
	val = val.split(',');
	var newArr = theArr.slice(val[0], val[1]);
	printArr();
	this.previousElementSibling.value = '';
}

spliceBtn.addEventListener('click', spliceArr);

function spliceArr(){
	var val = this.previousElementSibling.value;
	val = val.split(',');
	// 
	var newArr = theArr.splice(val[0],val[1],val[2]);
}