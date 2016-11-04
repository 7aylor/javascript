
function palindrome(str) {
  // Good luck!
  
  //convert string to lower case and get rid of all non-letter/numbers
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g, '');

  //loop through string and if the next from the left and previos from the right 
  //don't match, return false, otherwise its a palindrome.
  for(var i = 0; i < ((str.length - 1) / 2); i++){
    if(str[i] !== str[str.length - i - 1]){
      return false;
    }
  }
  return true;
}

palindrome("eyeusfghfgh");
