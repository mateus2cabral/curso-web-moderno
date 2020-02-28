let num1 = 1
let num2 = 2

//Operador Unário PósFixado
num1++
console.log(num1)

// Operador Unário PréFixada
--num1
console.log(num1)

/**
 * O Operador PréFixado
 * Tem precedência maior
 * Que o PósFixado
 */

console.log(++num1 === num2--)
console.log(num1 === num2)