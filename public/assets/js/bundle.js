(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function render(root) {
	root.empty();
	console.log("Entro al RendeASDASDSAD");
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

},{}]},{},[1])