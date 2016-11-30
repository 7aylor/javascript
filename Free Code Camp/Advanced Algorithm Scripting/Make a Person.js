var Person = function(firstAndLast) {
  //get just the first name
  this.getFirstName = function(){
    return firstAndLast.substring(0, firstAndLast.indexOf(' '));
  };
  //get just the last name
  this.getLastName = function(){
    return firstAndLast.substring(firstAndLast.indexOf(' ') + 1,
                                    firstAndLast.length);
  };
  //get the full name
  this.getFullName = function(){
    return firstAndLast;
  };
  //set just the first name
  this.setFirstName = function(newFirst){
    firstAndLast = newFirst + " " + firstAndLast.substring(firstAndLast.indexOf(' ') + 1,
                                    firstAndLast.length);
  };
  //set just the last name
  this.setLastName = function(newLast){
    firstAndLast = firstAndLast.substring(0,firstAndLast.indexOf(' ') + 1) + newLast;
  };
  //set the full name
  this.setFullName = function(newFull){
    firstAndLast = newFull;
  };
};


var bob = new Person("Bob Ross");
