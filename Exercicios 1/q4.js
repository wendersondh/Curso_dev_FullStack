/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

import prompt from 'prompt-sync'
const input = prompt()

console.log("Escolha uma opção:")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

const opcao = Number(input("Digite a opção desejada: "))

switch(opcao){
    case 1:
        console.log("Soma")
        break
    case 2:
        console.log("Subtração")
        break
    case 3:
        console.log("Multiplicação")
        break
    case 4:
        console.log("Divisão")
        break
    default:
        console.log("Opção inválida")
}
