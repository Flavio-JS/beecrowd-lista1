var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = (lines.shift()); //nome vendedor
let b = parseFloat(lines.shift()); //salario
let c = parseFloat(lines.shift()); //total em vendas em dineiro

c = c*15/100;

let total = b+c;

console.log("TOTAL = R$ "+total.toFixed(2));