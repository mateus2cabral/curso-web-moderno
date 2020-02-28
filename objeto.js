const prod1 = {}
prod1.nome = 'Nome Ultra Mega'
prod1.preco = 432.23
prod1['Desconto Legal'] = 0.40 // Evitar esses nomes

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 99.90,
    obj: {
        blabla: 1,
        obj: {
            blablabla: 'Aninhamento'
        }
    }
}

console.log(prod2)