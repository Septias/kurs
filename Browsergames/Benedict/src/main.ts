import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let x = getRndInteger(0,500);
  let y = getRndInteger(0,500);
  let r = getRndInteger(0,255)
  let g = getRndInteger(0,255)
  let b = getRndInteger(0,255)
  let r2 = getRndInteger(0,255)
  let g2 = getRndInteger(0,255)
  let b2 = getRndInteger(0,255)
  let q = getRndInteger(0,500);
  let h = getRndInteger(0,500);
  

  p.setup = function setup() {
    p.createCanvas(this.windowWidth, this.windowHeight);
  };

  p.draw = function draw() {
    y = getRndInteger(0,500);
    x = getRndInteger(0,500);
    r = getRndInteger(0,255)
    g = getRndInteger(0,255)
    b = getRndInteger(0,255)
    r2 = getRndInteger(0,255)
    g2 = getRndInteger(0,255)
    b2 = getRndInteger(0,255)
    h = getRndInteger(0,500);
    q = getRndInteger(0,500);
    p.background(r2, g2, b2);
    p.fill(r, g, b);
    p.rect(x, y, h, q);
  };
}, document.getElementById('app')!);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
