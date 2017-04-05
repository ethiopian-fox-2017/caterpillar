module.exports = {
    isEmpety: function(arr) {
        let a = arr.reduce(function(val, x) {
            return val + 1
        }, 0)
        if (a == 0) {
            return true
        } else {
            return false
        }
    },
    count:function(arr){
      return arr.reduce(function(acc,x){
         return acc+1;
      },0)
    },
    tail:function(arr){
      return arr.slice(1)
    },
    head:function(arr){
      return arr[0];
    },
    flaten :function (arr,newarr=[]){
      let self=this;
      arr.map(function(x){
        if (x[0]) {
          self.flaten(x,newarr)

        } else {
          newarr.push(x)
        }
      })
      return newarr
    }


}
