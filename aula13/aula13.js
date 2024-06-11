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

let beleza = "Tenho certeza que manhã fará Um lindo dia";

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

console.log(beleza.indexOf('z', 3));

console.log(beleza.lastIndexOf('z', 3));

/**no caso acima, na frase da string "beleza", do caractere 3 até o final (da esquerda pra direita), há o "z" da palavra certeza
 * mas do caractere 3 pro início (ou seja, no comando indexOf), ele não acha a letra "z" e dá esse erro, sinalizando "-1" 
 */

console.log(beleza.match(/[a-z]/g));

// o professor colocou isso aí na aula, que são expressões regulares e eu não sei o que é, ele não explicou ainda, mas parece que o match pega as ocorrências do que foi pedida, no caso todas as letras minúsculas ("a" até "z")

console.log(beleza.search(/o/g));

// nesse caso, pedi para ele procurar o índice da ocorrência da primeira letra "o", parecido com o que faz o indiceOf, mas pro caso de expressões regulares, que eu não sei o que é

console.log(beleza.replace('certeza', 'confiança'));

console.log(beleza.replace('a', '###'));

console.log(beleza.replace(/a/g, '###'));

// substitui uma palavra por outra. no caso dessas expressões regulares, com / e com o g, consegue substituir todas da string e não só uma

console.log(beleza.length);

// mostra o número de caracteres da string, mas o caractere 0 já conta como o 1

console.log(beleza.slice(2, 5));

// pega uma fatia, um recorte da string, mas no caso acima é do 2 ao 4, o último caractere não conta, não entra

console.log(beleza.slice(3));

// só assim, ele pega uma slice a partir do carctere 3

console.log(beleza.slice(-6));

// com número negativo é como se ele pegasse o sexto número de trás pra frente, no caso, até o fim da string

console.log(beleza.slice(3, -5));

// aí usei o -5 como indicação da final da slice, 5 caracteres antes do final

console.log(beleza.split(' '));

// o split separa a string pelo caractere inserido, no caso acime foi o espaço

console.log(beleza.split('a'));

// nesse caso foi pelo a

console.log(beleza.split(' ', 3));

// agora sinalizei que queria que fizesse isso apenas 3 vezes, os três primeiros pedaços entre espaços da string

console.log(beleza.toUpperCase());

// transforma tudo em maiúsculas, e é uma função aí dentro, então por isso os parênteses com nada dentro

console.log(beleza.toLowerCase());

// deixa tudo minúsculo