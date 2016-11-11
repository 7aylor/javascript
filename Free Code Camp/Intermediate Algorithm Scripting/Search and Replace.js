
function myReplace(str, before, after) {
  //if first letter is uppercase, make replacement first letter uppercase too
  
  //get index of before in str
  var indexOfBefore = str.indexOf(before);
  
  //if before is uppercase, make after uppcase
  if(str[indexOfBefore] === str[indexOfBefore].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  //replace before with after in the string and return
  
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
