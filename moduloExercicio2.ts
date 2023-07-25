import PromptSync from "prompt-sync";

let prompt = PromptSync()

export function exercicio2() {
    
   

    

    let altura:number = parseFloat(prompt("Digite a altura:"))
    let peso:number = parseFloat(prompt("Digite o peso:"))
    


    let imc = peso / (altura * altura)

    switch (true) {
        case (imc < 18.5):
            console.log("abaixo do peso  " + imc);
            break;
        case (imc > 18.5 && imc < 24.9):
            console.log("Peso normal  " + imc);
            break;
        case (imc > 25.0 && imc < 29.9):
            console.log("Sobrepeso  " + imc);
            break;
        case (imc > 30.0 && imc < 34.9):
            console.log("Obesidade grau 1  " + imc);
            break;
        case (imc > 35.0 && imc < 39.9):
            console.log("Obesidade grau 2  " + imc);
            break;
        case (imc > 40.0):
            console.log("Obesidade grau 3  " + imc);
            break;
    }
}
