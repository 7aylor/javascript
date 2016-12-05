  var bills = [ 
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.

  //array of change given to customer
  var physicalChange = [];
  
  //array of only amounts of each buill in register going from pennies, nickels, dimes, etc.
  var regMoney = [];
  
  //get only amounts of money and add then to regMoney
  for(var i = 0; i < bills.length; i++){
    regMoney.push(cid[i][1]);
  }
  
  //if regMoney total is that same as our required change, we closed out the till
  if(regMoney.reduce(function(a, b){return a + b;}) === change){
    return "Closed";
  }
  
  
  //give back the change
  function biggestBill(moneyOwed){
    //loop through each type of bill or coin
    for(var i = bills.length - 1; i >= 0 ; i--){
      
      //keeps track of our current bill's name
      var currBill = bills[i][0];
      
      //keeps track of the value of our current bill
      var valueOfBill = bills[i][1];
      
      //keeps track of the amount of current bill in the register
      var amountOfBillInReg = cid[i][1];
      
      //keeps track of the number of our current bill we use
      var amountOfBillUsed = 0;
      
      //while the amount owed to the customer is greater than the value of the current bill
      //and while we still have that bill in the register
      if(moneyOwed >= valueOfBill && (valueOfBill  <= amountOfBillInReg)){
        while(moneyOwed >= valueOfBill && valueOfBill <= amountOfBillInReg){
          //use the bill, subtract that amount from moneyOwed, and decrease the amount in register
          amountOfBillUsed++;
          moneyOwed -= valueOfBill;
          
          //Javascript has some goofy rounding so this is meant to keep this a dollar figure
          moneyOwed = moneyOwed.toFixed(2);
          amountOfBillInReg -= valueOfBill;
        }
        
        //add the current bill and the amount of it we are giving to the customer to our
        //phyisicalChange array
        physicalChange.push([currBill, amountOfBillUsed * valueOfBill]);
      }
    }
    
    //return the amount of change we have left
    return moneyOwed;
  }
  
  //call biggestBill
  change = biggestBill(change);
  
  //if our change is bigger than 0 or we haven't added to the array,
  //we don't have enough money. Otherwise, return the phyiscalChange array
  if(physicalChange.length < 1 || change > 0){
      return "Insufficient Funds";
  }
  else{
    return physicalChange;
  }
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
