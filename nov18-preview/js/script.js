/* js goes here */

var imgTag = document.getElementsByTagName('img');
var button = document.getElementsByTagName('a');
var paraghObj = document.querySelectorAll('main div div div');


function loopImages(){
	for(var i = 0; i < imgTag.length; i++){
		imgTag[i].addEventListener('mouseenter', function(){
			this.style.transform = "scale(1.2)";
			this.style.transition = "All 500ms ease-in-out";
		});
		imgTag[i].addEventListener('mouseleave', function(){
			this.style.transform = "scale(1)";
			this.style.transition = "All 500ms ease-in-out";
		});
	}		
}

function loopButtons(){
	for(var i = 0; i < button.length; i++) {
		console.log(this);
		button[i].addEventListener('mouseenter', function(){
			this.style.backgroundColor = 'hsla(44, 18%, 55%, 1)';
			this.style.borderColor = 'hsla(44, 18%, 55%, 1)';
			this.style.color = 'hsla(0, 0%, 100%, 1)';
			this.style.transition = "all 250ms ease-in-out";
			this.parentElement.previousElementSibling.lastElementChild.style.top = '0';
			this.parentElement.previousElementSibling.lastElementChild.style.transition = 'all 500ms ease-in-out';
		});
		button[i].addEventListener('mouseleave', function(){
			this.style.backgroundColor = 'hsla(26, 23%, 39%, 0.96)';
			this.style.borderColor = 'hsla(26, 23%, 39%, 0.96)';
			this.style.color = 'hsla(0, 0%, 100%, 1)';
			this.parentElement.previousElementSibling.lastElementChild.style.top = '100%';
			this.parentElement.previousElementSibling.lastElementChild.style.transition = 'all 500ms ease-in-out';
		});
	}
}

for(var i = 0; i < paraghObj.length; i++){
	paraghObj[i].addEventListener('mouseenter', iconTwist);
	//paraghObj[i].addEventListener('mouseleave', iconTwistBack);
}

function iconTwist(){
	console.log(this.FirstElementChild);
	this.FirstElementChild.style.transform = 'rotate(90deg)';
}

loopImages();
loopButtons();