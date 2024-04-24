const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

//a função callback filter retorna o resultado da avaliação (verdadeiro ou falso)

/*const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length < 4; //tamanho da string
});*/

const reprovados = alunos.filter((_, indice) => { //ou (aluno, indice)
    return medias[indice] < 7;
});

console.log(reprovados);