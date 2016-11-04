
function truncateString(str, num) {
  //if num is less than 3, go all the way up to num
  if(num <= 3){
    return str.substr(0, num) + "...";
  }
  //if num is greater than or equl to the length of str, return str
  else if(num >= str.length){
    return str;
  }
  //otherwiser, return go up to num - 3
  else{
    return str.substr(0, num-3) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
