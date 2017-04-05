var x = require('./lib/code')

console.log(x.show([1,2,3])); // return [1,2,3]

console.log(x.isEmpty([])); // return true
console.log(x.isEmpty([1,2,3])); // return false

console.log(x.count([])); // return 0
console.log(x.count([1,2,3])); // return 3

console.log(x.head([1,2,3])); // return 1
console.log(x.head([4,5,7])); // return 4

console.log(x.tail([1,2,3])); // return [2,3]
console.log(x.tail([2,3])) // return [3]

console.log(x.flatten([1, [2, 3], 4, [5, [6, 7]]])); // return [ 1, 2, 3, 4, 5, 6, 7 ]
