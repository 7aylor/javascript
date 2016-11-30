function orbitalPeriod(arr) {
  
  //GM is the standard gravitation parameter
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  //holds array of new objects
  var objs = [];
  
  //for each obj in arr, find the orbital period and add the name of the object and the orbital period to objs
  arr.forEach(function(obj){
    var newObj ={};
    
    //add the name of the current object to newObj
    newObj.name = obj.name;
    
    //orbital period is determined by multiplying 2 times pi by the square root of average radius of the object
    //from the center of the earth (You have to add the radius of the earth and average altitude of the object 
    //together to get this) cubed, divied by GM
    newObj.orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt((Math.pow((earthRadius + obj.avgAlt), 3) / GM))));
    
    //add the newObj to objs
    objs.push(newObj);
    
  });
  
  //return the objs we have created
  return objs;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
