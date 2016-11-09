
function diffArray(arr1, arr2) {
  
  //array to hold values that are not present in both arrays
  var newArr = [];
  
  //loop through second array, if current item is not in first array, add it to newArr
  for(var i = 0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i])){
      newArr.push(arr2[i]);
    }
  }
  //loop through first array, if current item is not in second array, add it to newArr
  for(var i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  
  return newArr;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);