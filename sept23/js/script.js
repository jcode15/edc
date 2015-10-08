/*put your javascript here*/ 

document.write('<h1>Make your list</h1><input id="input_box" type"text" placeholder="add a game to list"> <input id="sub_btn" type="button" value="insert"><ul id="parent_element"></ul><h3>It can be a grocery, shopping or even game list!');

var parent_element = document.getElementById('parent_element');
var insert_button = document.getElementById('sub_btn');
var enter_delete = document.getElementsByClassName('child_element');

function add_to_list(name_value) {
	var name = name_value;
	if (name === " " || name === null) {
		return;
	}
		var new_list_element = document.createElement('li');
		new_list_element.innerText = name_value;
		parent_element.appendChild(new_list_element);
		new_list_element.classList.toggle('child_element');

		new_list_element.addEventListener('dblclick', function() {
			
				this.remove(this);
    	
	});
		new_list_element.addEventListener('contextmenu', function(event) {

			this.innerText = prompt('please change text');
				event.preventDefault();

			if (this.innerText === null) {
               return (name); 
    			}
    
			return false;
		},false);
};

insert_button.addEventListener('click', function(){
	var name_value = document.getElementById('input_box').value;
	add_to_list(name_value);
	document.getElementById('input_box').value = '';

});
document.getElementById('input_box').addEventListener('keydown', function(){
	if (event.keyCode == 13) {
		document.getElementById('sub_btn').click();
	};
});

function move_item(id, direction) {
    var ul = document.getElementById('parent_element');
    var items = document.getElementsByTagName('li');

    var counter = 0;
    var previous_item = null;
    var move_next_item_up = false;

    for (var item in items) {

        //if current item, is the one to be moved
        if (item == id) {
            if (direction == 1) { // item move down
                move_next_item_up = true;
            } else if ((direction == -1) || (move_next_item_up == true)) { // item move up
                var curr = items[counter];
                var prev = items[counter-1];

                items[counter-1] = curr;// move previous item, to current
                items[counter] = prev;//move current item, to previous

                break;
            }           
        } 

        previous_item = item;
        counter = counter + 1;
    }

}