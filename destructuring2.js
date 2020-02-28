/**
 * ** Destructuring **
 * Aqui estamos criando as variáveis
 * n1, n2, n3
 * Atribuindo os valores respectivos do array
 */

const [n1, n2, n3] = [7, 8.8, 5.9]
const [m1, , m3] = [7, 8.8, 5.9]
console.log(n1, n2, n3)
console.log(m1, m3)

const [ , [ , nota]] = [[4, 5], [23, 54]]
console.log(nota)