 var bodyObj = document.body;
 var mainObj = document.getElementsByTagName('main')[0];
 var timerId = window.setTimeout(displayLogin, 5000);
 
 // var passWord = document.getElementsByTagName('input')[1];

var pageOne = 
  '<div>'+
  '<form id="loginBox">'+
  '<label>UserName</label>'+
  '<span></span>'+
  '<input type="text" placeholder="User Name">'+
  '<small></small>'+
  '<label>Password</label>'+
  '<input type="password" placeholder="Password">'+
  '<label>Email</label>'+
  '<input type="email" placeholder="Email">'+
  '<label>Phone Number</label>'+
  '<input type="text" placeholder="Phone Number">'+
  '<button type="submit">Submit</button>'+
  '</form>'+
  '</div>';

 bodyObj.addEventListener('mousemove', checkDim);

function checkDim(evt){
   var winW = window.innerWidth;
   var winH = window.innerHeight;
   var mouseX = evt.clientX;
   var mouseY = evt.clientY;
  
   var hue = (mouseY / winH) * 360;
   var lum = (mouseX / winW) * 100;
  
   bodyObj.style.backgroundColor = 'hsla('+ hue +', 50%,'+ lum +'%, 1)';   //console.log('width: '+ winW + ', height: ' + winH + ', mouseX: ' + mouseX + ', mouseY: '+ mouseY);
}

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = pageOne;
	var subBtn = document.getElementsByTagName('button')[0];
    var formObj = document.querySelector('form[id="loginBox"] input');
    console.log(formObj);


	subBtn.addEventListener('click', function(evt){
	 	evt.preventDefault();
	 	var els = formObj.elements,
	 		len = els.length - 1,
			arr = [];
	 	// for(var i = 0; i < len; 1++){
	 	// 	if (!els[i].value){
	 	// 		els[i].nextElementSibling.innerHTML = 'Please fill in the input.';
	 	// 	}else{
	 	// 		arr.push(els[i].value);
	 	// 	}
	 	// }
	});
}
// 		console.log(arr);

// subBtn.addEventListener('click', function(event){
// 	event.preventDefault();
// 	var peanut = userName.value;
// 	var butter = passWord.value;
// 	if(peanut === null || peanut === ''){
// 		console.log('empty input');
// 		return;
		
// 	}
// 	var new_h1 = document.createElement('h1');
//    new_h1.innerText = peanut + ' ' + butter; 
// 	bodyObj.appendChild(new_h1);

// 	userName.value = '';
// 	passWord.value = '';
// });