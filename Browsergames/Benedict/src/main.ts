import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let x = p.windowWidth / 2 - 105
  let y = p.windowHeight / 2 - 105
  let moveleft = false
  let moveright = false
  let b = 210
  let n = 0 - b


  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };


  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      moveleft = true
    }
    if (p.keyCode === p.RIGHT_ARROW) {
      moveright = true
    }
  }
  p.keyReleased = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      moveleft = false
    }
    if (p.keyCode === p.RIGHT_ARROW) {
      moveright = false
    }
  }



  p.draw = function draw() {
    p.background(0, 0, 0);
    p.fill(2, 200, 200);
    p.rect(x, y, b, b);
    if (moveleft == true) {
      x = x - 2
      console.log(x);
      if (x <= n) {
        x = p.windowWidth
      }
    }
    if (moveright == true) {
      x = x + 2
      console.log(x);
      if (x >= p.windowWidth) {
        x = n
      }
    }
  };
}, document.getElementById('app')!);






