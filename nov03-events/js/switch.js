var selectOpt = document.getElementsByTagName('select');
var paraObj = document.getElementsByTagName('p');

selectOpt[0].addEventListener('change', function(){
	var selectedOption = this.value;
	var selectedText = this.options[this.selectedIndex].innerHTML;

switch(selectedOption) {
	case 'jan':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'feb':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'mar':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'apr':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'may':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'jun':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'jul':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'aug':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'sep':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'oct':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'nov':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	 case 'dec':
	 paraObj[0].textContent = 'You selected ' + selectedText;
	 break;
	}
	alertBox();
});


selectOpt[1].addEventListener('change', function(){
	var day_option = this.value;
	var day_text = this.options[this.selectedIndex].innerHTML;
	switch(day_option) {
	case 'mon':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'tue':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'wed':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'thu':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'fri':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'sat':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 case 'sun':
	 paraObj[1].textContent = 'You selected ' + day_text;
	 break;
	 default:
	 paraObj[1].textContent = 'Everyday should be '+ day_option + ' day';
	}
	alertBox();
});

selectOpt[2].addEventListener('change', function(){
	var food_option = this.value;
	var food_text = this.options[this.selectedIndex].innerHTML;
	switch(food_option) {
	case 'hamburger':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'tacos':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'sushi':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'hotdogs':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'pizza':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'steak':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 case 'chicken':
	 paraObj[2].textContent = 'You selected ' + food_text;
	 break;
	 default:
	 paraObj[2].textContent = 'Everyday should be '+ food_option + "day";
	}
	alertBox();
});

function alertBox(){
	alert(paraObj[0].textContent + " " + paraObj[1].textContent + " " + paraObj[2].textContent);
}
