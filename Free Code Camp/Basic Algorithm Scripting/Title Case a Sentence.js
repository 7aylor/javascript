
function titleCase(str) {
  var arr = str.split(' ');
  
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  
  str = arr.join(' ');
  
  return str;
}

titleCase("I'm a little tea pot");
