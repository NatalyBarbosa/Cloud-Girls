/*function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}*/

//document.querySelector('.tecla_pom').play(); ..

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else{
    //  alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
    }



const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeTeclas.length; contador++ ){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

   // console.log(instrumento);

    //template string
    const idAudio = `#som_${instrumento}`;

   // console.log(idAudio);

     tecla.onclick = function () { 
        tocaSom(idAudio);
     }
     
    //console.log(contador); 

    /*tecla.onkeydown = function () {
        tecla.add('ativa'); 
    }*/ //Funciona perfeitamente

    tecla.onkeydown = function (evento) {

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    } //funcionou sem tbm

}

/*É sempre bom deixar uma nova linha ao fim do código e não encerrar o final do arquivo com um final de código.

Isso é uma boa prática, pois se o nosso código vier a sofrer algum tipo de transformação por ferramentas que unem o código, isso pode ser útil.*/
