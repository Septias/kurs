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
  

export function endScreen(p: p5) {
    p.rect(10, 10, 200, 200)
    p.createButton('new game')
}