const process = require('process');
let arr = [];  
// Printing process.argv property value
var args = process.argv;
  
//console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    //arr.push(val);
    if (index > 1 && typeof val == 'number' && val > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      //process.stdout.write(val);
    }, val * 1000);}
});