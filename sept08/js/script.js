/*put your javascript here*/
document.write('<ul id="game_ul"><li>Game list</li><li>Chess</li><li>Poker</li><li>Sorry</li><li>click to Add game here</li></ul>');
        
  var game_ul = document.getElementById('game_ul');
var game_list = game_ul.children;
function add_game(){
   var new_game = prompt('What new game do you want to add?');
   if (new_game === '' || new_game === null){
   	return;
   } 
   var new_li = document.createElement('li');
   new_li.innerText = new_game; 
	game_ul.appendChild(new_li);
};

function getEventTarget(e) {
       e = e || window.event;
       return e.target || e.srcElement; 
   }

   var ul = document.getElementById('game_ul');
   ul.onclick = function(event) {
       var target = getEventTarget(event);
       alert(target.innerHTML);
   };

// game_list[0].addEventListener('click',function(){
// 	add_game();
// });
