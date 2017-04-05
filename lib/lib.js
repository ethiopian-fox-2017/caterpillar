
let obj = {

  isEmpty: (param)=> {
    if(Array.isArray(param)){
      let length = param.reduce((acc, val, index)=> { return index + 1 }, 0)
      return length <= 0 ? true : false
    } else {
      return 'Not an array'
    }
  },

  count: (param)=> {
    if(Array.isArray(param)){
      return param.reduce((acc, val, index)=> { return index + 1 }, 0)
    } else {
      return 'Not an array'
    }
  },

  head: (param)=> {
    if(Array.isArray(param)){
      let theHead = param.filter((val, index)=> { return index <= 0 })
      return theHead
    } else {
      return 'Not an array'
    }
  },

  tail: (param)=> {
    if(Array.isArray(param)){
      let tails = param.filter((val, index)=> { return index > 0 })
      return tails
    } else {
      return 'Not an array'
    }
  },

  flatten: (param)=> {
    if(Array.isArray(param)){
      return param.reduce((acc, val)=> { return acc.concat(Array.isArray(val) ? obj.flatten(val) : val) }, [])
    } else {
      return 'Not an array'
    }
  }
}

module.exports = obj