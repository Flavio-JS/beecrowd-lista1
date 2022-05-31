var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

let a = 3.14159;
let b = parseFloat(lines.shift());

let area = a*b*b;

let arredondamento = area.toFixed(4);

console.log("A=" + arredondamento);