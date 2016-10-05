jQuery(document).ready(function($) {

	var duration_time       = $( 'div' ).filter('[data-duration_time]').data("duration_time");
	var scrolling           = $( 'div' ).filter('[data-scrolling]').data("scrolling");
	var disable_duration    = $( 'div' ).filter('[data-disable_duration]').data("disable_duration");

	if ( $('.epda-forced').length > 0 ){
		$moved_Arrow = $("#ep-arrow").clone();
		$("#ep-arrow").remove();
		$("#ep-arrow").remove();
		$('body').prepend($moved_Arrow);
	}

	// Display the Arrow only if the page loads from the top
	if ( disable_duration == false &&  $( window ).scrollTop() ) {
		$( "#ep-arrow").css( 'display', 'none' );
	}

	//Fade out after set duration
	if (disable_duration == false) {
		setTimeout(function(){
			$( "#ep-arrow" ).fadeOut( 800 );
		}, duration_time );
	}

	if ( scrolling == true ) {
		$( window ).scroll( function(){
			if ( $( window ).scrollTop() > 0)
			{
				$("#ep-arrow").fadeOut(1000);
			}
		});
	}

});


