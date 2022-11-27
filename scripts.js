let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let restoDivisao = numero1 % numero2;
let parOuImpar =
  soma % 2 == 0
    ? "A soma dos dois números é par"
    : "A soma dos dois números é impar";
let eIgual =
  numero1 == numero2 ? "Os números são iguais" : "Os números são diferentes";

alert(`A soma dos dois números é: ${soma}`);
alert(`A subtração dos dois números é: ${subtracao}`);
alert(`A multiplicacao dos dois números é: ${multiplicacao}`);
alert(`A divisao dos dois números é: ${divisao}`);
alert(`O resto da divisão é: ${restoDivisao}`);
alert(`${parOuImpar}`);
alert(`${eIgual}`);
