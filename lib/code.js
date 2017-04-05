let show = function(a) {
  return a.map(function(x){
    return x
  })
}

let isEmpty = function(a){
  let hasil = a.reduce(function(temp,val) {
    return temp + val
  }, 0)
  if(hasil == 0){
    return true
  } else {
    return false
  }
}

let count = function(a){
  let hasilcount = a.reduce(function(temp, val) {
    if(val !== 0){
      return temp + 1
    }
  }, 0)
  return hasilcount
}

let head = function(a){
  if(a[0] !== undefined){
    return a[0]
  }
}

let tail = function(a){
  let buntut = a.filter((element,index,array)=>{
    return index > 0
  })
  return buntut
}

let flatten = function(arr){
  return arr.reduce(function(acc, val){
    return acc.concat(
      Array.isArray(val) ? flatten(val) : val
    )
  }, [])
}

module.exports = {
  show,
  isEmpty,
  count,
  head,
  tail,
  flatten
}
