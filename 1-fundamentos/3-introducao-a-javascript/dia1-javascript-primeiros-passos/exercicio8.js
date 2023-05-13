/* Há um par entre nós
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

Bônus: use somente um if. */

const a = 15;
const b = 22;
const c = 489;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    isEven = true;
};
console.log(isEven);

