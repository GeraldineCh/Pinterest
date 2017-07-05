'use strict';

function render(root) {
	root.empty();
	console.log("Entro al render");
	const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(detailModal( _ => { render(root); }));
	root.append(wrapper);
}

var state = {
	board: null,
	image: null
};

$(function() {
	$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYW4sy910pu7ohi4cnh-uVMtuu1KFM4wh-qaii5EIvFbYaA__gAAAAA&fields=id%2Clink%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Cnote%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage", function (data) {
		console.log(data);
		state.board = data;

		const root = $('.root');
		render(root);
	});
});
