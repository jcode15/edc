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

game_list_item[0].addEventListener('click', function(){
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	//add_game();
});

add_submit.addEventListener('click',function(){
	var name_value = document.getElementById("name_input_box").value;
	add_game(name_value);
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	document.getElementById("name_input_box").value = '';

});

  // var test = document.getElementsByClassName("game_list_item")[2];
  //  // this handler will be executed only once when the cursor moves over the unordered list
  // test.addEventListener("mouseover", function( event ) {   
  //   // highlight the mouseenter target
  //   event.target.style.backgroundColor = "purple";

  //   setTimeout(function() {
  //     event.target.style.backgroundColor = "white";
  //   }, 500);
  // }, false);
// divCreator.addEventListener('mouseover', mouseEnter(createPopup), true);
// divCreator.addEventListener('mouseout', mouseEnter(hidePopup), true);


// function mouseEnter(_fn)
// {
//    return function(_evt)
//    {
//       var relTarget = _evt.relatedTarget;
//       if (this === relTarget || isAChildOf(this, relTarget))
//          { return; }

//       _fn.call(this, _evt);
//    }
// };

// function isAChildOf(_parent, _child)
// {
//    if (_parent === _child) { return false; }
//       while (_child && _child !== _parent)
//    { _child = _child.parentNode; }

//    return _child === _parent;
// }

// hover_over = function(){
// 	for (i = 1; i < game_list_item.length; i++){
// 		var color_hover = document.getElementsByClassName('game_list_item')[i];
// 		color_hover.addEventListener('mouseover', function( event ) {
// 			event.target.style.backgroundColor = "purple";
// 			setTimeout(function() {
// 	      event.target.style.backgroundColor = "white";
// 	    }, 500)
// 	  }, false)
// 	};
// };
// hover_over();
// var function_loop_mouse_enter = function(){
// for (var i= 0;i<game_list_item.length;i++){
//     game_list_item[i].addEventListener('mouseenter', function(){
//       for (var i = 2; game_list_item.length - 2; i++) {
//       if (game_list_item[i].children.length>0){
//           game_list_item[i].removeChild(game_list_item[i].children[0])
//       }
//   };
// });
// }
// };

// function_loop_mouse_enter();