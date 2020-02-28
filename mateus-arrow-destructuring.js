// Criando o objeto aluno1
let aluno1 = {
    nome: 'Mateus',
    idade: 21,
    curso: 'Computação',
    nota1: 8.5,
    nota2: 6.8,
    nota3: 7.4
}

/**
 * Criando uma variável
 * Que armazena umar
 * Função ARROW
 */

 let media = aluno => {
    const {nota1: n1, nota2: n2, nota3: n3} = aluno
    return ((n1 + n2 + n3) / 3).toFixed(2)
 }

 console.log('Minha média:', media(aluno1))