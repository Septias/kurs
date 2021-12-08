import PromptSync from "prompt-sync";


let prompt = PromptSync()
function prompt2(frage) {
    return prompt(frage)
}


let f1 = "Du wachst alleine in einer Oase auf, umgeben von Palmen, neben einem Teich. Außerhalb der Oase erstreckt sich eine Wüste in alle Richtungen, soweit das Auge reicht. Die Sonne geht gerade unter. Schreibe f um ein Feuer zu machen oder w um etwas zu trinken. "
f1 = "Du wachst alleine in einer Oase auf, umgeben von Palmen, neben einem Teich. Außerhalb der Oase erstreckt sich eine Wüste in alle Richtungen, soweit das Auge reicht. Die Sonne geht gerade unter. Schreibe f um ein Feuer zu machen oder w um etwas zu trinken. "

function spiel() {
    let a = prompt(f1)

    if (a == "f") {
        console.log("du machst ein feuer")
    }

    if (a == "w") {
        console.log("Du trinkst etwas Wasser aus dem Teich.");
    }

    console.log("Es wird Nacht...");

    if (a == "f") {
        console.log("... aber dir ist warm. Dafür bist du sehr durstig.");
    }
    let tz 

    if (a == "f") {
        tz = prompt2(
            "Schreibe t um aufzustehen und etwas zu trinken oder e um dich am Feuer zu entspannen."
        );
    }


    if (tz == "t") {
        console.log("Du trinkst etwas und legst dich dann am Feuer schlafen.");
    }

    if (tz == "e") {
        console.log(
            "Du legst dich am Feuer schlafen und wachst nicht wieder auf. Du bist verdurstet :/"
        );
        return

    }
    

    if (a == "wasser") {
        console.log(
            "Du hast keinen Durst, aber es wird kalt, du solltest ein Feuer machen"
        );
    }
    let er

    if (a == "wasser") {
        er = prompt2("Schreibe s um sitzen zu bleiben oder f um Feuer machen.");
    }

    if (er == "s") {
        console.log("Du erfrierst :/ Noob");
        return
    }

    if (er == "f") {
        console.log("Du machst ein Feuer und schläfst bis zum nächsten morgen");
    }

    //Ende von Level 1
    //letzter prompt tz

    let ui;

    ui = prompt2(
        "Du wachst auf, die Sonne steht bereits hoch am Himmel. Im Osten siehst du die Trümmer eines Gebäudes aus der Wüste aufragen. Im Westen geht die Wüste in einen Dschungel über. Welchen Weg wählst du? Schreibe o für Osten oder w für Westen."
    );

    if (ui == "o") {
        console.log("Du wendest dich nach Osten");
    }
    let op

    if (ui == "o") {
        op = prompt2(
            "Du hast dich erst ein paar Schritte von der Oase entfernt als vor dir ein Skorpion aus dem Sand auftaucht. Was tust du? Schreibe t um nach dem Skorpion zu treten oder p um ihn zu packen "
        );
    }

    if (op == "p") {
        console.log(
            "Du packst den Skorpion mit einer schnellen Handbewegung und wirfst in in hohem Bogen weg."
        );
    }

    if(op == "p"){
        console.log("Du packst den Skorpion und reißt ihm den Stachel raus. Dann saugst du genüsslich an seinem... Dann läufst du zum Gebäude ")
        let op2 = prompt2("Du gehst um das Gebäude ")
    }

    if (op == "t") {
        console.log(
            "Du trittst nach dem Skorpion und verfehlst. Der Skorpion sticht in dein Bein. Dein zweiter Tritt trifft. Du humpelst weiter zum Gebäude."
        );
    }
    
    if(op== "t"){
        prompt2("Du läufst um das Gebäude herum und siehst ein Cybertruck, drück e um einzusteigen oder g um ins Gebäude zu gehen.");
        console.log("Das Gift hat dein Herz erreicht, du stirbst. Noob");
        spiel()
        return
    }
    
}


spiel()