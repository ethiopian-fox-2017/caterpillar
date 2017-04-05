// is Empty

let isEmpty = (arr) => {
  return !arr[0] ? true : false
}

//count
let count = (arr, counter=0) => {
  return isEmpty(arr) ? counter : count(arr.slice(1), counter+1)
}

//head
let head = (input) => {
  return input[0]
}

//tail
let tail = (arr) =>{
  return arr.slice(1)
}

//flatten
let flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

console.log(isEmpty([])); //return true
console.log((isEmpty([1, 2, 3]))); //return false
console.log(count([])); //return true
console.log((count([1, 2, 3]))); //return false
console.log((head([1,2,3]))); //return 1
console.log((head([4,5,7])));//return 4
console.log((tail([1,2,3]))); //return 2, 3
console.log((tail([4,5,7])));//return 5, 7
console.log((flatten([1, [2, 3], 4, [5, [6, 7]]])));
