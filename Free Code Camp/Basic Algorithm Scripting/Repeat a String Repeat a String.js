
function repeatStringNumTimes(str, num) {
  
  //capture original str
  var orig = str;
  
  //if num is less than or equal to 0, return an empty string
  if(num <= 0){
    return "";
  }
  
  //loop up to num and add orig to str that many times
  for(var i = 1; i < num; i++){
    str += orig;
  }
  
  return str;
}

repeatStringNumTimes("abc", 3);
