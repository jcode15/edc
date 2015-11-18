/* js goes here */
var login_button = document.getElementById('login');
var user_name = document.getElementById('username');
var password = document.getElementById('password');
var login_box = document.getElementById('loginbox');
var savedUsername = 'jcode';
var savedPassword = 'procode';
var button_click = document.getElementById('login_button');

login_button.addEventListener('click', toggleLoginBox);

function toggleLoginBox() {
    login_box.classList.toggle('active');
};

function userLogin() {
	var unValue = user_name.value;
	var pwValue = password.value;
	console.log(unValue + ";" + pwValue);
	if(unValue === savedUsername && pwValue === savedPassword) {
		hdrConfirm.textContent = 'your in';
        user_name.value = '';
        password.value = '';
        toggleLoginBox();
        window.location = 'http://google.com';
	}
    if(!unValue || unValue ==== !== savedUsername){
        user_name.classList.add('error');
    }else{
        user_name.classList.remove('error');
    }
    if(!pwValue || pwValue ==== !== savedPassword){
        password.classList.add('error');
    }else{
        password.classList.remove('error');
    }
}



var city, state, zip;
var a = document.getElementsByTagName('a')[1];
var list_name = document.getElementById('name');
var list_add = document.getElementById('address');
var log_div = document.getElementById('log');
var csz = document.getElementById('citystatezip');

var firstName = '<h1>Julian</h1>';
var address = '41257 Road 40';
var getterLi = document.getElementById('getter');
    
list_name.innerHTML = firstName;
list_add.textContent = address;
console.log(getterLi.textContent);

function getInfo(){
	city = prompt('what city are you from?');
	state = prompt('what state are you from?');
    zip = parseInt(prompt('what is your zip code?')); 
    if(!city || !state || !zip) {
    	alert('you did not enter a city');
    	getInfo();
    	console.log('empty prompt submited');
    }else{
    	var isCorrect = confirm('Is this Correct?\n' +city+','+state+','+zip);
    	alert('You live in ' + city + ' ' + state + ' ' + zip);
    	console.log(city + ' ' + state + ' ' + zip);
    	csz.textContent = (city + ' ' + state + '. ' + zip);
       	log_div.innerText +=(city + ' ' + state + '. ' + zip);
    }


console.log(typeof city);
console.log(typeof state);
console.log(typeof zip);
};


 a.addEventListener('click', function(){
	getInfo();
});

 button_click.addEventListener('click', function(){
    user_name();
 });