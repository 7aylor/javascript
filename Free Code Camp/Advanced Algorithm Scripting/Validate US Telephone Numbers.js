
function telephoneCheck(str) {
  
  //regex to meet the phone number format criteria
  var checkFormat = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  
  //test if str matches our phone number format and return true or false
  return checkFormat.test(str);
}

telephoneCheck("555-555-5555");