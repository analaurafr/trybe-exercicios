/* 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

Bônus: use somente um if. */

const a = 3;
const b = 6;
const c = 2;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    isOdd = true;
};
console.log(isOdd);