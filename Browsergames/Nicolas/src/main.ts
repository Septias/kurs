import p5 from 'p5';

import './style.css';

var achseX = 50;
var achseY = 50;

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;



  p.setup = function setup() {
    p.createCanvas(500, 500);
  };
  p.keyPressed = () => {
    //console.log (p.keyCode);





  };
  p.draw = function draw() {



    if (p.keyIsDown(87) || p.keyIsDown(38)) {
      console.log("W");
      achseY = achseY + 1;
    }

    if (p.keyIsDown(65) || p.keyIsDown(37)) {
      console.log("A");
      achseX = achseX - 1;
    }

    if (p.keyIsDown(83) || p.keyIsDown(40)) {
      console.log("S");
      achseY = achseY - 1;
    }

    if (p.keyIsDown(87) || p.keyIsDown(39)) {
      console.log("D");
      achseX = achseX + 1;
    }

    p.keyIsDown(87)

    p.background(0);
    p.fill(205);
    p.rect(achseX, achseY, 50, 50);






  };

}, document.getElementById('app')!);


