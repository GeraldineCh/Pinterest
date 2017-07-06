(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])