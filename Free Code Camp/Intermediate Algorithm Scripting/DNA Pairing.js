
function pairElement(str) {
  //DNA pairs
  var pairs = [];
  
  //loop through string and check values. Match the value to its pair and add that as an array to pairs
  for(var i = 0; i < str.length; i++){
    switch (str[i]){
      case "G":
        pairs.push(["G","C"]);
        break;
      case "C":
        pairs.push(["C","G"]);
        break;
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
    }
  }
  
  //returb the array of pair arrays
  return pairs;
}

pairElement("ATCGA");
