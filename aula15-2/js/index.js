let numero = prompt('Digite um número:');
numero = Number(numero);

let numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

/*
let raizQuadrada = document.getElementById('raiz-quadrada');
raizQuadrada.innerHTML = (numero ** 0.5);

let eInteiro = document.getElementById('e-inteiro');
eInteiro.innerHTML = Number.isInteger(numero);

let eNaN = document.getElementById('e-nan');
eNaN.innerHTML = Number.isNaN(numero);

let arredondandoParaBaixo = document.getElementById('arredondando-para-baixo');
arredondandoParaBaixo.innerHTML = Math.floor(numero);

let arredondandoParaCima = document.getElementById('arredondando-para-cima');
arredondandoParaCima.innerHTML = Math.ceil(numero);

let duasCasasDecimais = document.getElementById('duas-casas-decimais');
duasCasasDecimais.innerHTML = numero.toFixed(2);
*/

// outro modo de fazer:

let texto = document.getElementById('texto');
texto.innerHTML = `<p>Raíz quadrada: ${numero ** 1/2}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`;