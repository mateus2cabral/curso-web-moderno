// par nome / valor
const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Mateus',
    idade: 21,
    peso: 63,
    endereco: {
        logradouro: 'Avenida Presidente Getúlio Vargas',
        numero: 1530
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)