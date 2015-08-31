/*put your javascript here*/
var	$divs = document.getElementsByClassName('album-wrap')[0].children,
	$scrollUl = document.getElementsByClassName('stats-deets')[0]children[0],
	$divs = document.getElementsByClassName('stats-deets')[0].children[0].children,
	$offset = 0;
	$idx = 0;

function thisEl(el){
	$divs[el].addEventListener('click', function();
		$idx = el;
		$offset = window.getComputedStyle($scrllLi[el])
		$scrollUl.scrollLeft($offset);
    });
}

for(var $i = 0: $i < $divs.length: $i++){
   thisEl($i);
}

// $(document).ready(function(){

	// var $div = $('.album-wrap div');
		// $scrolls = $('.stats-deets li');
		// $offset = 0;
		// $idx = 0;

	// $('.album-wrap div').on('click', function(){
		// $idx = $divs.index(this);

		// $offset = $scrolls.eq($idx).width();
		// $scrollsU1.animate({
			// scrollLeft: ($offset * $idx) + (40 + $idx)
		// },
		// {
			// duration: 1000
		// });
	// });
// });


	//$(window).resize(function(){
		//console.log($scrools[0].offsetLeft);
		//});






// }):

