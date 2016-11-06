function destroyer(arr) {
  //get array of arguments
  var args = Array.from(arguments);
  
  //shift args to not count first element
  args.shift();
  
  //filter out elements in arr that are also in args
  return arr.filter(function(element) {
    return args.indexOf(element) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
