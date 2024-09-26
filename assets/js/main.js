/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	//appear box for more description of the projects
	document.addEventListener('DOMContentLoaded', function() {
		const openLink = document.getElementById('open-box');
		const messageBox = document.getElementById('message-box');
		const closebutton = document.getElementById('close-box');
		const messageBox2 = document.getElementById('message-box2');
		const messageBox3 = document.getElementById('message-box3');
	  
		openLink.addEventListener('click', function(e) {
		  e.preventDefault();
		  messageBox2.style.display = 'none';
		  messageBox3.style.display = 'none';
		  messageBox.style.display = 'block';
		});
	  
		closebutton.addEventListener('click', function() {
		  messageBox.style.display = 'none';
		});
	});

	document.addEventListener('DOMContentLoaded', function() {
		const openLink = document.getElementById('open-box2');
		const messageBox = document.getElementById('message-box2');
		const closebutton = document.getElementById('close-box2');
		const messageBox1 = document.getElementById('message-box');
		const messageBox3 = document.getElementById('message-box3');
	  
		openLink.addEventListener('click', function(e) {
		  e.preventDefault();
		  messageBox1.style.display = 'none';
		  messageBox3.style.display = 'none';
		  messageBox.style.display = 'block';
		});
	  
		closebutton.addEventListener('click', function() {
		  messageBox.style.display = 'none';
		});
	});

	document.addEventListener('DOMContentLoaded', function() {
		const openLink = document.getElementById('open-box3');
		const messageBox = document.getElementById('message-box3');
		const closebutton = document.getElementById('close-box3');
		const messageBox1 = document.getElementById('message-box');
		const messageBox2 = document.getElementById('message-box2');
	  
		openLink.addEventListener('click', function(e) {
		  e.preventDefault();
		  messageBox1.style.display = 'none';
		  messageBox2.style.display = 'none';
		  messageBox.style.display = 'block';
		});
	  
		closebutton.addEventListener('click', function() {
		  messageBox.style.display = 'none';
		});
	});


})(jQuery);