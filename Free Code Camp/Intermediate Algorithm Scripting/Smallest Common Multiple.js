
function smallestCommons(arr) {
  //sort array to be smallest to largest
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  
  //array the holds all values between arr[0] and arr[1] inclusive
  var fullArr = [];
  
  //add all values between arr[0] and arr[1] inclusive
  for(var i = arr[0]; i <= arr[1]; i++){
    fullArr.push(i);
  }
  
  //set the smallestCommonMult value to the largest item
  var smallestCommonMult = arr[1];
  
  //we haven't found the number, so set to false
  var foundNum = false;
  
  //while we haven't found the number
  while(foundNum === false){
    //loop through the array of numbers and check if they are all multiples of smallestCommonMult
    for(i = arr[0]; i <= arr[1]; i++){
      
      //if the current num in the array is not a multiple, break the loop
      if(smallestCommonMult % i !== 0){
        foundNum = false;
        break;
      }
      //if we have if the largest value in the array, we found the numbers
      else if(i === arr[1]){
        foundNum = true;
      }
    }
    
    //if we haven't found the number and smallestCommonMult is even, increase by 2, otherwise increase by 1
    if(foundNum === false){
      if(smallestCommonMult % 2 === 0)
        smallestCommonMult+=2;
      else
        smallestCommonMult++;
    }
  }
  
  //return our found smallest common multiple
  return smallestCommonMult;
  
}


smallestCommons([23, 18]);
