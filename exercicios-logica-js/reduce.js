const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// a função callback reduce reduz todos os valores de um array a um elemento

function calculaMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota);
    const media = somaDasNotas / listaDeNotas.length;
    return  media;
}

  
console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));