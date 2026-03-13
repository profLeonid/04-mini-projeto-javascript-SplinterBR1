'use strict'

const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resultado = document.getElementById('imc-res')

function calcularIMC() {

    if (altura.value == '' || peso.value == '') {
        resultado.textContent = 'Por favor insira seu peso e sua altura!'
        resultado.style.backgroundColor = '#252525'
    }

    else {
        let calculo = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))

        if (calculo < 18.50) {
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Abaixo do peso!' 
            resultado.style.backgroundColor = '#1e3a5f'
        }
        else if (calculo < 25.0) {
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Peso normal!' 
            resultado.style.backgroundColor = '#14532d'
        }
        else if (calculo < 30.0) {
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Sobrepeso!' 
            resultado.style.backgroundColor = '#713f12'
        }
        else if (calculo < 35.0) {
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Obesidade grau I!' 
            resultado.style.backgroundColor = '#7f1d1d'
        }
        else if (calculo < 40.0) {
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Obesidade grau II!' 
            resultado.style.backgroundColor = '#6b0f0f'
        }
        else { 
            resultado.textContent = 'Olá! ' + nome.value + ' // Seu IMC: ' + calculo.toFixed(2) + ' // Classificação: Obesidade grau III!' 
            resultado.style.backgroundColor = '#450a0a'
        }
    }
}