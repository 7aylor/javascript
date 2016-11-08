
function fearNotLetter(str) {
  
  //missing letters arr
  var missing = [];
  
  //get num of first char
  var start = str.charCodeAt(0);
  
  //loop through string. If current char isn't the same as start number, its out of sync
  //add it to missing and move to next letter
  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) !== start){
      missing.push(String.fromCharCode(start));
      i--;
    }
    start++;
  }
  
  //if nothing in missing, no letters are missing
  if(missing.length === 0){
    return undefined;
  }
  //else, return the missing array as one string
  else{
    return missing.join(',');
  }
}

fearNotLetter("abce");
