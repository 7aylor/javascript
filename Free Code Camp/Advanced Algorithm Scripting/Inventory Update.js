function updateInventory(arr1, arr2) {
  //sort function to sort array by name of inventory
  function sortArr(a,b){
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
  }
  
  //loop through items in arr2, if arr1 contains the item, add the number in arr2 to arr1,
  //if arr1 doesn't have the item, add the item and number from arr2
  arr2.forEach(function(inv){
    
    //loop through all of arr1 and check if item is there. If it is, add their count and return
    for(var i = 0; i < arr1.length; i++){
      if(arr1[i].includes(inv[1])){
        arr1[i][0] += inv[0];
        return;
      }
    }
    
    //otherwise, the item isn't in arr1, so add it to arr1
    arr1.push(inv);
  });
  
  //sort the updated array and return it
  return arr1.sort(sortArr);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
