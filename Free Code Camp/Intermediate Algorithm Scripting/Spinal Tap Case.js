
function spinalCase(str) {
  //add space in between a lowercase and uppercase letter, 
  //replace all non letters with a -, then return in lowercase
  return str.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/[_\W]/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
