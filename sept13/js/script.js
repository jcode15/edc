/*put your javascript here*/
document.write('<div class="game_container"><ul class="game_unordered_list"><li class="game_list_item">Add Game</li><li class="closed"><p>Name of game</p><input id="name_input_box" type="text"><p>Add a picture</p><input id="picture_input_box" type="text"><button id="add_submit_button" type="submit">Submit</button></li><li class="game_list_item">Chess</li><li class="game_list_item">Poker</li><li class="game_list_item">Scrabble</li></ul></div>');

var game_unordered_list = document.getElementsByClassName('game_unordered_list')[0];
var game_list_item = game_unordered_list.children;
var add_submit = document.getElementById('add_submit_button');
function add_game(name_value){
   var new_game = name_value;
   if (new_game === '' || new_game === null){
   	return ;
   }
   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_unordered_list.appendChild(new_li);
	new_li.innerText = name_value;
	new_li.classList.toggle('game_list_item');
	//hover_over();
};
function get_event_target(event_name) {
    event_name = event_name || window.event;
    return event_name.target || event_name.srcElement; 
};

function get_index(target){
	var target_parent = target.parentElement;
	for (var i = 0; i < target_parent.children.length; i++){
		if (target_parent.children[i] === target){
			
		};
	};
};

// game_unordered_list.addEventListener('click', function(event) {
// 	this.get_event_target = event;
// 	get_index(this.target);

// });

// game_list_item[0].addEventListener('click', function(){
// 	game_list_item[1].classList.toggle("closed");
// 	game_list_item[1].classList.toggle("open");
// 	//add_game();
// });

add_submit.addEventListener('click',function(){
	var name_value = document.getElementById("name_input_box").value;
	add_game(name_value);
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	document.getElementById("name_input_box").value = '';

});

game_list_item[0].addEventListener('mouseenter', function(){
        
        game_list_item[1].classList.toggle("open");
});

game_list_item[0].addEventListener('mouseout', function(){

       game_list_item[1].classList.toggle("closed");
});