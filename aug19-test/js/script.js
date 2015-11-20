/* put your javascript here */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}


var $sizers = document.getElementsByTagName('button');
var $fontsize = document.body.style.fontsize;
var $default = '100%';
for(var $i = 0; $i < $sizers.lengh; $i++){
	$sizers[$i].addEventListener('click', function(){
		
		var $getBtn = this.innerHTML;
		if($getBtn == '+'){
			$default = $default + '10%';
			$size.style.fontSize = $newdefault;
		}else{
			$newdefault--
			$size.style.fontSize = $newdefault;
			console.log('the minu key was clicked')
		}
	});
}