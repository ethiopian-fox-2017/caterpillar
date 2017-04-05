let x = require('./lib/caterpillar')

console.log('fungsi isEmpty -----')
console.log(x.isEmpty([]));
console.log(x.isEmpty([1,2,3]));
console.log('fungsi count -----')
console.log(x.count([]));
console.log(x.count([1,2,3]));
console.log('fungsi head ----')
console.log(x.head([1,2,3]));
console.log(x.head([4,5,7]));
console.log('fungsi tail ----')
console.log(x.tail([1,2,3]));
console.log(x.tail([2,3]));
console.log('fungsi flatten -----')
console.log(x.flatten([1, [2,3], 4, [5, [6,7]]]))
