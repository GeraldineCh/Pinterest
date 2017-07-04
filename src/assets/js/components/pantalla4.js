'use strict';

function Pantalla4 (update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/lockone.png" alt="">');
	var contentText =  $('<div class=""></div>');
	var titulo = $('<h2 class="title center">Crea tu usuario Yape</h2>');
	var text = $('<p class="center">Ingresa un nombre, email y clave de usuario.</p>');
	var form = $('<form id="datos" action=""></form>');
	var name = $('<input class="bg-image" id="user-name" type="text" placeholder="Nombre">');
	var email = $('<input class="bg-image" id="user-email" type="email" placeholder="correo@ejemplo.com">');
	var password = $('<input class="bg-image" id="user-password" type="password" placeholder="Ingresa clave de 6 dígitos">');
	var messageForm = $('<span>Cuida esta clave como oro, es tu acceso a Yape</span>')
	var btn = $('<button type="submit" class="btn btn-small disabled" id="btn">Crear cuenta</button>');
	var patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
	containerImg.append(img);
	contentText
		.append(titulo)
		.append(text);
	form
		.append(name)
		.append(email)
		.append(password)
		.append(messageForm)
		.append(btn);
	section
		.append(containerImg)
		.append(contentText)
		.append(form);
	
	password.on('keyup',function (e) {
		e.preventDefault();
		console.log(email.val());
		if(patronEmail.test(email.val()) &&  name.val()!="" && password.val().length == 6){
			btn.removeClass('disabled');
		}else{
			btn.addClass('disabled');
		}
	});

	btn.on('click',function (e) {
		e.preventDefault();

		$.post('/api/createUser',{
			phone : state.phone,
			name:name.val(),
			email:email.val(),
			password:password.val()
		},function(response){
			if (response.success) {
				state.screen = "pantalla5";
				update();
				console.log(response);
			} else {
				state.screen = "pantalla4";
				update();
			}
		});
	});
	wrap.append(section);
	return wrap;
}
