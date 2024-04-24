const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10]; //adiciona um valor sem utuilizar o push
// spread operator - espalha valores
// o push referencia e aqui estamos clonanando um array e adicionando um valor

console.log(notas);
console.log(novaListaNotas);
