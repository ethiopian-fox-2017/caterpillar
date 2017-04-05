let isEmpty = function (arr) {
  let result = arr.reduce(function(a ,b) {
    a++
    return a
  }, 0)

  return !result ? true : false
}

let count = function (arr) {
  let result = arr.reduce(function(a ,b, index) {
    return index + 1
  }, 0)

  return result
}

let head = function (arr) {
  return arr.slice(0,1)
}

let tail = function (arr) {
  return arr.slice(1)
}

let flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

let methods = {
  isEmpty,
  count,
  head,
  tail,
  flatten
}

export default methods;
