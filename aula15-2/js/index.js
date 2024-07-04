let numero = prompt('Digite um número:');
let numeroConvertido = Number(numero);

let numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

let raizQuadrada = document.getElementById('raiz-quadrada');
raizQuadrada.innerHTML = (numero ** 0.5);

let eInteiro = document.getElementById('e-inteiro');
eInteiro.innerHTML = Number.isInteger(numeroConvertido);

let eNaN = document.getElementById('e-nan');
eNaN.innerHTML = Number.isNaN(numero);

let arredondandoParaBaixo = document.getElementById('arredondando-para-baixo');
arredondandoParaBaixo.innerHTML = Math.floor(numeroConvertido);

let arredondandoParaCima = document.getElementById('arredondando-para-cima');
arredondandoParaCima.innerHTML = Math.ceil(numeroConvertido);

let