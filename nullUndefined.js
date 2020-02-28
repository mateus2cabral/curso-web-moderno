let valor // Não inicializada

console.log(valor)

valor = null // Ausência de valor // Não aponta para nenhum lugar na memória

console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.23

console.log(produto)

produto.preco = undefined // Evitar realizar essa atribuição (preferir usar null)

console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // Sem preço (diferente de 0 (gratis))
console.log(!!produto.preco)
console.log(produto.preco)