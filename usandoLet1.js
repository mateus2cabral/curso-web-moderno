/**
 * Variáveis definidas
 * com var
 * têm escopo
 * GLOBAL
 * FUNÇÃO
 * 
 * Variáveis definidas
 * com let
 * têm escopo
 * GLOBAL
 * FUNÇÃO
 * BLOCO 
 */

let numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero)
}

console.log('Fora: ', numero)