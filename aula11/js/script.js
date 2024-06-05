/**
 * alert('Com a nossa mensagem.');
 * mostra um alerta
 * confirm('Deseja mesmo apagar?');
 * opção Ok ou Cancelar e retorna boolean true ou false
 * prompt('Escreva seu nome');
 * abre caixa pra escrever e retorna o que foi escrito
**/

let num1 = prompt('Digite um número');
let num2 = prompt('Digite um número');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado foi ${num1 + num2}`);

/* numa template string ${} você pode colocar a conta pra fazer ao invés de colocar a conta numa const ou let, igual fiz aqui */