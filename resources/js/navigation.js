$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $header = $("#header")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $header.height() - $nav.height());
  });
});