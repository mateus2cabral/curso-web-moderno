function fatorial(valor) {
    if(valor == 0) {
        return 1
    }
    else {
        return valor *= fatorial(valor-1)
    }
}


fatorial(1)
console.log('Fat 7:', fatorial(7))