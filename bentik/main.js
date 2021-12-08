import PromptSync from "prompt-sync";


let prompt = PromptSync()

let a = prompt(`Du wachst alleine in einer Oase auf, 
umgeben von Palmen, neben einem Teich. 
Außerhalb der Oase erstreckt sich eine Wüste in alle Richtungen,
 soweit das Auge reicht. Die Sonne geht gerade unter.
 Schreibe f um ein Feuer zu machen oder w um etwas zu trinken.`)

if(a == "f"){
    console.log("du machst ein feuer")
}
