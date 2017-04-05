function isEmpty(array) {
  // return array[0] == undefined
  return array.reduce((length) => length + 1, 0) == 0
}

console.log('isEmpty ---')
console.log(isEmpty([])) // return true
console.log(isEmpty([0, 1, 2, 3])) // return false
console.log('isEmpty ---')
console.log('')

function count(array) {
  return array.reduce((length) => length + 1, 0)
}

console.log('count ---')
console.log(count([])) // return 0
console.log(count([1, 2, 3])) // return 3
console.log('count ---')
console.log('')

function head(array) {
  // return array[0]
  // return array.filter((value, index) => index == 0)
  return array.reduce((result, value, index) => {
    if (index == 0) result = value
    return result
  })
}

console.log('head ---')
console.log(head([1, 2, 3])) // return 1
console.log(head([4, 5, 6])) // return 4
console.log('head ---')
console.log('')

function tail(array) {
  // return array.reduce((result, value, index) => {
  //   if (index !== 0) result.push(value)
  //   return result
  // }, [])
  return array.filter((value, index) => index !== 0)
}

console.log('tail ---')
console.log(tail([1, 2, 3])) // return [2, 3]
console.log(tail([2, 3])) // return [3]
console.log('tail ---')
console.log('')

function flatten(array) {
  return array.reduce((result, value) => {
    if (Array.isArray(value)) {
      return result.concat(flatten(value))
    } else {
      return result.concat(value)
    }
  }, [])
}

console.log('flatten ---')
console.log(flatten([1, [2, 3], 4, [5, [6, 7]]])) // return [1, 2, 3 ,4, 5, 6, 7]
console.log('flatten ---')