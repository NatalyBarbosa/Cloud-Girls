const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); //corta a lista pela metade
//(paramentro inicio, parametro fim)
const sala2 = listaEstudantes.slice(listaEstudantes.length/2, 0);

console.log(sala1);
console.log(sala2);

