function sym(args) {
  var arrays = [];
  
  //get each array in arugments and add to arrays array
  for(var i = 0; i < arguments.length; i++){
    arrays.push(arguments[i]);
  }

  //get the difference of arrays
  function arrDiff(a, b){
    //holds elements not in both arrays
    var diff = [];
    
    //loop through first array, if the index is not in second array and diff, add it
    a.forEach(function(curr){
      if(b.indexOf(curr) < 0 && diff.indexOf(curr) < 0){
        diff.push(curr);
      }
    });
    
    //loop through second array, if the index is not in first array and diff, add it
    b.forEach(function(curr){
      if(a.indexOf(curr) < 0 && diff.indexOf(curr) < 0){
        diff.push(curr);
      }
    });
    
    //return difference array
    return diff;
    
  }
  
  //return reduced array of all arrays in arugments
  return arrays.reduce(arrDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);