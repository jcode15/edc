/* js goes here */
var mainTag = document.getElementsByTagName('main')[0];

function $(id){
	return document.getElementById(id);
}

function setListeners() {

	if($('page1')) {
		$('page1').addEventListener('click', loadpage1);
	}
	if($('page2')) $('page2').addEventListener('click', loadpage2);

	if($('page3')){
		$('page3').addEventListener('click', loadpage3);
	}

	if($('page4')) $('page4').addEventListener('click', loadpage4);

}

setListeners();

/*var pageOne = document. getElementById('page1'),
    pageTwo = document. getElementById('page2'),
    pageThree = document. getElementById('page3'),
    pageFour = document. getElementById('page4');*/

/*pageOne.addEventListener('click', loadpage1);
pageTwo.addEventListener('click', loadpage2);
pageThree.addEventListener('click', loadpage3);
pageFour.addEventListener('click', loadpage4);*/

var page1 =
	'<div class="content">'+
	'<span>'+
	'<button id="page1" disabled>prev</button>'+
	'<button id="page2">next</button>'+
	'</span>'+
	'<div>'+
	'<h1>This is page one</h1>'+
	'</div>'+
	'</div>';

var page2 =
	'<div class="content">'+
	'<span>'+
	'<button id="page1">prev</button>'+
	'<button id="page3">next</button>'+
	'</span>'+
	'<div>'+
	'<h1>This is page two</h1>'+
	'</div>'+
	'</div>';

var page3 =
	'<div class="content">'+
	'<span>'+
	'<button id="page2">prev</button>'+
	'<button id="page4">next</button>'+
	'</span>'+
	'<div>'+
	'<h1>This is page three</h1>'+
	'</div>'+
	'</div>';

var page4 =
	'<div class="content">'+
	'<span>'+
	'<button id="page3">prev</button>'+
	'<button id="page1" >home</button>'+
	'</span>'+
	'<div>'+
	'<h1>This is page four</h1>'+
	'</div>'+
	'</div>';

function loadpage1(){
	mainTag.innerHTML = page1;
	setListeners();
}
function loadpage2(){
	mainTag.innerHTML = page2;
	setListeners();
}
function loadpage3(){
	mainTag.innerHTML = page3;
	setListeners();
}
function loadpage4(){
	mainTag.innerHTML = page4;
	setListeners();
}