function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    /*
    Retorna apenas um numero sorteado
    let numero = obterNumeroAleatorio(de, ate);
    alert(numero);
    */

    //Para mais numeros sorteados, precisaresmos de uma repetição
    let sorteados = [];
    let numero;
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        //verifica se o numero existe dentro do array,caso a condição seja falsa, ele vai chamar novamente a função "obterNumeroAleatorio"
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');

    } else {
        botaoReiniciar.classList.add('container__botao-desabilitado');
        botaoReiniciar.classList.remove('container__botao');

    } 
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}
