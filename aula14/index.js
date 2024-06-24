let num1 = 10; //number
let num2 = 2.5; //number

// pra fazer um number virar uma string você adiciona um .toString() na frente dele na hora da operação, o que o torna temporariamente uma string, mas não altera a variável original

console.log(num1.toString() + num2.toString());
console.log(typeof(num1));

// pra alterar o valor da variável permanentemente de number pra string, faz assim:

num1 = num1.toString();
console.log(typeof(num1));

// pra ver a versão binária do número, é só inserir um 2 dentro dos parênteses do .toString

let num3 = 895;
console.log(num3.toString(2));

// o .toFixed estipula quantas casas decimais serão exibidas

let num4 = 18.9384639568;
console.log(num4.toFixed(4));
console.log(num4.toFixed(2));

// o Number.isInterger() mostra se é inteiro ou não com true ou false

let num5 = 8;
let num6 = 3.3;
console.log(Number.isInteger(num5));
console.log(Number.isInteger(num6));

// para saber se o resultado é um NaN (not a number), usa-se o Number.isNaN()
let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp));

let yupi = num1 * 5;
console.log(Number.isNaN(yupi));

let lalala = '5';
console.log(typeof(lalala));
lalala = Number('5');
console.log(typeof(lalala));

// O padrão de contas do Javascript é no padrão IEEE 754-2008, que possui imprecisões

let numA = 0.7;
let numB = 0.1;

console.log(numA + numB);

numA += numB; // ou seja, numA = numA + numB

console.log(numA);

numA += numB;
numA += numB;

console.log(numA);

// quando usa o toFixed, que seria pra mostrar um número limitados de caracteres depois do ".", ele já fica em 1.0

console.log(numA.toFixed(2));

// apesar de ter casas decimais (zero) depois do ponto, um 1.00 seria considerado um número inteiro, mas se usamos o número acima, que virou 1.00 depois do toFixed, ele mostra como não sendo inteiro

let um = 1.00

console.log(Number.isInteger(um));
console.log(Number.isInteger(numA));

num1 = parseFloat(num1);
