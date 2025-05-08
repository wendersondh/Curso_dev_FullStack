/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

import prompt from 'prompt-sync'
const input = prompt()

let num1, num2

do{

    num1 = Number(input("Digite o primeiro número: "))
    num2 = Number(input("Digite o segundo número: "))

    if(num1 == num2){
        console.log("Os números devem ser diferentes")
    }else if(num1 < num2){
        console.log(num1, num2)
    }else{
        console.log(num2, num1)
    }
}while(num1 == num2)
