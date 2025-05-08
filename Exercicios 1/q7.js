/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

import prompt from 'prompt-sync'
const input = prompt()

const macas = Number(input("Digite o número de maçãs compradas: "))

if(macas < 12){
    console.log(macas * 0.30)
}else{
    console.log(macas * 0.25)
}

