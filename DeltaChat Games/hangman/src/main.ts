import p5 from 'p5';

import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  const ABSTAND = 25
  const KOPFBREITE = 60
  const TORSOHÖHE = 180
  const TORSOBREITE = 120

  const wörterliste = ["hallo", "maurice", "bentik", "donald trump"]

  const parts = [
    [200, 200, TORSOBREITE, TORSOHÖHE],
    [200 - ABSTAND - 100, 200 + 10, 100, 30],
    [200 + TORSOBREITE + ABSTAND, 200 + 10, 100, 30],
    [200 + 60 - KOPFBREITE / 2, 200 - ABSTAND - KOPFBREITE, KOPFBREITE, KOPFBREITE],
    [200 + 1 / 5 * TORSOBREITE, 200 + TORSOHÖHE + ABSTAND, 1 / 5 * TORSOBREITE, 120],
    [200 + 3 / 5 * TORSOBREITE, 200 + TORSOHÖHE + ABSTAND, 1 / 5 * TORSOBREITE, 120]
  ]

  let to_draw = []

  const targetWord = wörterliste[0]

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

  let parts_index = 0

  p.keyPressed = (key) => {
    console.log(key);
    buchstaben[key.key] = true

    if (!targetWord.includes(key.key)) {
      to_draw.push(parts[parts_index])
      parts_index += 1
    }
  }

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight - 5);
    p.textSize(25)
  };

  p.draw = function draw() {
    p.background(255);
    for (let part of to_draw) {
      p.rect(part[0], part[1], part[2], part[3])
    }

    
    let new_string = ""
    for (const buchstabe of targetWord) {
      if (buchstaben[buchstabe]) {
        new_string += buchstabe
      } else {
        new_string += "_"
      }
      new_string += " "
    }

    p.text(new_string, 80, 570);
  };

}, document.getElementById('app')!);

