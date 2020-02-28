// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 6)
imprimirSoma(2)
imprimirSoma(3, 5, 7, 8)
imprimirSoma()

// Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 8))
console.log(soma(4))
console.log(soma())