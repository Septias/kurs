import { inAppPurchase } from 'electron/main';
import p5, { Vector } from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Helvetica');
    p.textSize(14)
    p.frameRate(60)
    p.background(255, 255, 255);

  };

  const body_x_top = p.windowWidth / 2
  const body_y_top = p.windowHeight / 2
  const galgen_x_bottom = body_x_top - 250
  const galgen_y_bottom = body_y_top + 300
  let elements_to_draw = -1
  const wörter = ["lol", "sodkak", "adada"]
  let zielwort = "lol" //wörter[Math.floor(Math.random() * wörter.length + 1)]
  const parts_to_draw = []




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


  const buchstaben = {
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
  }







  p.draw = function draw() {

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

      console.log(zielwort)

    }




  }
  p.keyPressed = () => {

    let key = p.key
    if (zielwort.includes(key) == false && buchstaben[key] == false) {
      elements_to_draw++
      parts_to_draw.push(parts[elements_to_draw])

    }
    buchstaben[key] = true
    console.log(parts_to_draw.length)
    console.log(key)
  }













}, document.getElementById('app')!);



