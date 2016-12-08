function permAlone(str) {
  
  //keeps track of the no repeat numbers
  var noRepeat = 0;
  
  //splits string into an array by letter
  var arr = str.split('');
  
  //keeps track of all of the different sequences of a given string
  var sequences = [];
  
  //gets rid of basic test cases
  if(str.length === 0){
    return 0;
  }
  if(str.length === 1){
    return 1;
  }
  
  //checks if the string has any of the same letter next to each other. If it doesn't,
  //adds one to noRepeat
  function checkSame(sequence){
    var prev = 0;
    var curr = 1;
    
    while(sequence[prev] !== sequence[curr] && curr !== sequence.length){
      prev++;
      curr++;
    }
     
    if(curr == sequence.length){
      noRepeat++;
    }
  }
  
  //swaps two entries in the array
  function swap(a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  //generates all possible strings and adds each of the to the sequences array
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      sequences.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  
  //generate the arrays
  generate(arr.length);
  
  //check each sequence
  for(var i = 0; i < sequences.length; i++){
    checkSame(sequences[i]);
  }
  
  //return number of no repeats for each string
  return noRepeat;
}

permAlone('abcdefa');
