import PromptSync from "prompt-sync";

let prompt = PromptSync()

 export function exercicio6 () {
    let numero:number = parseInt(prompt("Escolha um numero de 1 a 10: "))

for(let contador = 0; contador <=10;contador++ ){
    let resultado:number = contador *  numero

    console.log( numero + "x " + contador + " = " +  resultado )
    
}
}
