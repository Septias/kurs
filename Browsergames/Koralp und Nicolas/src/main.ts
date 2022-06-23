import p5 from 'p5';
import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;















  p.setup = function setup() {
    p.createCanvas(400,400)
    
  };

  p.keyPressed = () => {

  }


  p.draw = function draw() {
    p.background(0,255,0);

    p.fill(100, 100, 100)
    p.rect(200, 0, 50, 50)
  }

    console.log(this.keyPressed)
  };

 document.getElementById('app')!);


