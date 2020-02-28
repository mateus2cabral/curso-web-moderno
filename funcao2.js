// Armazenando função em variavel/constante

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando função arrow em uma variavel (conceito novo)

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))


/**
 * Retorno Implícito
 * Quando há apenas
 * Uma linha de código
 * o resultado é retornado
 * e não necessita das chaves
 * se houver um único parametro pode usar sem parentesis
 */
const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))