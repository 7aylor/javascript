
function bouncer(arr) {
  //return values that aren't false, null, 0, "", underfined, or NaN.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
