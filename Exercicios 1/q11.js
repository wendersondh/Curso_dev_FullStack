/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

import prompt from 'prompt-sync'
const input = prompt()

let soma = 0

for(let i = 1; i <= 5; i++){
    const num = Number(input(`Digite o ${i} número: `))
    soma += num
}
console.log(soma)
