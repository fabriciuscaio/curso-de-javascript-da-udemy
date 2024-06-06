/**O exercício era transformar o valor de A em B, de B em C e de C em A
 * Eu resolvi assim: 
 */

let varA = 'A';
let varB = 'B';
let varC = 'C';

let varD = 'B';
let varE = 'C';
let varF = 'A';

varA = varD;
varB = varE;
varC = varF;


console.log(varA, varB, varC);

/**Mas a resposta do professor era assim:
 * [varA, varB, varC] = [varB, varC, varA];
 */