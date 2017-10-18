//fixed header

var $header = $( '.b-header' ),
    $headerContainer = $( '.b-header__container' );

$( window ).bind( 'scroll', function(e) {
  
  var scrolled = $( window ).scrollTop(),
      headerBorder = 0,
      top = 0;
  
  if ( $( '#bx-panel' ).length && !$( '#bx-panel' ).hasClass( 'bx-panel-fixed' )) {
    headerBorder = $header.offset().top;
  } else {
    top = $header.offset().top;
  }
  
  if ( scrolled > headerBorder ) {
      
    if ( !$header.hasClass( 'i-fixed' )) {
      $headerContainer.css({ top: top + 'px' });
      $header.addClass( 'i-fixed' );
    }
    
  } else {
    $header.removeClass( 'i-fixed' );
  }
  
});

//sideNav
$( '.b-header__menu-icon' ).sideNav();

//lazyload
$('.lazyload').lazyload({
  effect: "fadeIn",
});