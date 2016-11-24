
function sumPrimes(num) {
  //total sum of primes
  var primeSum = 0;
  
  //current value to test
  var current = 1;
  
  //function to check prime
  var testPrime = function(n){
    if (n===1)  
    {  
      return false;  
    }  
    else if(n === 2)  
    {  
      return true;  
    }
    else  
    {  
      for(var i = 2; i < n; i++)  
      {  
        if(n % i === 0)  
        {  
          return false;  
        }  
      }  
      return true;    
    }  
  };
  
  //loop through nums from 0 through num and add them to primeSum if they are prime
  while(current <= num){
    if(testPrime(current)){
      primeSum += current;
    }
    current++;
  }
  
  //return the summed primes
  return primeSum;
}


sumPrimes(10);
