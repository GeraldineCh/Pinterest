'use strict';

function Pantalla7 (update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/bcp-logo.png" alt="">');
	var contentText =  $('<div></div>');
	var titulo = $('<h2 class="title center">Ingresa la clave de tu tarjeta</h2>');
	var text = $('<p class="center">Tarjeta <span class="bold"> ****' + state.cardNumber.slice(-4) + '</span></p>');
	var form = $('<form action=""></form>');
	var password = $('<input class="bg-image" maxlength="4" size="4" id="user-password" type="password">');
	var btn = $('<button type="submit" class="btn btn-small disabled" id="btn">Registrar</button>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	form.append(password);

	section
		.append(containerImg)
		.append(contentText)
		.append(form)
		.append(btn);

	password.on("keyup", function(e){
		e.preventDefault();

		var rg = /^[0-9]+$/;
		if(rg.test($(this).val()) && $(this).val().length == 4){
			state.cardPassword = $(this).val();
			btn.removeClass('disabled');
		}else{
			btn.addClass('disabled');
		}
	});

	btn.on("click", function(e){
		e.preventDefault();
		$.post("api/registerCard", {
			phone: state.phone,
			cardNumber: state.cardNumber,
			cardMonth: state.cardMonth,
			cardYear: state.cardYear,
			cardPassword: state.cardPassword
		}, function(response){
			if(response.success){
				state.screen = "pantalla8";
				update();
			}else{
				state.screen = "pantalla7";
				update();
			}
		});
	});
	wrap.append(section);
	return wrap;
}
