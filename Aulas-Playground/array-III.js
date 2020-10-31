let numeroPares = [2,4,6,8,10];

//map
let numersParesDobro = numeroPares.map(function(valor){
    return valor *2
})

console.log(numersParesDobro)

//filter

let numerosFiltrados = numeroPares.filter(function(valor){
    return valor < 6
})

console.log(numerosFiltrados)

//reduce
let somaPares = numeroPares.reduce(function(acum, valor){
    return acum + valor
})

console.log(somaPares)

numeroPares.forEach(function(valor, indice){
    console.log(`O indice tem o ${indice} tem o valor ${valor}`)
})