(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('select').formSelect();
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
    $(".Sorting_method_nav_R").dropdown({
      closeOnClick: false,
      hover: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
