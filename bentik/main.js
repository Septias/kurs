import PromptSync from "prompt-sync";

let prompt = PromptSync()

let antwort = prompt('Wie geht es dir? ')

console.log('Dir geht es: ', antwort)

let sp = prompt("f für feuer oder s für wasser")

    if(sp == "f"){
        console.log;("du machst ein feuer");
    }
