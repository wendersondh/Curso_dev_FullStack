/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

import prompt from 'prompt-sync'
const input = prompt()

let soma = 0
let cont = 0
let num

do{

    num = Number(input("Digite um número: "))

    if(num != 0){
        soma += num
        cont++
    }

}while(num != 0)

if(cont != 0){
    console.log(soma / cont)
}
