
function binaryAgent(str) {
  
  //string arguments split by spaces
  var arr = str.split(' ');
  
  //holds num values of each bit
  var dec;
  
  //holds converted binary numbers into chars
  var newStr = [];
  
  //loop through each bit and convert to char
  for(var i = 0; i < arr.length; i++){
    //get current bit
    dec = arr[i];
    
    //convert to char
    newStr.push(String.fromCharCode(parseInt(dec, 2)));
  }
  
  //return the joined array of converted chars
  return newStr.join('');
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
