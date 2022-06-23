import p5 from 'p5';
import './style.css';
import { gameScreen, endScreen } from './screens'


export enum SCREENS {
  gameScreen,
  endScreen
}

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Arial');
    p.textSize(30)
    p.frameRate(60)
    p.background(255, 255, 255);
  };

  const body_x_top = p.windowWidth / 2
  const body_y_top = p.windowHeight / 2
  const galgen_x_bottom = body_x_top - 250
  const galgen_y_bottom = body_y_top + 300
  const words = ["hallo", "tschüss"]
  let target_word = words[Math.floor(Math.random() * (words.length - 1))]
  let new_string = "_ ".repeat(target_word.length)
  let elements_to_draw = 0
  let render_function = SCREENS.gameScreen

  const parts = [
    //galgen
    [galgen_x_bottom, galgen_y_bottom, 250, 250, p.PI, 0],
    [galgen_x_bottom, galgen_y_bottom - 250 / 2, galgen_x_bottom, galgen_y_bottom - 450],
    [galgen_x_bottom, galgen_y_bottom - 450, body_x_top, galgen_y_bottom - 450],
    [galgen_x_bottom, galgen_y_bottom - 370, galgen_x_bottom + 80, galgen_y_bottom - 450],
    [body_x_top, galgen_y_bottom - 450, body_x_top, body_y_top - 50],
    //head
    [body_x_top, body_y_top - 25, 50],
    [body_x_top - 1 / 3 * 25, body_y_top - 28, 2],
    [body_x_top + 1 / 3 * 25, body_y_top - 28, 2],
    //body
    [body_x_top, body_y_top, body_x_top, body_y_top + 100],
    //arms
    [body_x_top, body_y_top + 15, body_x_top - 30, body_y_top + 90],
    [body_x_top, body_y_top + 15, body_x_top + 30, body_y_top + 90],
    //legs
    [body_x_top, body_y_top + 100, body_x_top - 25, body_y_top + 175],
    [body_x_top, body_y_top + 100, body_x_top + 25, body_y_top + 175],
  ]
  const letters = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  } as { [key: string]: boolean }

  const parts_to_draw = [parts[0]] as number[][]

  p.draw = function draw() {
    p.background(255)

    if (render_function == SCREENS.gameScreen) {
      gameScreen(parts_to_draw, p, new_string)
    } else if (render_function == SCREENS.endScreen) {
      render_function = endScreen(p)
    }
  }

  p.keyPressed = () => {
    let key = p.key
    let keyCode = p.keyCode

    if (!(65 <= keyCode && keyCode <= 90 || 97 <= keyCode && keyCode <= 122)) {
      return
    }

    letters[key] = true

    if (!target_word.includes(key)) {
      elements_to_draw++
      parts_to_draw.push(parts[elements_to_draw])
    }

    new_string = ""
    let comparison_string = ""
    for (const letter of target_word) {
      if (letters[letter] == true) {
        new_string += letter
        comparison_string += letter
      } else {
        new_string += "_"
      }
      new_string += " "
    }

    if (target_word == comparison_string) {


      const timeout = setTimeout(timeout_endscreen, 1000)
      function timeout_endscreen() {

        render_function = SCREENS.endScreen
      }
    }
  }
}, document.getElementById('app')!);