
function findElement(arr, func) {
  //filter array with passedi in function
  arr = arr.filter(func);
  
  //return first element of array
  return arr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
