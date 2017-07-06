'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
  const button   =$('<button type="button"  name="button" data-toggle="modal" data-target="#myModal">Modal</button>');
    wrapper.append(Header());
    wrapper.append(Down());
    wrapper.append(titlePage());
	  wrapper.append(button);
		button.on( "click", function() {
				 wrapper.append(detailModal(state.board ,update));
		 });

	root.append(wrapper);
}

const state = {
	board: null,
	image: null
};

const update = function (){
  render(root);
};

$(function() {
	$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYW4sy910pu7ohi4cnh-uVMtuu1KFM4wh-qaii5EIvFbYaA__gAAAAA&fields=id%2Clink%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Cnote%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage", function (data) {
		state.board = data;
		const root = $('.root');
		render(root);
	});
});
