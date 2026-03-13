'use strict'

function aptidao() {
    const entrada = document.getElementById('entrada').value
    let resultado = document.getElementById('retorno')
    let numeroResultado = parseInt(entrada)
    console.log(numeroResultado)

    if (entrada == '') {
        resultado.textContent = 'Campo vazio, por favor insira o tempo da corrida!'
        resultado.classList.remove('apto');
        resultado.classList.remove('naoApto');
    }

    else if (numeroResultado < 14) {
        resultado.textContent = 'Parabéns, você está APTO!'
        resultado.classList.remove('naoApto');
        resultado.classList.add('apto');
    }

    else {
        resultado.textContent = 'Lamento, você não está apto. Tente baixar o tempo na proxima!'
        resultado.classList.remove('apto');
        resultado.classList.add('naoApto');
    }
}