import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let x = p.windowWidth / 2 - 105
  let y = p.windowHeight / 2 - 105
  let moveleft = false
  let moveright = false
  let moveup = false
  let movedown = false
  let b = 210
  let c = 210
  let n = 0 - b
  let m = 0 - c


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
    if (p.keyCode === p.UP_ARROW) {
      moveup = true
    }
    if (p.keyCode === p.DOWN_ARROW) {
      movedown = true
    }
    
  }
  p.keyReleased = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      moveleft = false
    }
    if (p.keyCode === p.RIGHT_ARROW) {
      moveright = false
    }
    if (p.keyCode === p.UP_ARROW) {
      moveup = false
    }
    if (p.keyCode === p.DOWN_ARROW) {
      movedown = false
    }
  }



  p.draw = function draw() {
    p.background(0, 0, 0);
    p.fill(2, 200, 200);
    p.rect(x, y, b, c);
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
    if (moveup == true) {
      y = y - 2
      console.log(y);
      if (y <= m) {
        y = p.windowHeight
      }
    }
    if (movedown == true) {
      y = y + 2
      console.log(y);
      if (y >= p.windowHeight) {
        y = m
      }
    }
  };




}, document.getElementById('app')!);





