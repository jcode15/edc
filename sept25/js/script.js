document.write('<input id="input_box" type="text" placeholder="Type here"><input id="submite_button" type="button" value="Enter"><ol id="first_ordered_list"></ol>');

var ordered_list = document.getElementById('first_ordered_list');
var submit_button = document.getElementById('submite_button');
var input_box = document.getElementById('input_box');

function create_list_item(name_value){
    var name = name_value;
    if (name === " " || name === null) { 
        return;
    }
    var new_list_item = document.createElement('li');
    new_list_item.innerText = name_value;
    ordered_list.appendChild(new_list_item);
    new_list_item.classList.toggle('ordered_child');

    new_list_item.addEventListener('dblclick', function(){
        this.remove();
    });
    
};

submit_button.addEventListener('click', function(){
    var name_value = input_box.value;
    create_list_item(name_value);
    input_box.value = '';
});

input_box.addEventListener('keydown', function(){
    if (event.keyCode ===13) {
        submit_button.click();
    }
});
