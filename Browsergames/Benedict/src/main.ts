import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let x = p.windowWidth / 2 - 105
  let y = p.windowHeight / 2 - 105
  let moveleft = false
  let moveright = false
  /*let r = getRndInteger(0,255)
  let g = getRndInteger(0,255)
  let b = getRndInteger(0,255)
  let r2 = getRndInteger(0,255)
  let g2 = getRndInteger(0,255)
  let b2 = getRndInteger(0,255)
  let q = getRndInteger(0,500);
  let h = getRndInteger(0,500);*/
  /*(y = getRndInteger(0,500);
    x = getRndInteger(0,500);
    r = getRndInteger(0,255)
    g = getRndInteger(0,255)
    b = getRndInteger(0,255)
    r2 = getRndInteger(0,255)
    g2 = getRndInteger(0,255)
    b2 = getRndInteger(0,255)
    h = getRndInteger(0,500);
    q = getRndInteger(0,500);*/

  p.setup = function setup() {
    p.createCanvas(this.windowWidth, this.windowHeight);
  };


  p.keyPressed = function () {
    if(p.keyCode === p.LEFT_ARROW) {
      moveleft = true
    }
    
  }
  p.keyReleased = function() {
    if(p.keyCode === p.LEFT_ARROW) {
      moveleft = false
    }
  }
  p.keyPressed = function () {
    if(p.keyCode === p.LEFT_ARROW) {
      moveleft = true
    }
    
  }
  p.keyReleased = function() {
    if(p.keyCode === p.LEFT_ARROW) {
      moveleft = false
    }
  }

  p.draw = function draw() {
    p.background(0, 0, 0);
    p.fill(2, 200, 200);
    p.rect(x, y, 210, 210);
    if(moveleft == true){
      x=x-2
      console.log(x);
      if(x<=-300){
        x=this.windowWidth
      } 
    }
    if(moveleft == true){
      x=x-2
      console.log(x);
      if(x<=-300){
        x=this.windowWidth
      } 
    }
  };
}, document.getElementById('app')!);

function getRndInteger(min:any, max:any) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
                                