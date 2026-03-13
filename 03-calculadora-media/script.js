'use strict'

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const resultado = document.getElementById('media-res')

function calcularMedia() {

    if (nota1.value == '' || nota2.value == '' || nota3.value == '') {
        resultado.textContent = 'Por favor digite todas as notas!'
        resultado.classList.remove('aprovado')
        resultado.classList.remove('reprovado')
        resultado.classList.remove('recuperacao')
    }

    else {
        let calculo = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3

        if (calculo >= 7) {
            resultado.textContent = 'A média das notas inseridas é: ' + calculo.toFixed(2) + ' // Aluno: APROVADO!'
            resultado.classList.add('aprovado')
            resultado.classList.remove('reprovado')
            resultado.classList.remove('recuperacao')
        }

        else if (calculo < 7 && calculo > 5) {
            resultado.textContent = 'A média das notas inseridas é: ' + calculo.toFixed(2) + ' // Aluno: RECUPERAÇÃO'
            resultado.classList.add('recuperacao')
            resultado.classList.remove('reprovado')
            resultado.classList.remove('aprovado')
        }

        else {
            resultado.textContent = 'A média das notas inseridas é: ' + calculo.toFixed(2) + ' // Aluno: REPROVADO'
            resultado.classList.add('reprovado')
            resultado.classList.remove('recuperacao')
            resultado.classList.remove('aprovado')

            console.log(calculo)
        }
    }
}