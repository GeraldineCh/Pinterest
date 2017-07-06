'use strict';

const Grid = () => {
	const mainContainer = $('<section class="container"></section>');
	const container = $('<div class="grid"></div>');
	state.board.forEach((element) => {
		const pin = $('<div class="item pin">' +
							'<a class="pin__upload" href="#"><span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span></a>'+
							'<a class="pin__pinear" href="#"><span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>Guardar</a>'+
							'<div class="pin__img">' +
								`<img src="${element.image.original.url}" style="width: 100%">` +
							'</div>' +
							'<div class="pin__autor">' +
								'<div>' +
									'<img class="img-circle pin__autor-arabela" src="assets/img/arabelyuska.jpg" alt="Arabela Rojas" >' +
								'</div>' +
								'<div>' +
									`<h3>${element.creator.first_name}</h3><span>${element.board.name}</span>`+
								'</div>' +
							'</div>' +
						'</div>');
		container.append(pin);

		if(element.metadata.article != undefined){
			const articleTitle = $(`<div class="pin__title"><h2>${element.metadata.article.name}</h2></div>`);
			const articleSub = $(`<div class="pin__subtitle">${element.metadata.article.description}</div>`);
			pin.append(articleTitle);
			pin.append(articleSub);
		}

		pin.mouseover((e) => {

			const upload = $( "a.pin__upload" );
			const pinear = $( "a.pin__pinear" );
			$(this).find(upload).show();
			$(this).find(pinear).show();

		});
		pin.mouseout((e) => {

			const upload = $( "a.pin__upload" );
			const pinear = $( "a.pin__pinear" );
			$(this).find(upload).hide();
			$(this).find(pinear).hide();
		});

		pin.on('click', () => {
			// .append(detailModal());
		});
		mainContainer.append(container);

  });

  return mainContainer;
}