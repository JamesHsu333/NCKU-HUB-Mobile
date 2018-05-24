(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#search-page').sidenav({
      edge: 'right',
      draggable:false
    });
    $('.parallax').parallax();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown({
      /*closeOnClick: false,
      hover: false*/
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
