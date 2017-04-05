let tail = (arr) => {
  var arrTail = arr.reduce(function(pV,cV,cI){
    if(cI>0){
      pV.push(cV);
    }
    return pV; // *********  Important ******
  }, []);

  return arrTail;
};


module.exports = tail;