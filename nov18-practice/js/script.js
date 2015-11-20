/* js goes here */

var imgTag = document.querySelectorAll('img');

console.log(imgTag);

for(var i = 0; i < imgTag.length; i++) {
	imgTag[i].addEventListener('mouseenter', imgStyle);
	imgTag[i].addEventListener('mouseleave', imgBack);
}

function imgStyle(){
	this.style.transform = 'scale(1.2)';
	this.style.transition = 'all 200ms ease-in-out';
}

function imgBack(){
	this.style.transform = 'scale(1)';
}