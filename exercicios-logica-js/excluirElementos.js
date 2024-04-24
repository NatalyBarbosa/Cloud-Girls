const notas = [10, 6, 8, 5.5, 10];

notas.pop(); //pop remove o último elemento do array, não precisa de nenum parâmetro

const media = (notas[0]+notas[1]+notas[2]+notas[3])/ notas.length;

console.log(media.toFixed(2)); //função toFixed() -> arredondamento
