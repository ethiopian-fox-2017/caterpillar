function isEmpty(arr){
  let count = 0;
  arr.map((val) => {
    count += 1;
  })
  return (count == 0) ? true : false;
}

// console.log(isEmpty([]));
// console.log(isEmpty([1,2,3]));

function count(arr){
  let result = arr.reduce((ind, val, index, array) => {
    return index + 1;
  },0);
  return result;
}

// console.log(count([]));
// console.log(count([1,2,3]));

function head(arr){
  let result = arr.filter((val, index) => {
    if (index == 0) {
      return true;
    }else {
      return false;
    }
  })
  return result;
}

// console.log(head([1, 2, 3]));
// console.log(head([4, 5, 7]));

function tail(arr){
  let result = arr.filter((val, index) => {
    if (index > 0) {
      return true;
    }else {
      return false;
    }
  })
  return result;
}

// console.log(tail([1, 2, 3]));
// console.log(tail([2,3]));

function flatten(arr){
  let result = arr.reduce((acc, value, index, array) => {
    return acc.concat(Array.isArray(value) ? flatten(value) : value);
  },[])
  return result;
}
console.log(flatten([1, [2, 3], 4, [5, [6, 7]]]));
