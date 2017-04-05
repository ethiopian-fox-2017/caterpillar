'use strict'

const ratakan = arr =>  arr.reduce(
  	(acc, val) => acc.concat(
    	Array.isArray(val) ? ratakan(val) : val
  	),
  	[]
);

module.exports = ratakan;