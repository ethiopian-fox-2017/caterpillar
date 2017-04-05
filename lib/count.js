'use strict'

var hitung = function(arr) {
	let hasil = arr.reduce(function(acc, val) {
  	return acc + 1;
	}, 0);

	return hasil;
}

module.exports = hitung;