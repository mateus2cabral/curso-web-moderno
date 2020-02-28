
let status = media => media >= 7 ? 'Aprovado' : 'Reprovado'

console.log(status(4))
console.log(status(8))
console.log(status(3))

console.log('\nstatus:', typeof(status))