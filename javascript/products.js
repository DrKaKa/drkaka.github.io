$(document).ready(function() {

	$("li#mine").click(function() {
		if ($(this).hasClass('inactive')) {
			$(this).removeClass('inactive');
			$("li#custom").addClass('inactive');

			$("ul.custom").animate({ opacity: 0.0}, 500);
			$("ul.custom").hide();
			$("ul.mine").show();
			$("ul.mine").animate({ opacity: 1.0}, 500);
		}
	});

	$("li#custom").click(function() {
		if ($(this).hasClass('inactive')) {
			$(this).removeClass('inactive');
			$("li#mine").addClass('inactive');

			$("ul.mine").animate({ opacity: 0.0}, 500);
			$("ul.mine").hide();
			$("ul.custom").show();
			$("ul.custom").animate({ opacity: 1.0}, 500);
		}
	});  
});