function compras(trabalho1, trabalho2) {

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = trabalho1 ^ trabalho2 // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2

    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}


console.log('T e T', compras(true, true))
console.log('T e F', compras(true, false))
console.log('F e F', compras(false, false))
console.log('F e T', compras(false, true))