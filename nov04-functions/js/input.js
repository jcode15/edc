var payBtn = document.getElementById('pay');
var mainObj = document.getElementsByTagName('main')[0];

payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff =
'<form>'+
'<div>'+
'<input type="text" placeholder="first name">'+
'<input type="text" placeholder="last name">'+
'</div>'+
'<input type="text" placeholder="address">'+
'<div>'+
'<input type="text" placeholder="city">'+
'<input type="text" placeholder="state">'+
'<input type="text" placeholder="zip code">'+
'</div>'+
'<input type="text" placeholder="pay amount">'+
'<label>Credit Card'+
'<input type="text" maxlength="4">_</input>'+
'<input type="text" maxlength="4">_</input>'+
'<input type="text" maxlength="4">_</input>'+
'<input type="text" maxlength="4">'+
'</label>'+
'<input type="submit" value="Submit">'+
'</form>';
mainObj.innerHTML = formStuff;

	var formObj = document.getElementsByTagName('form')[0];
	var formEls = formObj.length;
	var submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(event){
		event.preventDefault();
		getInfo();
		//alert('Thank You '+formObj.elements[0].value+ formObj.elements[1].value);
	});



	function getInfo(){
		var formInfo;
		var formArr = [];
		for(var i = 0; i < formEls-1; i++) {
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
			}
		}
		console.log(formArr);
		thankyou(formArr);
	}
	function thankyou(Y){
		
		alert(Y.splice(0, 2));
	}


		
}