/* js goes here */
(function(){
var bodyObj = document.body;
var headerObj = document.querySelector('header');
var mainObj = document.querySelector('main');


window.addEventListener('scroll', scroller);

function scroller(event){
	//console.log(window.scrollY);
	var ten = 10;
	fixnav(event);
}

/**
*Function fetches css applied styles.
*	x needs to be a js object
*	y needs to be a css property
*/
function getRecStyle(x, y){
	return parseInt(window.getComputedStyle(x, null).getPropertyValue(y));
}

/**
*Function converting px to vw / vw to px.
*	num needs to be an integer
*
*/
function calcUnit(num){
	return (document.documentElement.clientWidth / num);
}

function fixnav(){
	var scrolldis = window.scrollY;
	//console.log(scrolldis);
	if (scrolldis > getRecStyle(bodyObj, 'padding-top')){
		//console.log('yes it has');
		headerObj.classList.add('fixie');
		mainObj.style.paddingTop = (calcUnit(10)+headerObj.clientHeight) + 'px'; 
	}else{
		headerObj.classList.remove('fixie');
		mainObj.style.paddingTop = '10vw';
	}
}

//console.log(getRecStyle(headerObj, 'background-color'));
console.log(document.documentElement.scrollHeight);
function colorChange(){
	var cH = document.documentElement.clientHeight;
	var sH = document.documentElement.scrollHeight;
	console.log( Math.round(sH / cH) );

}

colorChange();

})();

