let func=require('./lib/function');

 //is empety
 console.log(func.isEmpety([1]));
//count
 console.log(func.count([1,2,4]));
 //tain
console.log(func.tail([1,2,4]));

// flaten

console.log(func.flaten([1,[1,2],[1,[1,2,[1,2]]]]));
