$(document).foundation();

var aux = 0;

function calcularTopMenu(top) {
	if (top < 6 && aux == 1) {
		if ($(window).width() < 640) {
			$(".title-bar").animate({width: "100%", opacity: "1"}, "fast");
		} else if ($(window).width() >= 640) {
			$("#menu-desktop li")
				.animate({margin: "1rem"}, "fast")
				.parent()
				.animate({backgroundColor: "rgba(38, 50, 56, 0)"}, "fast");
		}

		aux = 0;
	} else if (top > 6 && aux == 0) {
		if ($(window).width() < 640) {
			$(".title-bar").animate({width: "5.3rem", opacity: "0.5"}, "fast");
		} else if ($(window).width() >= 640) {
			$("#menu-desktop li")
				.animate({margin: "0 1rem"}, "fast")
				.parent()
				.animate({backgroundColor: "rgba(38, 50, 56, 0.5)"}, "fast");
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
		if ($(window).width() < 1024) {
			$(this).siblings(".input-group-label").fadeOut("fast");
		} else {
			$(this).siblings(".input-group-label").animate({left: "23.9rem"}, "fast");
		}
	});

	$(".input-group-field").blur(function() {
		if ($(this).val() == "") {
			if ($(window).width() < 1024) {
				$(this).siblings(".input-group-label").fadeIn("fast");
			} else {
				$(this).siblings(".input-group-label").animate({left: "0rem"}, "fast");
			}
		}
	});

	$("#limpiar").click(function() {
		document.getElementById("formulario-contacto").reset();

		if ($(window).width() < 1024) {
			$(".input-group-label").fadeIn();
		} else {
			$(".input-group-label").animate({left: "0rem"}, "fast");
		}
	});
});