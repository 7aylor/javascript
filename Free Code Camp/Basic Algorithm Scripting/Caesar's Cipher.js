
function rot13(str) { // LBH QVQ VG!
  
  //new array
  var arr = [];
  
  //loop through string
  for(var i = 0; i < str.length; i++){
    //convert to unicode value
    var charVal = str[i].charCodeAt();

    //if value is between 65 and 77 inclusive, shift it 13, then add to arr
    if(charVal >= 65 && charVal <= 77){
      arr.push(String.fromCharCode(charVal + 13));
    }
    //if its greater than 77, ie N or greater, wrap around alphabest
    else if(charVal > 77){
      arr.push(String.fromCharCode(65 + (13 - (91 - charVal))));
    }
    //otherwise its puncuation/special character so push it to arr
    else{
      arr.push(str[i]);
    }
  }
  
  //join arr back together and return
  return arr.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
