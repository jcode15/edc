document.addEventListener('DOMContentLoaded', function(){



var input_create = document.getElementById('input_box_create');
var unordered_list = document.getElementById('unordered_list');
var input_delete = document.getElementById('input_box_delete');
var list_name = document.getElementsByClassName('list_childn');


function create_list(name_value) {
	var name = name_value;
	if (name === '' || name === null) {
		return;
	}
	var new_list_item = document.createElement('li');
	new_list_item.innerText = name_value;
	unordered_list.appendChild(new_list_item);
	new_list_item.classList.toggle('list_child');
};

function check_and_delete() {
    var inputs = document.getElementsByTagName('li').innerText;
        for (var i = 0; i < inputs.length; i++) {
            
            if (document.getElementsByTagName('li')[i].value.length == 0) {
                var id = document.getElementById("input_box_delete")[i].id;
                (elem = document.getElementById(id)).parentNode.removeChild(elem);
                (elem=document.getElementById(id + 'label')).parentNode.removeChild(elem)
            }
        }
}

input_create.addEventListener('keydown', function() { 
	if (event.keyCode === 13){
		var name_value = input_create.value;
		create_list(name_value);
		input_create.value = '';
	}
});

input_delete.addEventListener('click', function(){
	alert('delete box clicked');
});

});