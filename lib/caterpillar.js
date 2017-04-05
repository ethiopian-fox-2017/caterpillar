var isEmpty = arr => {
  let hasil = arr.reduce((temp,init) => {
    return temp+init;
  },0)
  if(hasil == 0){return true}
  else{return false}
}

var count = arr => {
  return arr.reduce((temp,init) => {
    if(typeof init === "number"){return temp+1}
  },0)
}

var head = arr => {
  return arr.find((val) => {
    return arr.indexOf(val) === 0
  })
}

var tail = arr => {
  return arr.filter((val) => {
    return arr.indexOf(val) !== 0
  })
}

var flatten = arr => arr.reduce(
  (arrtemp, val) => arrtemp.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

module.exports = {isEmpty,count,head,tail,flatten}
