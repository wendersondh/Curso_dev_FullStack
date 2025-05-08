/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

import prompt from 'prompt-sync'
const input = prompt()  

const num = Number(input("Digite um número: "))

for(let i = 0; i < 10; i++){
    console.log(num)
}
