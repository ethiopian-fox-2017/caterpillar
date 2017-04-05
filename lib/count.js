let count = (arr) => {
let length =  arr.reduce((acc,cV,index) => {
      return index + 1;
    },0)
    return length;
 }

 module.exports = count;