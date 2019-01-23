function auto_grow(element) {
	element.style.height = "auto";
	element.style.height = (element.scrollHeight) + "px";

	if (element.scrollHeight > 80) {
		element.style.height = 5 + "px";
		element.style.height = (element.scrollHeight + 10) + "px";
	}
}
$(function () {
	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});
});

$(function () {
	var date = new Date();
	var year = date.getFullYear();
	$('.copyright').html('Made by Borut Drazumeric &copy; ' + year);
});