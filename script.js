const lib = require('./lib/lib.js')

// isEmpty
console.log('---ISEMPTY---')
console.log(lib.isEmpty([]))
console.log(lib.isEmpty(1))
console.log(lib.isEmpty([1,2,3]))
console.log('-----')
// count
console.log('---COUNT---')
console.log(lib.count([]));
console.log(lib.count([1,2,3]))
console.log('-----')
// head
console.log('---HEAD---')
console.log(lib.head([1,2,3]))
console.log(lib.head([4,5,7]))
console.log('-----')
// tail
console.log('---TAIL---')
console.log(lib.tail([1,2,3]))
console.log(lib.tail([4,5,7]))
console.log('-----')
// flatten
console.log('---FLATTEN---')
console.log(lib.flatten([1,[2,3],4,[5,[6,7]]]))
console.log('-----')