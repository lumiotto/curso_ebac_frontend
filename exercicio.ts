// Utilizando o TypeScript e a tipagem escreva duas funções:
// uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles

function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}
const resultado = multiplicar(2, 3);
console.log("Resultado da multiplicação:", resultado);

// e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome

function dizOla(nome: string): string {
    return `Olá ${nome}`;
}
const mensagem = dizOla("Luiza");
console.log(mensagem);