/*put your javascript here*/
var enter_name = document.getElementById('parent');
var insert_button = document.getElementById('sub_btn');
var enter_delete = document.getElementsByTagName('li');

function add_li(name_value){
	var new_name = name_value;
	if (new_name === '' || new_name === null) {
		return;
	}
	var new_li = document.createElement('li');
	new_li.innerText = name_value;
	enter_name.appendChild(new_li);
	new_li.innerText = name_value;
	new_li.classList.toggle('child');

};


 insert_button.addEventListener('click', function(){
 	var name_value = document.getElementById('input_box').value;
	add_li(name_value);
	document.getElementById('input_box').value = '';

	});

  enter_delete.addEventListener('dblclick', function(){
 		this.remove();

  });