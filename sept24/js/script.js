/*put your javascript here*/
document.write('<h1>Make your list app</h1><input id="input_box" type="text" placeholder="type here"><input id="submit_button" type="button" value="click"><ol id="first_ul"></ol>');

var unordered_list = document.getElementById('first_ul');
var insert_button = document.getElementById('submit_button');
var button = document.getElementById('input_box');
var list_item, input, text;


function add_to_list(name_value) {
	var name = name_value;
	if (name === '' || name === null) {
		return ;
	}
	var new_list_item = document.createElement('li');
	new_list_item.innerText = name_value;
	unordered_list.appendChild(new_list_item);
	new_list_item.classList.toggle('child_element');

	 new_list_item.addEventListener('dblclick', function() {
	 	this.remove();
	 });


  	new_list_item.addEventListener('click', function(event){
    	editable_li();
 	});
 	
 	// new_list_item.addEventListener('contextmenu', function(){
 	// 	createButton();
 	// });

};

insert_button.addEventListener('click', function(){
	var name_value = button.value;
	add_to_list(name_value);
	button.value = '';
});

button.addEventListener('keydown', function(){
	if (event.keyCode === 13) {
		insert_button.click();

	}
});



function editable_li(){

    event = event || window.event;


    list_item = event.target || event.srcElement;

    if (list_item && list_item.tagName.toLowerCase() === 'li') {

      list_item.style.display = "none";


      text = list_item.innerHTML;


      input = document.createElement('input');
      input.type = "text";
      input.size = Math.max(text.length / 4 * 3, 4);
      list_item.parentNode.insertBefore(input, list_item);


      input.focus();
      input.onblur = function() {

        list_item.parentNode.removeChild(input);


        list_item.innerHTML = input.value;


        list_item.style.display = "";
      };

  };
};

// function createButton(){
//     var button = document.createElement("input");
//     button.type = "button";
//     button.value = "im a button";
//     button.onclick = func;
//     context.appendChild(button);
// }