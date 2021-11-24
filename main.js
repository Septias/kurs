
// Setup-code, damit man Input von der Komandozeile annehmen kann
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


// hier ist der code um Input entgegenzunehmen
readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
})

