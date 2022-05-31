var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift()); //numero funcionario
let b = parseInt(lines.shift()); //hrs trabalhadas
let c = parseFloat(lines.shift()); //valor que recebe por hora

let salario = b*c;

console.log("NUMBER = "+a+"\n"+"SALARY = U$ "+salario.toFixed(2));