
function largestOfFour(arr) {
  // You can do this!
  
  //array with biggest numbers from each array
  var biggestArr = [];
  
  //loop through each array and get the biggest number of each array, then put it in biggestArr
  for(var i = 0; i < 4; i++){
    var biggestNum = 0;
    for(var j = 0; j < 4; j++){
      
      if(arr[i][j] > biggestNum){
        biggestNum = arr[i][j];
      }
    }
    
    biggestArr.push(biggestNum);
  }
  //return biggestArr
  return biggestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
