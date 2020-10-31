//modo declarativo
let numero = 69;

function somar(a,b){
    console.log(numero)
    //codigo
    console.log("Estou somando....")
    return a + b;
}

let resultadoSoma = somar(1,2);
console.log(resultadoSoma)

//modo expressão

const multiplicar = function(a,b){
    //código
    console.log("Estou multiplicando...")
    return a*b;
}

let resultadoMultiplicar = multiplicar(2,10)
console.log(resultadoMultiplicar)

function exemplo(){
    return "Olá, sou uma função"
}
exemplo();

var exemplo = "Oi, eu sou uma função expressa"

var exemplo  = function(){
    return "Oi, eu sou uma função expressa"
}
exemplo();

function saudar(nome, sobrenome){
    return 'olá, ' + nome + ' ' + sobrenome + '!';
}
saudar('Diego', 'Amaral');

function ePar(num1){
    return num1 / 2
}
ePar(10)