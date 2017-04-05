let counter = 0;

let isEmpty = (arr) => {
  arr.map((x) => {
    counter += 1;
  })
  if(counter > 0) {
    return false
  }else {
    return true
  }
}

module.exports = isEmpty;
