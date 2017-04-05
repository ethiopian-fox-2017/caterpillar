let flatten = (arr) => {
  var flatArr = arr.reduce((acc,cV) => {
      if (Array.isArray(cV)) {
        return acc.concat(flatten(cV));
      } else {
        return acc.concat(cV);
      }
  }, [])

  return flatArr;
}

module.exports = flatten;