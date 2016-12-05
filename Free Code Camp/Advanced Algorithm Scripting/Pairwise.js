
function pairwise(arr, arg) {
  //if arr is empty, return 0 since there would be no pairs
  if(arr.length === 0){
    return 0;
  }
  
  //hold our indexes whose values add up to arg
  var index = [];
  
  //loop through the array
  for(var i = 0; i < arr.length; i++){
    //loop through array again to see if we have a pair
    for(var j = 0; j < arr.length; j++){
      //make sure we aren't looking at the same index in arr and that those indexes haven't 
      //been added to index already
      if(j !== i && !index.includes(j) && !index.includes(i)){
        //if their sum is arg, add them to the array
        if(arr[i] + arr[j] === arg){
          index.push(i);
          index.push(j);
        }
      }
    }
  }
  
  //return the sum of all the indexes of pairs
  return index.reduce(function(a, b){ return a + b;});
}

pairwise([], 100);
