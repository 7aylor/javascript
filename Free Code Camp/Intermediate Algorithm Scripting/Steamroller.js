function steamrollArray(arr) {
  //stores only nums
  var flattened = [];
  
  //function to flatten the arrays into just nums
  var flatten = function(val){
    //if current value is just a numb, add it to flattened
    if(!Array.isArray(val)){
      flattened.push(val);
    }
    //otherwise, loop through the array and flatten it
    else{
      for(var arg in val){
        flatten(val[arg]);
      }
    }
  };
  
  //for each value in arr, flatten it
  arr.forEach(flatten);
  
  //return flattened array
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
