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

