// Novo recurso do ES 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 210
    }
}

console.log(pessoa.nome)

// Tire nome e idade do objeto pessoa
const { nome, idade } = pessoa

console.log('Nome: ', nome)
console.log('Idade: ', idade)

const { nome: usuario, idade: age } = pessoa

console.log('Usuário: ', usuario, '\nAge: ', age)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// Cria apenas logradouro e numero e nao o endereco
const { endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero)

const { conta: {ag = 3, num}} = pessoa
console.log(ag, num)