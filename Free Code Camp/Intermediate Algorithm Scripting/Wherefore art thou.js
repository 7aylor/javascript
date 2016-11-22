function whatIsInAName(collection, source) {

  //array of hashes in source
  var hashes = Object.keys(source);
  
  //filter out the objects that don't have keys in the source hashes
  return collection.filter(function(obj){
    return hashes.every(function(key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
