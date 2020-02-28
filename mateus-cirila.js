
let love = (nome, quantidade) => {
    for (let i = 0; i < quantidade; i++) {
        nome = nome + nome[--nome.length]
    }
    return nome.toUpperCase()
}

console.log(love('Cirila', 20))