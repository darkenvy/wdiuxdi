$(document).ready(function() {
   $("#carousel-main").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-main").swipeleft(function() {
      $(this).carousel('next');
   });
});