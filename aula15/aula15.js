let  num1 = 9.8731

// Math.floor() arredonda o número para baixo

let num2 = Math.floor(num1);

// Math.ceil() arredonda o número para cima

let num3 = Math.ceil(num1);

console.log(num1);
console.log(num2);
console.log(num3);

// o "round" arredonda pra cima de passar da metade e pra baixo se for menos da metade

let num4 = 4.4654
let num5 = Math.round(num4);
console.log(num4);
console.log(num5);


let num6 = 4.6292
let num7 = Math.round(num6);
console.log(num6);
console.log(num7);

// Math.max mostra o maior númmero de uma sequência

console.log(Math.max(3, 1, 543, 9000, 2.5, 88));

// Math.mon mostra o menor

console.log(Math.min(717, 829, 44444, -101, 1.5, 18, -3, 30));

// Math.random gera um número aleatório entre 0 e 1, mas 1 não está incluído 0 nem 1

console.log(Math.random());

aleatorio = Math.random() * 5 + 5;
console.log(aleatorio);

// pra arredondar isso:

aleatorio = Math.round(aleatorio);
console.log(aleatorio);

// PI

console.log(Math.PI);

// pra potência tem o Math.pow ou usar dois *

console.log(Math.pow(2, 10));
console.log(2 ** 10);

// pra raíz quadrada você eleva o número pela metade dele com (1/2) ou 0.5

console.log(num1 ** (1/2));
console.log(num1 ** 0.5);

// em Javascript você pode dividir um número por zero, não dá erro e o resultado é Infinity e true

console.log(100/0);

