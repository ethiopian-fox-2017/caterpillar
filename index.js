'use strict'

let controller = require('./lib/controller');


console.log(controller.isEmpty([]));
console.log(controller.isEmpty([1,2,3]));
console.log(controller.count([]));
console.log(controller.count([1,2,3]));
console.log(controller.head([1,2,3]));
console.log(controller.head([4,5,7]));
console.log(controller.tail([1,2,3]));
console.log(controller.tail([2,3]));
console.log(controller.flatten([1, [2,3],4,[5,[6,7]]]));
