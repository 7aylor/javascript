
function addTogether() {
  //function to check if the argument is a number
  var checkNumber = function(num){
    if(typeof(num) !== 'number'){
      return undefined;
    }
    else{
      return num;
    }
  };
  
  //if there are more than one argument, check them and if they aren't undefined, return their sum
  if(arguments.length > 1){
    var firstNum = checkNumber(arguments[0]);
    var secNum = checkNumber(arguments[1]);
    if(firstNum === undefined || secNum === undefined){
      return undefined;
    }
    else{
      return firstNum + secNum;
    }
    
  }
  
  //if there is one argument, get another argument and if neither are undefined, return their sum
  else{
    var num1 = arguments[0];
    if(checkNumber(num1)){
      return function(num2){
        if(num1 === undefined || checkNumber(num2) === undefined){
          return undefined;
        }
        else{
          return num1 + num2;
        }
      };
    }
  }
}

addTogether(2,3);