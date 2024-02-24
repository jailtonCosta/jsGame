//let titulo = querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto!'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10 :'  background-color: #c7c3d8c5;
let numeroSecreto = geraNumeroAleatorio ();
let tentativas = 1 ;

function exibirTextoTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto,'Brazilian Portuguese Female', {rate : 1.0});
}

function exibirTextoInicial(){

    exibirTextoTela('h1','Jogo do número secreto!');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10:');

}
exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoTela('h1','Acertou');
        let palavaraTentativa = tentativas > 1 ? 'tentativas ': 'tentativas' ;
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavaraTentativa} !`;
        exibirTextoTela('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');
      
    }else{
        if (chute > numeroSecreto){
            exibirTextoTela ('p','O numero secreto é menor !');
        }else{
            exibirTextoTela ('p','O numero secreto é maior !');
        }
        //tentativas = tentativas + 1;
        tentativas ++;
        limparCampo();
    }
            
}

function geraNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true );

}