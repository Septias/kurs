import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  const x = 300;
  const y = 300;

  p.setup = function setup() {
    p.createCanvas(700, 700);
  };

  
  let img = p.loadImage("https://www.pngitem.com/pimgs/m/76-767643_pixel-guy-with-gun-png-transparent-png.png")

  p.draw = function draw() {
    p.background(0);
    p.fill(205, 30, 40);
    p.rect(x, y, 50, 50);
    p.image(img, 20, 20, 50, 50)
  };
}, document.getElementById('app')!);