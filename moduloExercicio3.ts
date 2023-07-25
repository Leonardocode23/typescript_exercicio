import PromptSync from "prompt-sync";

let prompt = PromptSync()

export function exercicio3 () {
    let fibonacci:number[] = [0,1];

for (let contador =2; contador < 10; contador++){
    fibonacci [contador] = fibonacci [contador - 1] + fibonacci [contador -2];
}

for (let contador =0; contador <10; contador++){
    console.log(fibonacci[contador]);
}
}

