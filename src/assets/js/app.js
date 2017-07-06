'use strict';
const root = $('.root');
const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(Down());
    wrapper.append(titlePage());
		wrapper.append(Grid(update));


		if (state.image != null) {
			console.log("imprime modal");
      wrapper.append(detailModal(state.image,update));
     }

	root.append(wrapper);
}

const update = function (){
  render(root);
};

$( function() {
	$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYW4sy910pu7ohi4cnh-uVMtuu1KFM4wh-qaii5EIvFbYaA__gAAAAA&fields=id%2Clink%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Cnote%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage", function (result) {
		state.board = result.data;
		const root = $('.root');
		render(root);
	});
});
