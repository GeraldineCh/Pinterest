'use strict';

function Pantalla5 (update) {
	var section =  $('<section class="containerScreen bg-amarillo"></section>');
	var contenedor =  $('<div class="containerSuccess"></div>');
	var img = $('<img class="responsive-img imgCheck" src="assets/img/icons/check.png" alt="">');
	var titulo1 = $('<h5 class="center text-morado">¡Bien!</h5>');
	var subtitulo = $('<h5 class="center text-morado">Ahora puedes usar Yape</h5>');

	contenedor
		.append(img)
		.append(titulo1)
		.append(subtitulo);

	section.append(contenedor);
	setTimeout(function () {
		state.screen = "pantalla6";
		update();

	},3000);
	return section;
}

