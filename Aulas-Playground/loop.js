for(let i=0; i<=4; i++){
    console.log(i)
}

for (let volta = 1; volta <= 5; volta++){
    console.log('Dando a volta número' + volta);
};

function papagaio(repete){
    for(let i = 0; i<5; i++){
        console.log(repete)
    }
}

function naoPareDeContarImparesAte(numero){
    var cont = 0
    for(let i = 0; i < numero; i++){
        if(i % 2 != 0){
            cont ++
        }
    }
    return cont
}
    var r = naoPareDeContarImparesAte(11);
    console.log(r);