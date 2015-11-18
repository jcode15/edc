/* js goes here */
var pageTwoBtn = document.getElementById('pagetwo');
var bodyObj = document.getElementsByTagName('body')[0];
var pageTwo = 
'<header class="img">'+
'<div>'+
'<h1>Oakland Raiders</h1>'+
'</div>'+
'<nav>'+
'<ul>'+
'<li><a href="#">Players</a></li>'+
'<li><a href="#">Raiderettes</a></li>'+
'<li><a href="#">History</a></li>'+
'<li><a href="#">Tickets</a></li>'+
'</ul>'+
'</nav>'+
'</header>'+
'<section id="pagetwo">'+
'<div></div>'+
'<div id="images">'+

'<h2>Players for the 2015 Season</h2>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'<h1>Charles Woodson</h1>'+
'<div class="img"></div>'+

'</div>'+
'<div></div>'+
'</section>';

pageTwoBtn.addEventListener('click', function(){
	bodyObj.innerHTML = pageTwo;
});