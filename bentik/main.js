import PromptSync from "prompt-sync";












function prompt2(frage){
    return prompt(frage).toLowerCase()
}



let prompt = PromptSync()

let a = prompt2(`Du wachst alleine in einer Oase auf, 
umgeben von Palmen, neben einem Teich. 
Außerhalb der Oase erstreckt sich eine Wüste in alle Richtungen,
soweit das Auge reicht. Die Sonne geht gerade unter.
Schreibe f um ein Feuer zu machen oder w um etwas zu trinken.`)

if(a == "f"){
    console.log("du machst ein feuer")
}

if(a == "w"){
    console.log("Du trinkst etwas Wasser aus dem Teich.");
}

console.log();("Es wird Nacht...");

if (a == "feuer") {
  console.log("... aber dir ist warm. Dafür bist du sehr durstig.");
}

if (a == "feuer") {
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
  
}

if (qw == "wasser") {
  console.log(
    "Du hast keinen Durst, aber es wird kalt, du solltest ein Feuer machen"
  );
}

if (qw == "wasser") {
  er = prompt2("Schreibe s um sitzen zu bleiben oder f um Feuer machen.");
}

if (er == "s") {
  prompt2("Du erfrierst :/ Noob");
  
}

if (er == "f") {
  console.log("Du machst ein Feuer und schläfst bis zum nächsten morgen");
}

//Ende von Level 1
//letzter prompt tz

let ui;

ui = prompt(
  "Du wachst auf, die Sonne steht bereits hoch am Himmel. Im Osten siehst du die Trümmer eines Gebäudes aus der Wüste aufragen. Im Westen geht die Wüste in einen Dschungel über. Welchen Weg wählst du? Schreibe o für Osten oder w für Westen."
);

if (ui == "o") {
  prompt("Du wendest dich nach Osten");
}

if (ui == "o") {
  op = prompt(
    "Du hast dich erst ein paar Schritte von der Oase entfernt als vor dir ein Skorpion aus dem Sand auftaucht. Was tust du? Schreibe t um nach dem Skorpion zu treten oder p um ihn zu packen "
  );
}

if (op == "p") {
  prompt(
    "Du packst den Skorpion mit einer schnellen Handbewegung und wirfst in in hohem Bogen weg."
  );
}

if (op == "t") {
  prompt(
    "Du trittst nach dem Skorpion und verfehlst. Der Skorpion sticht in dein Bein. Dein zweiter Tritt trifft. Du humpelst weiter"
  );
}
