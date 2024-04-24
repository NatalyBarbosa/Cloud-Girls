const clinica = [];// Criando um array vazio para representar a fila de animais na clínica

// Chegada de animais na clínica
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibindo a fila de animais na clínica após a chegada
console.log("Fila de animais após a chegada: ", clinica);

// Removendo cada animal da lista:
clinica.pop();
clinica.pop();
clinica.pop();

// Exibindo o estado final da lista:
console.log("Fila de animais aguardando: ", clinica);