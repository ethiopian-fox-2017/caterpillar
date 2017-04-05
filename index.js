// release 0

// 1. isEmpty
// function isEmpty1(arr) {
//   return arr >= 4
// }
// var saring = [1, 2, 3, 4, 5].filter(isEmpty)
// console.log(saring == 0);
//

function isEmpty(arr) {
  if (arr[0] !== null) {
    return true
  } else {
    return false
  }
}

console.log(isEmpty("Array kosong " + []));
console.log(isEmpty("Array dengan isi " + [null, 2, 3, 4, 5]));

function count(val) {
  return val.reduce(function(tmp, value, current, array) {
    return current + 1
  }, 0)
}

var sum = [0, 1, 2, 4]
console.log(count(sum));
console.log(count([1, 2, 3, 4]));

function head(arr) {
  return arr[0]
}
console.log(head([1, 2, 3, 4, 5]));


// tail
function tail(arr) {
  return arr.filter(function(elm, index) {
    return index
  })
}
var arr = [1, 2, 3, 4, 5]
console.log(tail(arr));

function flatten(flat) {
  return flat.reduce(function(tmp, val) {
    return tmp.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}
var flat = [1, [2, 3], 4, [5, [6, 7]]]
console.log(flatten(flat));
