const notas = [10, 9.5, 8, 7, 6];


//map é um método callback chaa uma função dentro de outra

/*const notasAtualizadas = notas.map(function(nota){
    
    return nota +1;
})*/

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1);

//nota +1 é o retorno, se nota + 1  > = 10 retorna 10 (? 10), se nao (: ) retorna +1

/*O forEach() não retorna nada,

portanto, é para quando não precisamos de retorno.
Caso contrário, quando precisamos que o resultado do processamento
seja capturado e guardado em outro array, precisamos usar o map().
Essa é uma das principais diferenças entre o forEach() e o map().*/

console.log(notasAtualizadas);