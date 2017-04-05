'use strict'

let isEmpty = function(array){
  // let sum = array.reduce(function(acc, val) {
  //   if(typeof val === 'undefined') return acc + 0;
  //   return acc + 1;
  // }, 0);

  // let sum = array.reduce(function (tmp, val){
  //   return tmp+1;
  // }, 0);

  if(count(array) == 0) return true;
  return false;

}

let count = function(array){
  return array.reduce(function (tmp, val){
    return tmp+1;
  }, 0);
}

let head = (array)=>{
  if(isEmpty(array)) return "Array is empty";
  let result = array.reduce(function (tmp, val, index){
    if(index == 0){
      tmp = val;
    }
    return tmp;
  }, '');
  return result;
}

let tail = function(array){
  if(isEmpty(array)) return "Array is empty";
  let result = array.reduce((tmp,val)=>{
    if(tmp[0] == 0) tmp[0] += 1;
    else tmp[1].push(val);
    return tmp
  }, [0,[]]);
  return result[1];
}

let flatten = arr => arr.reduce(
  (tmp, val) => tmp.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);


module.exports = {
  isEmpty,
  count,
  head,
  tail,
  flatten
}
