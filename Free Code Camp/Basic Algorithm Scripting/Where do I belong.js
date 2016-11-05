
function getIndexToIns(arr, num) {
  //sort array with function to ensure all values are in order
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  
  //index counter
  var i = 0;
  
  //increase i until num is no longer bigger than arr[i]
  while(num > arr[i]){
    i++;
  }
  
  //return index where num should be inserted
  return i;
  
}

getIndexToIns([5, 3, 20, 3, 10], 5);
