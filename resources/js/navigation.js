$(document).ready(function(){

  var $navBar = $(".fixed-top");
  var $header = $("#header")
  var $navItem = $('.nav-link, .navbar-brand')
	
	$navItem.click(function(event) { 
		var anchorId = $(this).attr("href");

    if (anchorId.length > 1 && $(anchorId).length > 0) {
      var target = $(anchorId).offset().top - $navBar.height();
    } else var target = 0;

		$('html, body').animate({ scrollTop: target	}, 500, function () {
			window.location.hash = anchorId;
		});

  });
  
  $(document).scroll(function () {
    $navBar.toggleClass('scrolled', 
      $(this).scrollTop() > $header.height() - $navBar.height()
    );

  });

  $('body').scrollspy({
    target: $navBar,
    offset: $navBar.height()
  });

});

window.sr = ScrollReveal();
sr.reveal('.intro-line', { duration: 2000 }, 500);
sr.reveal('#footer', 500);
