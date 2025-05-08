/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

import prompt from 'prompt-sync'
const input = prompt()

const num = Number(input("Digite um número: "))

let fatorial = 1

for(let i = num; i > 0; i--){
    fatorial *= i
}
console.log(fatorial)
