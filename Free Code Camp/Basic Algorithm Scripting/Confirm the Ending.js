
function confirmEnding(str, target) {
  //get last part of string of str
  var lastPart = str.substr(str.length - target.length, target.length);
  
  //check if its equal to target. If it is, return true, otherwise false
  if(lastPart === target){
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("Bastian", "n");
