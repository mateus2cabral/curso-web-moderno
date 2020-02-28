let a = 'Let'
this.b = 'This'
global.c = 'Global'

console.log('\nChamada comum')
console.log(a)
//console.log(b) Erro por not defined
console.log(c)

console.log('\nChamada em this')
console.log(this.a)
console.log(this.b)
console.log(this.c)

console.log('\nChamada em global')
console.log(global.a)
console.log(global.b)
console.log(global.c)

