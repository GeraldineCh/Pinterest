'use strict';

function Pantalla6 (update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/bcp-logo.png" alt="">');
	var contentText =  $('<div></div>');
	var titulo = $('<h2 class="title center">Registra tu tarjeta débito BCP</h2>');
	var text = $('<p class="center">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p>');
	var form = $('<div class="contentCode"></div>');
	var input = $('<input type="text" id="user-card" maxlength="16" size="16" required>');
	var containerTime = $('<div class="containerTime"></div>');
	var p = $('<p class="turquesa">Escanear tarjeta</p>');
	var imgclock = $('<img class="time" src="assets/img/icons/scan.png" alt="">');
	var containerFecha = $('<div class="containerFecha"></div>');
	var span = $('<span>Fecha de vencimiento</span>');
	var inputMes = $('<input type="text" maxlength="2" size="2" id="exp_mes" placeholder="Mes">');
	var inputAnio = $('<input type="text" maxlength="2" size="2" id="exp_anio" placeholder="Año">');
	var btn = $('<button type="submit" class="btn btn-small disabled" id="btn">Continuar</button>');

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	containerTime
		.append(imgclock)
		.append(p);

	containerFecha
		.append(span)
		.append(inputMes)
		.append(inputAnio);

	form
		.append(input)
		.append(containerTime)
		.append(containerFecha);

	section
		.append(containerImg)
		.append(contentText)
		.append(form)
		.append(btn);

	input.on("keyup", function(e){
		e.preventDefault();
		if($(this).val().length == 16){
			state.cardNumber = $(this).val();
		}else{
			state.cardNumber = null;
		}
		habilitarBtn();
	});

	inputMes.on("keyup", function(e){
		e.preventDefault();
		if($(this).val()>0 && $(this).val()<13){
			state.cardMonth = $(this).val();
		}else{
			state.cardMonth = null;
		}
		habilitarBtn();
	});

	inputAnio.on("keyup", function(e){
		e.preventDefault();
		if($(this).val()>16 && $(this).val()< 25 ){
			state.cardYear = $(this).val();
		}else{
			state.cardYear = null;
		}
		habilitarBtn();
	});

	function habilitarBtn() {
		if(state.cardNumber && state.cardMonth && state.cardYear){
			btn.removeClass('disabled');
		}else{
			btn.addClass('disabled');
		}
	}

	btn.on("click", function(e){
		e.preventDefault();
		state.screen = "pantalla7";
		update();
	});
	wrap.append(section);
	return wrap;
}
