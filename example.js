import methods from './lib/index'

const {isEmpty, count, head, tail, flatten} = methods

console.log(isEmpty([]));
console.log(count([1,2,3,5,7,3,5,3]));
console.log(head([1,2,3,4]))
console.log(tail([1,2,3,4]))
console.log(flatten([1,[2,[3]],4]))
