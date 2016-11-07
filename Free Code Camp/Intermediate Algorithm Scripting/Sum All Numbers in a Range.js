
function sumAll(arr) {
  
  //loop through arr and add values in between min and max vals
  for(var i = Math.min(...arr) + 1; i < Math.max(...arr); i++){
    arr.push(i);
  }
  
  //reduce arr to one number which is the sum of all numbers
  return arr.reduce(function(a, b){ return a + b;});
}

sumAll([1, 4]);
