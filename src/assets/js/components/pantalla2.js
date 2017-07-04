'use strict';

function Pantalla2(update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/phone.png" alt="">');
	var contentText =  $('<div></div>');
	var titulo = $('<h2 class="title center">Para comenzar validemos tu número</h2>');
	var text = $('<p class="center">Recibirás un SMS con un código de validación.</p>');
	var form = $('<form method="post" action=""></form>');
	var contenedor = $('<div></div>');
	var input = $('<input type="number" id="user-phone" class="bg-image" pattern="[9]{1}[0-9]{8}" required>');
	var terminos = $('<input type="checkbox" class="filled-in" id="terminos" />');
	var labelTerminos = $('<label for="terminos">Acepto los <a href="#">Términos y condiciones</a></label>');
	var message = $('<p></p>');
	var btn = $('<button type="submit" class="btn btn-small disabled" id="validarNumero">CONTINUAR</button>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	contenedor
		.append(input)
		.append(terminos)
		.append(labelTerminos);


	form
		.append(contenedor)
		.append(message)
		.append(btn);

	section
		.append(containerImg)
		.append(contentText)
		.append(form);

	terminos.on('change',function (e) {
		e.preventDefault();
		if(input.val().length == 9 && $("#terminos").is(':checked')) {
			btn.removeClass('disabled');
		}else{
			btn.addClass('disabled');

		}
	});

	btn.on('click',function (e) {
		e.preventDefault();

		$.post('/api/registerNumber',{
			phone: input.val(),
			terms: $("#terminos").is(':checked')
		},function(response){
			if (response.success) {
				state.screen = "pantalla3";
				state.phone = response.data.phone;
				state.code = response.data.code;
				console.log(response.success);
				console.log('Codigo: ' + response.data.code);
				update();
			} else {
				state.screen = "pantalla2";
				message.text("response.message");
				console.log(response.message);
				update();
			}
		});
	});
	wrap.append(section);
	return wrap;
}