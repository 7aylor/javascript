
function slasher(arr, howMany) {
  //if slash by 0, return arr
  if(howMany <= 0){
    return arr;
  }
  //if slash by arr.length or more, return empty arr
  else if(howMany >= arr.length){
    return [];
  }
  //otherwise, find index of arr by subtracting the difference of length and howMany by 
  //the total length of arr, and go up to last element of arr
  else{
    return arr.splice(arr.length - (arr.length - howMany), arr.length - 1);
  }
  
}

slasher(["burgers", "fries", "shake"], 1);
