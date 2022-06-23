import p5 from "p5"

export function gameScreen(parts_to_draw: number[][], p: p5, new_string: string) {
    for (const part of parts_to_draw) {
        if (part.length == 6) {
            p.arc(part[0], part[1], part[2], part[3], part[4], part[5])
        }
        if (part.length == 4) {
            p.line(part[0], part[1], part[2], part[3])
        }
        if (part.length == 3) {
            p.circle(part[0], part[1], part[2])
        }

        p.text(new_string, p.windowWidth / 2, p.windowHeight / 2 + 400)
    }
}


export function endScreen(p: p5, /*render_function, SCREENS: any,*/) {
    let button_width = 150
    let button_height = 70
    let button
    p.textSize(80)
    p.textAlign("center")
    p.text("You Won", p.windowWidth / 2, p.windowHeight / 2 - 150)
    button = p.createButton("New Game")
    button.position(p.windowWidth / 2 - button_width / 2, p.windowHeight / 2 - button_height / 2)
    button.size(button_width, button_height)
    button.mouseClicked(new_game)
    function new_game() {
        console.log("lol")
        //render_function = SCREENS.gameScreen
        return true
    }


}