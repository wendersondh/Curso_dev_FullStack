/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

import prompt from 'prompt-sync'
const input = prompt()

const nota = Number(input("Digite sua nota: "))

if(nota >= 7){
    console.log("Aprovado")
}else if(nota >= 5 && nota < 7){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}
