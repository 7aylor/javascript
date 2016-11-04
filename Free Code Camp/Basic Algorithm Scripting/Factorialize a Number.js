//use recursion to the the factorial of a given number
function factorialize(num) {
  
  //if the number is 0, return 1
  if(num == 0){
    return 1;
  }
  
  //otherwise, multiple the current number by factorialize with number - 1
  else{
    return num * factorialize(num - 1);
  }
}

factorialize(5);
