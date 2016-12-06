
function makeFriendlyDates(arr) {

  var months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
  
  //convert string to date object
  function convertToDate(str){
    var dateNums = str.split('-');
    return (new Date(Date.UTC(dateNums[0], dateNums[1] - 1, dateNums[2])));
  }
  
  //adds the correct ending to day
  function setEnding(day){
    switch (day){
      case 1:
      case 21:
      case 31:
        return day + "st";
      case 2:
      case 22:
        return day + "nd";
      case 3:
      case 23:
        return day + "rd";
      default:
        return day + "th";
    }
  }
  
  //returns the difference between the months
  function compareMonth(first, second){
    return ((second.getUTCFullYear() * 12 + second.getUTCMonth()) - 
           (first.getUTCFullYear() * 12 + first.getUTCMonth()));
  }
  
  //returns the difference between the days
  function compareDay(first, second){
    if(first.getUTCMonth() === second.getUTCMonth()){
      return (first.getUTCDate() - second.getUTCDate());
    } 
    else{
      return 0;
    }
  }
  
  
  
  function easyToReadDate(first, second){
  
    //if the dates are the same, return the month name, day with right ending, and year
    if(first.getTime() - second.getTime() === 0){
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()) +
              ", " + first.getUTCFullYear() ];
    }

    //if the month is the same
    if(compareMonth(first, second) === 0  && first.getUTCFullYear() === second.getUTCFullYear()){
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()),  
              setEnding(second.getUTCDate())];
    }
    
    //if less than a year apart, but year is different
    if(compareMonth(first, second) < 12 && first.getUTCFullYear() !== second.getUTCFullYear()){
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()),  
              months[second.getUTCMonth()] + " " + setEnding(second.getUTCDate())];
    }
    
    //if one year apart, but different days
    if(compareMonth(first, second) <= 12 && compareDay(first, second) > 0){
      
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()) + 
              ", " + first.getUTCFullYear(),  months[second.getUTCMonth()] + 
              " " + setEnding(second.getUTCDate())];
    }
    
    //if months are different but same year
    if(compareMonth(first, second) < 12 ){
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()) +
              ", " + first.getUTCFullYear(), months[second.getUTCMonth()] + " " +
              setEnding(second.getUTCDate())];
    }
    
    //if more than a year
      return [months[first.getUTCMonth()] + " " + setEnding(first.getUTCDate()) + 
              ", " + first.getUTCFullYear(),  months[second.getUTCMonth()] + 
              " " + setEnding(second.getUTCDate())  + ", " + second.getUTCFullYear()];
  }
  
  //convert our dates provided in arr to date objects
  var beginDate = convertToDate(arr[0]);
  var endDate = convertToDate(arr[1]);
  
  //return the nicely formatted dates
  return easyToReadDate(beginDate, endDate);
  
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);
