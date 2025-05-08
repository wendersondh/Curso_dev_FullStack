/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

import prompt from 'prompt-sync'
const input = prompt()

const peso = Number(input("Digite seu peso: "))
const altura = Number(input("Digite sua altura: "))

const imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Baixo peso")
}else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal")
}else if(imc >= 25 && imc < 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}
