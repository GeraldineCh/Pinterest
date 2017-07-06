'use strict';

const render = (root) => {
	root.empty();
	console.log("Entro al render");
	const wrapper = $('<div class="wrapper"></div>');
 
    const update = function () {
     render(root);
    }
    
    wrapper.append(Header());
    wrapper.append(Down());
    wrapper.append(titlePage());
	root.append(wrapper);
}

const state = {
	board: null,
	image: null
};

$(_ => {
 getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYW4sy910pu7ohi4cnh-uVMtuu1KFM4wh-qaii5EIvFbYaA__gAAAAA&fields=id%2Clink%2Curl%2Cmedia%2Cattribution%2Cboard%2Cmetadata%2Ccolor%2Cnote%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage', (err,data) => {
  if(err){return alert(err.message);}
  state.board = data.data
  
  const root = $('#root')
  render(root)
 });
});