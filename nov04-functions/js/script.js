/* js goes here */
var bodyObj = document.body;
var divObj = document.querySelector('main div');
var div2 = document.querySelector('main div:last-child'); //querySelectorAll();

console.log(div2);
// console.log(divObj);
// console.log(bodyObj);
// console.log(headObj);

bodyObj.addEventListener('keydown', function(event){
	//console.log(event.keyCode);
	var keyX = parseInt(div2.style.left);
	var keyY = parseInt(div2.style.top);
	
	if (event.keyCode === 37) {
		//console.log('user press left');
		keyX = keyX - 5;
		div2.style.left = keyX+'%';
	}else if (event.keyCode === 39) {
		//console.log('user pressed right');
		keyX = keyX + 5;
		div2.style.left = keyX+'%';
	}
	else if (event.keyCode === 38){
		keyY = keyY - 5;
		div2.style.top = keyY+'%';
	}
	else if (event.keyCode === 40){
		keyY = keyY + 5;
		div2.style.top = keyY+'%';
	}
});
bodyObj.addEventListener('click', function(event){
	//console.log(event);
	var mouseX = event.x,
		mouseY =event.y;
		console.log(mouseX + ' ' + mouseY);
		moveBall(mouseX, mouseY);
});

function makeShip(){
	var shipW = '100px';
	var shipH = '25px';
	var shipClr = 'darkblue';
	var shipX = '50%';
	var shipY = '75%';
	var shipPos = 'absolute';
	var shipTrans = 'translate3d(-50%, -50%, 0)';
	var shipSlide = 'all 1000ms ease-in-out';

  div2.style.width = shipW;
  div2.style.height = shipH;
  div2.style.backgroundColor = shipClr;
  div2.style.left = shipX;
  div2.style.top = shipY;
  div2.style.position = shipPos;
  div2.style.transform = shipTrans;
  div2.style.transition = shipSlide;
}

makeShip();

function moveShip(x, y) {
	div2.style.left = x + 'px';
	div2.style.top = y + 'px';
}

function moveBall(x, y){
	divObj.style.left = x + 'px';
	divObj.style.top = y + 'px';
	divObj.style.backgroundColor = "hsla("+(y+x)+", 50%, 50%, 1)";
}

function makeBall(){
var ballW, ballH, ballClr, ballRadi, ballX, ballY, ballPos, ballTrans;

	ballW = '50px';
	ballH = '50px';
	ballClr = 'teal';
	ballX = '100px';
	ballY= '100px';
	ballRadi= '100%';
	ballPos = 'absolute';
	ballTrans = 'translate3d(-50%, -50%, 0)';
	ballSlide = 'all 100ms ease-in-out';

	divObj.style.width = ballW;
	divObj.style.height = ballH;
	divObj.style.borderRadius = ballRadi;
	divObj.style.backgroundColor = ballClr;
	divObj.style.position = ballPos;
	divObj.style.top = ballY;
	divObj.style.left = ballX;
	divObj.style.transform = ballTrans;
	divObj.style.transition = ballSlide;
}

makeBall();

function contactForm(){
	
}