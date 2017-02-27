$(document).foundation();

var aux = 0;

function calcularTopMenu(top) {
	if (top < 6 && aux == 1) {
		if ($(window).width() < 640) {
			$(".title-bar").animate({width: "100%", opacity: "1"}, "fast");
		} else if ($(window).width() >= 640) {
		}

		aux = 0;
	} else if (top > 6 && aux == 0) {
		if ($(window).width() < 640) {
			$(".title-bar").animate({width: "5.3rem", opacity: "0.5"}, "fast");
		} else if ($(window).width() >= 640) {
		}

		aux = 1;
	}
}

$(function() {
	calcularTopMenu($(document).scrollTop());

	$(document).scroll(function() {
		calcularTopMenu($(this).scrollTop());
	});

	$(".input-group-field").focus(function() {
		$(this).attr("placeholder", $(this).siblings(".input-group-label").text().trim());

		if ($(window).width() < 1024) {
			$(this).siblings(".input-group-label").animate({width: "-20rem", padding: "0"}, "fast");
		} else {
			$(this).siblings(".input-group-label").animate({left: "22.9rem"}, "fast");
		}
	});

	$(".input-group-field").blur(function() {
		$(this).removeAttr("placeholder");

		if ($(this).val() == "") {
			if ($(window).width() < 1024) {
				$(this).siblings(".input-group-label").animate({width: "6.5rem", padding: "0 1rem"}, "fast");
			} else {
				$(this).siblings(".input-group-label").animate({left: "0rem"}, "fast");
			}
		}
	});

	$("#limpiar").click(function() {
		document.getElementById("formulario-contacto").reset();

		if ($(window).width() < 1024) {
			$(".input-group-label").animate({width: "6.5rem", padding: "0 1rem"}, "fast");
		} else {
			$(".input-group-label").animate({left: "0rem"}, "fast");
		}
	});
});