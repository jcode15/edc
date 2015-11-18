/* js goes here */

var guy = document.getElementById('guy');
var lite = document.getElementsByTagName('span');
var idHero = document.getElementById('hero');
var picSlide = document.getElementsByTagName('div');
//console.log(idHero);

function liteemup(x) {
	for (var i = 0; i < lite.length; i++) {
		x.parentNode.children[i].classList.remove('lit');
	}
	x.classList.add('lit');	
}

 for (var i = 0; i < lite.length; i++) {
	lite[i].addEventListener('click', function(){
		if (this === lite[0]) {
			liteemup(this);
			guy.style.animationPlayState = 'paused';
		}
		else if (this === lite[1]) {
			liteemup(this);
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '.75s';
		}
		else {
			liteemup(this);
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '.15s';
		}
	});	
}

function slideshow(){
	for(var i = 0; i < idHero.length; i++) {
		idHero[i].addEventListener('click', function(){

		});
	}
}
console.log(slideshow);