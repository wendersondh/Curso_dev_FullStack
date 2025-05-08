/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

import prompt from 'prompt-sync'
const input = prompt()

const num = Number(input("Digite um número: "))

if(num % 2 == 0){
    console.log("Par")
}else{
    console.log("Impar")    
}


