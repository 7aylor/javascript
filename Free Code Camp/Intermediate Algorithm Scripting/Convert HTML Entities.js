function convertHTML(str) {
  //replace all &, <, >, ", ' with their html entity using regular expression
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

convertHTML("Dolce & Gabbana");
