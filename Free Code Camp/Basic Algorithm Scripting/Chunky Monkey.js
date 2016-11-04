
function chunkArrayInGroups(arr, size) {
  //mutli-dimensional array
  var mArray= [];
  
  //loop through arr in chunks of size
  for(var i = 0; i < arr.length; i += size){
    //push the size sized chunk onto the mArray
    mArray.push(arr.slice(i, i + size));
  }
  
  //return the mArray
  return mArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
