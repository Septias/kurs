import p5 from 'p5';

import './style.css';


const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;



  p.setup = function setup() {
    p.createCanvas(500,500);
  };

  p.draw = function draw() {
    
    }



}, document.getElementById('app')!);
