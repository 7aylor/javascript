function uniteUnique(arr) {
  //keep track of unique numbers
  var unique = [];
  
  //loop through arugments
  for (var i = 0; i < arguments.length; i++) {
    
    //loop through current array in arguments
    for (var j = 0; j < arguments[i].length; j++) {

      //make sure the current value is not in unique, otherwise add it
      if (!unique.includes(arguments[i][j])){
        unique.push(arguments[i][j]);
      }
    }
  }
  
  //return unique numbers array
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
