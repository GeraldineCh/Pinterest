'use strict';

function Pantalla8 () {
	var section =  $('<section class="containerWelcome"></section>');
	var containerSuperior = $('<div class="bg-morado-light"></div>');
	var config = $('<img class="config" src="assets/img/icons/engine.png" alt="">');
	var wrap = $('<div class="containerall"></div>');
	var containerImg =  $('<div class="containerSmile"></div>');
	var smile = $('<img class="responsive-img" src="assets/img/icons/happy-face.png" alt="">');
	var titulo = $('<h2 class="center text-white">Hola</h2>');
	var contentSubtitulo = $('<div class="contentSubt"></div>');
	var eye = $('<img class="responsive-img eyes" src="assets/img/icons/eye.png" alt="">');
	var subtitulo = $('<p class="turquesa">Mostrar Saldo</p>');

	var containerInferior = $('<div class="bg-morado-dark"></div>');
	var row1 = $('<div class="row contentmovimientos"></div>');
	var col1 = $('<div class="col s6"></div>');
	var parr = $('<p class="textMovimientos">Ultimos movimientos</p>');
	var arrow = $('<img class="arrow" src="assets/img/icons/right-arrow-circular-button.png" alt="">');
	var col11 = $('<div class="col s6 contentarrow"></div>');

	var row2 = $('<div class="row"></div>');
	var col2 = $('<div class="col s5"></div>');
	var gif = $('<img  class="gif" src="assets/img/icons/icon.png" alt="">');

	var col22 = $('<div class="col s7"></div>');
	var parr2 = $('<p class="message">¿Aún no realizas tu primer pago?</p><br><p class="message">Es rápido y sencillo</p><br>');

	var row3 = $('<div class="row"></div>');
	var col3 = $('<div class="col s6"></div>');
	var contentbutton1 = $('<div class="contentbtn1"></div>');
	var circle1 = $('<img class="circle" src="assets/img/icons/send.png" alt="">');
	var text1 = $('<p class="messageCircle">Enviar Pago</p>');
	var col33 = $('<div class="col s6"></div>');
	var contentbutton2 = $('<div class="contentbtn1"></div>');
	var circle2 = $('<img class="circle" src="assets/img/icons/code-qr.png" alt="">');
	var text2 = $('<p class="messageCircle">Recibir Pago</p>');


	col1.append(parr);
	col11.append(arrow);
	row1
		.append(col1)
		.append(col11);

	col2.append(gif);
	col22.append(parr2);
	row2
		.append(col2)
		.append(col22);

	contentbutton1
		.append(circle1)
		.append(text1);

	contentbutton2
		.append(circle2)
		.append(text2);

	col3.append(contentbutton1);
	col33.append(contentbutton2);
	row3
		.append(col3)
		.append(col33);

	containerInferior
		.append(row1)
		.append(row2)
		.append(row3);


	containerImg.append(smile);
	wrap
		.append(containerImg)
		.append(titulo)
		.append(contentSubtitulo);

	contentSubtitulo
		.append(eye)
		.append(subtitulo);

	containerSuperior
		.append(config)
		.append(wrap);

	section
		.append(containerSuperior)
		.append(containerInferior);

	return section;
}
