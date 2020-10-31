let contador = 0;

do{
    console.log("Estou dentro de um while");
    contador++;
}while(contador < 10)


while(contador < 10){
    console.log("Estou dentro de um while");
    contador++;
}

var contador = 0;

while (contador <= 4){
    contador++;
    console.log('Contador: ' + contador);
}

var diaSemana =1;

do {
    console.log('Dia da samana N° ' + diaSemana);
    diaSemana++;
} while (diaSemana <=7)

var c  = 1
while (c < 6) {
    console.log(`Passo ${C}`)
    c++
}


function tabelaDeMultiplicacao(numero) {
    let i = 1
    while(i <=10) {
         let produto = numero*i
         console.log(numero+" * " +i +" = "+produto)
         i++
     }
}

