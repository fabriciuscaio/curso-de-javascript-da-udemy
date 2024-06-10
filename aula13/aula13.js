let teste = "testando o \"uso\" de aspas";

// a barra invertida faz o código "escapar" algum sinal, igual foram com essas aspas acima 

console.log(teste);

console.log("teste \teste");

// nesse caso, ele comeu a letra "t"

let caio = "qualquer frase";

console.log(caio[0]);

console.log(caio[2]);

console.log(caio[9]);

/*índice é o nome da posição de cada caractere numa string
num console.log se você usa os colchetes quando se refere a uma string e coloca um número, ele pega a posição do caractere desse número
o primeiro caractere é o 0, o segundo é o 1, o terceiro é o 2*/

console.log(caio.charAt(0));

//mesma coisa que os colchetes

console.log(caio.concat(" é legal demais de ser falada"));

//igual concatenar usando um "+"

console.log(caio + " é legal demais de ser falada");

console.log(caio.indexOf('frase'));

let beleza = "tenho certeza que manhã fará Um lindo dia";

console.log(beleza.indexOf('fará'));

console.log(beleza.indexOf('manhã'));

console.log(beleza.indexOf('rteza'));

console.log(beleza.indexOf('Um'));


// o indexOf mostra em quando caractere inicia a palavra pedida

console.log(beleza.lastIndexOf('lindo'));

// lasIndexOf mostra a posição normal, mas pega o primeiro aparecimento da coisa analisando de trás pra frente

console.log(beleza.indexOf('n'));

console.log(beleza.lastIndexOf('n'))

console.log(beleza.lastIndexOf('dia'))

console.log(beleza.indexOf('n'));

console.log(beleza.indexOf('n', 5));

// quando coloca tipo beleza.indexOf('n', 5) significa que vai procurar o primeiro n que aparece depois da posição 5







