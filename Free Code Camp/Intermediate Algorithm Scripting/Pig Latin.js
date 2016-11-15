
function translatePigLatin(str) {
  
  //array of vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  //if the first character of str is a vowel, retun str + 'way'
  if(vowels.includes(str[0])){
    return str + 'way';
  }
  
  //if its a consonant, return the new word that removes the 
  //first consonant sounds, puts them on the end of the word, plus 'ay'
  else{
    var index;
    for(var i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        index = i;
        break;
      }
    }
    var newWord = str.substr(index, str.length-1) + str.substr(0, index) + 'ay';
    return newWord;
  }
}

translatePigLatin("consonant");
