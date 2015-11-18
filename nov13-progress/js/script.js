/* js goes here */
(function(){
var bodyObj = document.body,
    navObj = document.querySelector('nav'),
    mainObj = document.getElementsByTagName('main')[0];
var bodyH = 0,
	mainH = 0;

var progressBar = document.getElementById('progressBar');

var animObjs = document.getElementsByClassName('animWrap');

console.log(animObjs);

window.addEventListener('resize', checkDims);
window.addEventListener('scroll', checkScroll);


function checkDims(){
	bodyH = document.body.clientHeight;
	mainH = mainObj.clientHeight;
	console.log(bodyH);
}

checkDims();

function checkScroll(){
	var scrollPos = window.scrollY;
	var docUnit =  Math.ceil( (100 / mainH)*100)/100;
	var docPos = (scrollPos * docUnit);
	if (docPos <= 100) {
		//console.log(docPos);
		progressBar.style.width = docPos + 'px';
	}
	addAnim(scrollPos);
}

function addAnim(x){
	var winH = window.innerHeight;
	var animArr = [];
	//console.log(x);
	for(var i = 0; i < animObjs.length; i++) {
		animArr.push(animObjs[i].offsetTop)
		//console.log(animArr);
	}
	for(var i = 0; i < animArr.length; i++) {
		if(x > animArr[i] - winH){
			animObjs[i].classList.add('animation');
			// console.log('its greater');
		}else{
			animObjs[i].classList.remove('animation');
			// console.log('its less');
		}
	}
}
})();