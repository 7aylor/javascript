function mutation(arr) {
  //loop through second array in the multidimensional array arr
  for(var i = 0; i < arr[1].length; i++){
    //if the first array does not include the letter at current index of array 2
    //return false
    if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
      return false;
    }
  }
  
  //otherwise return true
  return true;
}

mutation(["hello", "hey"]);
