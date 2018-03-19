( function($) {

  'use strict';
  
  $( function() {
  
    $( '#scheduleFilterLink' ).click( function(e) {
      e.preventDefault();
      
      $( '.b-schedule__item' ).toggleClass( 'hidden' );
      $( '.b-schedule .i-filter' ).removeClass( 'hidden' );
      
      $( '.i-filtered, .i-not-filtered' ).toggleClass( 'hidden' );
      
      $( '.b-schedule__block' ).each( function() {
        if ( $( this ).find( '.b-schedule__item:not(.hidden)' ).length === 0 ) {
          $( this ).hide();
        } else {
          $( this ).show();
        }
      });
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));