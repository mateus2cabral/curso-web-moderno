
// Fibonacci sem recursividade

function fibonacci(topo) {
    let atual = 1
    let anterior = 1
    while(atual <= topo) {
        anterior = atual - anterior
        atual += anterior
        console.log(atual)
    }
}


// Fibonacci com recursividade

// function fibonacci(topo) {
//     if (topo <= 1) return 1
//     return fibonacci(topo-1) + fibonacci(topo-2)
// }


fibonacci(Infinity)