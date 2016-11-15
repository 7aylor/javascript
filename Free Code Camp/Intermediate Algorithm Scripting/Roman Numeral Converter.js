//
function convertToRoman(num) {
  
  //array of roman numerals up to 1000, and their decimal counterparts
  var romNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX','V', 'IV', 'I'];
  var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  //string to store converted decimal number in roman numerals
  var romString = '';
  
  //loop through decimal array
  for(var i = 0; i < dec.length; i++){
    
    //while num is greater than our current place in dec array
    while(dec[i] <= num){
      
      //add the corresponding roman numeral to romString
      //and decriment num by the current value of dec array.
      romString += romNum[i];
      num -= dec[i];
    }
  }
 
  //return the converted string
  return romString;
}

convertToRoman(12);
