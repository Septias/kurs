import p5 from 'p5';
import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  p.setup = function setup() {
    p.createCanvas(10,10)
    p.createCanvas(10,10)
    p.background("red")
  };

  p.keyPressed = () => {

  }


  p.draw = function draw() {
    p.background(0);



  };

}, document.getElementById('app')!);

