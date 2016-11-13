function dropElements(arr, func) {
  //while arr has elements and arr[0] in func is false, shift arr, the return it
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
