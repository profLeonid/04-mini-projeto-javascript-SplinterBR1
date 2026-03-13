'use strict'

const valor = document.getElementById('valor')
const desconto = document.getElementById('desconto')
const resultado = document.getElementById('valor-resultado')


function calcularDesconto() {

    if (valor.value == '' || desconto.value == '') {
        resultado.textContent = 'Por favor insira as informações acima'
        resultado.classList.remove('resultado1')
        resultado.classList.remove('resultado2')
        resultado.classList.remove('resultado3')
    }

    else {
        let valorDesconto = parseFloat(valor.value) * parseFloat(desconto.value) / 100
        let precoFinal = valor.value - valorDesconto
        
        resultado.textContent = 'Valor economizado: ' + 'R$' + valorDesconto.toFixed(2) + ' // Preço final: ' + 'R$' + precoFinal.toFixed(2)

        if (parseFloat(desconto.value) <= 5) {
            resultado.classList.add('resultado1')
            resultado.classList.remove('resultado2')
            resultado.classList.remove('resultado3')
        }

        else if (parseFloat(desconto.value) < 10) {
            resultado.classList.remove('resultado1')
            resultado.classList.remove('resultado3')
            resultado.classList.add('resultado2')

        }

        else {
            resultado.classList.remove('resultado1')
            resultado.classList.remove('resultado2')
            resultado.classList.add('resultado3')
        }
    }
}