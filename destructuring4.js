function rand([ min = 0, max = 1000 ]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}

const array = [234, 3920]
console.log(rand(array))
console.log(rand([ , 50]))
console.log(rand([]))
//console.log(rand())