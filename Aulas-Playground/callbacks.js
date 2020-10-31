const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA-numeroB))

function adicionarHttp(url) {
    return "http://"+url;
}function processar(lista,callback){
    var listaSites=[]
    for ( i = 0; i < lista.length; i++){
        // return `${callback} ${lista[i]}`
        // var outro = `${callback} ${lista[i]}`
        // listaSites.push(`${callback}${lista[i]}`)
        listaSites.push(callback(lista[i]))
    }return listaSites
}console.log(processar(["teste.com","teste.com"],adicionarHttp))

function dobro(a) {return a * 2;}
function triplo(a) {return a * 3;}function conta (b){
    if (b = dobro){
        return (dobro(a))
    }else if ( teste = triplo){
        return (triplo(a))
    }
}function aplicar (a,conta){
    return conta(a)}

    function somar (a,b){return a + b;}
function subtrair (a, b){ return a - b;}
function multiplicar  (a,b){ return a*a;}
function dividir (a,b){ return a/b;}function calculadora(a,b,callback){
    return callback(a,b);
}