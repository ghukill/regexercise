

$(document).ready(function(){

	$("button.regex_this").on('click', function(e) {

		// get regex type
	    var regex_type = $(this).attr('regex');
	    // get table
	    var regex_table = $(this).siblings("table")[0];
	    // prep
	    regex_package = {
	    	regex_type : regex_type,
	    	input : $(regex_table).find('.input').html(),
		    target : $(regex_table).find('.target').html(),
		    regex : new RegExp($(regex_table).find('.regex').val()),
		    result : $(regex_table).find('.result').html()
	    }

	    // debug
	    console.log(regex_package);

	    if (regex_type == 'match'){
		    // check regex
		    regex_package.verdict = regex_package.regex.test(regex_package.input)
		    // set verdict
	    	var verdict_msg = $(regex_table).find('.result');
	    	if (regex_package.verdict){
		    	verdict_msg.html('true');
		    	verdict_msg.removeClass('false');
		    	verdict_msg.addClass('true');
		    }
	    	else {
	    		verdict_msg.html('false');
	    		verdict_msg.removeClass('true');
	    		verdict_msg.addClass('false');	
	    	}
	    }

	    if (regex_type == 'replace'){
	    	regex_package.sub = new RegExp($(regex_table).find('.sub').val());
	    	regex_package.derived = regex_package.input.replace(regex_package.regex, regex_package.sub);
	    	regex_package.verdict = regex_package.derived == regex_package.target;
	    	var verdict_msg = $(regex_table).find('.result');
	    	if (regex_package.verdict){
		    	verdict_msg.html(regex_package.derived);
		    	verdict_msg.removeClass('false');
		    	verdict_msg.addClass('true');
		    }
	    	else {
	    		verdict_msg.html(regex_package.derived);
	    		verdict_msg.removeClass('true');
	    		verdict_msg.addClass('false');	
	    	}
	    }
	    
	});

});