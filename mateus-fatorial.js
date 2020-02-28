let fatorial = valor => valor == 0 ? 1 : (valor *= fatorial(--valor))

console.log('Fatorial de 5:', fatorial(5))
