const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(nomes); //set é um conjunto que armazena dados, NÃO É UM ARRAY

const listaNomesAtualizados = [... new Set(nomesAtualizados)]; //transforma o set em um array, usanso o operador d espalhamento

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
