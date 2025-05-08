/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados 
fornecidos formam realmente um triângulo. Caso forme, deve ser indicado 
o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

import prompt from 'prompt-sync'
const input = prompt()

const ladoA = Number(input("Digite o lado A: "))
const ladoB = Number(input("Digite o lado B: "))
const ladoC = Number(input("Digite o lado C: "))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){

    if(ladoA == ladoB && ladoB == ladoC){
        console.log("Equilatero")
    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        console.log("Isosceles")
    }else{
        console.log("Escaleno")
    }

}else{

    console.log("Os valores fornecidos NÃO formam um triângulo.")
}

