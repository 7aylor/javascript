
function truthCheck(collection, pre) {
  // check every object in collection to see that is has the pro property and that the pre property is truthy
  return collection.every(function(obj){
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  });

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
