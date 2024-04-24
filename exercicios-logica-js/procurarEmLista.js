const alunos = ['João', 'Juliana', 'caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){ //includes checa se o dado está no array
        
        const [alunos, medidas] = lista; //desestruturação -> sempre direita para esquerda com o =
        const indice = alunos.indexOf(aluno); //método indexOff retorna o nº correspondente ao indice
        const mediaAluno = medias[indice]; //continua com 2 dimensões
        console.log(`${aluno} tem média ${mediaAluno}`);
    }
    else{
        console.log('Estudante não existe na lista');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Fulaninho'); //não existe na lista
