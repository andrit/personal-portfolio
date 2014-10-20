$(document).ready(function() {
	$(".practical-topics").on("click", function() {
			$(this).find(".practical-title").toggleClass("highlighted");
			$(this).find(".practical-explan").toggleClass("highlighted");
		});
});