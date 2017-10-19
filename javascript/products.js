$(document).ready(function() {
	$("section.custom").hide();
	
	$("p#mine").click(function() {
		if ($(this).hasClass('inactive')) {
			$(this).removeClass('inactive');
			$("p#custom").addClass('inactive');

			$("section.custom").animate({ opacity: 0.0}, 500);
			$("section.custom").hide();
			$("section.mine").show();
			$("section.mine").animate({ opacity: 1.0}, 500);
		}
	});

	$("p#custom").click(function() {
		if ($(this).hasClass('inactive')) {
			$(this).removeClass('inactive');
			$("p#mine").addClass('inactive');

			$("section.mine").animate({ opacity: 0.0}, 500);
			$("section.mine").hide();
			$("section.custom").show();
			$("section.custom").animate({ opacity: 1.0}, 500);
		}
	});  
});