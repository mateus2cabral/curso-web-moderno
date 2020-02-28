
/**
 * DESTRUCTURING
 * Aqui estamos criando uma função
 * que vai receber como parametro
 * um OBJETO
 * e vai desestruturar as variaveis
 * min e max
 * sem necessidade de acesso
 * utilizando a notação ponto (.)
 */

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({max: 20}))
console.log(rand({}))
//console.log(rand())