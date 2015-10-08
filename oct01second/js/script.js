/*put your javascript here*/
var ordered_list = document.getElementById('first_ordered_list');
var create_input = document.getElementById('create_input');

function add_to_ordered_list(name_value){
	var name = name_value;
		if (name === '' || name === null) {
			return;
		}
	var new_list_items = document.createElement('li');
	new_list_items.innerText = create_input.value;
	ordered_list.appendChild(new_list_items);
	new_list_items.style.backgroundColor = new_list_items.textContent;
};

// function delete_items(name_value){
// 	var name = name_value;
// 	if (name ==== '' || name === null) {
// 		return;
// 	}
// 	var list_item = document.remove('li');
// 	list_item.innerText = delete_input.value;
	

// };

document.addEventListener('DOMContentLoaded', function(){

	create_input.addEventListener('keydown', function(){
		if (event.keyCode === 13){
			add_to_ordered_list();
			create_input.value = '';
		}
	});
});