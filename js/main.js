

$(document).ready(function(){

	$("button.regex_this").on('click', function(e) {
	    var regex_type = $(this).attr('regex');
	    console.log(regex_type);
	    // get table
	    var regex_table = $(this).siblings();
	    console.log(regex_table);
	});

});