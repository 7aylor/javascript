
function sumFibs(num) {
  //first num in series
  var first = 1;
  
  //second num in series
  var second = 1;

  //helps move first and second 
  var sum = 0;
  
  //sum of only odds fib nums
  var oddSum = 1;
  
  //while the next number is less than num, progress the 
  //series and add the sum nums onto oddSum
  while(second <= num){
    sum = first + second;
    first = second;
    second = sum;
    if(first % 2 === 1){
      oddSum += first;
    }
  }
  
  //return sum of odd fib nums
  return oddSum;
}

sumFibs(75025);
