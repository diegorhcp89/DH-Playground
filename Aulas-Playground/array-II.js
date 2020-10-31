let pessoa = ["Diego", 1.88, "Diego"];
console.log(pessoa)

//push - para inserir
pessoa.push(34);
console.log(pessoa)

//pop - para retirar
// pessoa.pop();
// console.log(pessoa)

let excluido = pessoa.pop();
console.log(excluido);

//unshit
pessoa.unshift(34)
console.log(pessoa)

//shift 
pessoa.shift();
console.log(pessoa)

//indexOf

console.log(pessoa.indexOf("Diego"))

//lastIndexOf
console.log(pessoa.lastIndexOf("Diego"))

//join

console.log(pessoa.join());

let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

console.log(arrayFrase.join());

let fraseNova = "Não fracassei, simplesmente encontrei dez mil soluções equivocadas"

console.log(fraseNova);