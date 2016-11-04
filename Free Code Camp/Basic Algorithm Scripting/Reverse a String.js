
function reverseString(str) {
  var strArr = [];
  strArr = str.split('');
  strArr = strArr.reverse();
  str = strArr.join('');
  return str;
}

reverseString("hello");
