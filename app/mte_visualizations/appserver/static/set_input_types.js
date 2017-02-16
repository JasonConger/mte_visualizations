require(["jquery", "splunkjs/mvc/simplexml/ready!"], function($) {
	
    $("[id^=numbers_only]")
		.attr('type','number')

		
	$("[id^=numbers_0_100_step10]")
		.attr('type','number')
		.attr('min','0')
		.attr('max','100')
		.attr('step','10')
		
	$("[id^=date]")
		.attr('type','date')
		
	$("[id^=date_restrictions]")
		.attr('type','date')
		.attr('min','2017-01-02')
		
	$("[id^=range]")
		.attr('type','range')
		.attr('min','0')
		.attr('max','10')

});

