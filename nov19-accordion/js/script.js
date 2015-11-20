/* js goes here */
var bodyObj = document.body;
var listItems = document.querySelectorAll('li');

var lineHeight = checkStyles(bodyObj, 'line-height');

function checkStyles(el, prop){
	return window.getComputedStyle(el).getPropertyValue(prop);
}


for(var i = 0; i < listItems.length; i++){
	var pHeight = listItems[i].firstElementChild.clientHeight;
	var listp = listItems[i].firstElementChild;
	

	if(pHeight > parseInt(lineHeight) * 2){

		listp.style.height = parseInt(lineHeight) * 2 + 'px';
		listp.style.overflow = 'hidden';
		listp.style.transition = 'all 250ms ease-in-out';
		listp.classList.add("more");

		listItems[i].addEventListener('mouseenter', function(){
			this.firstElementChild.style.height = this.firstElementChild.scrollHeight + 'px';
		});
		listItems[i].addEventListener('mouseleave', function(){
			this.firstElementChild.style.height = parseInt(lineHeight) * 2 + 'px';
		});
	}
	var sudoEl = document.getElementsByClassName('more');
	console.log(sudoEl);
}


