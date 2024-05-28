let caio = 'eu';
let carro = 'oito';
let egito = 'pedra';

console.log(`${caio} ${carro}${egito}`)

const num1 = 10;
const num2 = 3;

console.log(num1 / num2);
console.log(num1 % num2);

let contador = -16;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;

console.log(contador)

const passo = 2;
let marca = 0;
marca = marca + passo;
console.log(marca)
marca = marca + passo;
console.log(marca)
marca = marca + passo;
console.log(marca)

console.log(caio);

marca += passo;
console.log(marca);

marca += 100;
console.log(marca);

marca *= 2;
console.log(marca);

marca /= 2;
console.log(marca);

marca **= 4;
console.log(marca);

const salario1 = 1000;
const salario2 = '1200'
console.log(salario1 + salario2);

const salario3 = 1000;
const salario4 = parseInt('1200');
console.log(salario3 + salario4);

// parseInt é usado pra fazer uma string virar um number

const salario5 = 1000
const salario6 = parseInt('1200.555');
console.log(salario5 + salario6);

// o parseInt não leva em consideração casas decimais, pra isso se usa o parseFloat

const salario7 = 1000
const salario8 = parseFloat('1200.555');
console.log(salario7 + salario8);

// Number (com letra maiúscula) é o melhor, que já entende o que é e resolve melhor que parseInt e parseFloat

const salario9 = 1000
const salario10 = Number('1200.555');
console.log(salario9 + salario10);
