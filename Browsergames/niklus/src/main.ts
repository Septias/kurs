import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  const x = 150;
  const y = 350;

  p.setup = function setup() {
    p.createCanvas(500, 500);
  };

  let img = p.loadImage("bilder/bild.jpg")
  p.draw = () => {
    //p.background(0);
    //p.fill(58, 25, 70);
    //p.rect(x, y, 50, 700);
    p.image(img, 0, 0)

  if

  };
}, document.getElementById('app')!);
  

 
 

