'use strict'
var isEmpty = require('./lib/isEmpty.js');
var count = require('./lib/count.js');
var head = require('./lib/head.js');
var tail = require('./lib/tail.js');
var flatten = require('./lib/flatten.js');

let arr1 = [1, 2, 3, 4];
let list1 = [[0,1], [2,3], [4,5]];
let list2 = [0, [1, [2, [3, [4, [5]] ]]]];
 
console.log(flatten(list2));