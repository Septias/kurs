import p5 from 'p5';

import './style.css';

var achseX = 500;
var achseY = 250;

var speed = 5;


const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let img: p5.Image | p5.Element;
  p.preload = function setup() {
    img = p.loadImage('Bilder/PlayerJet.jpg');
  };
  p.setup = function setup() {
    p.createCanvas(1000, 500);
  };
  //console.log (p.keyCode);

  p.draw = function draw() {
    if (p.keyIsDown(87) || p.keyIsDown(38)) {
      console.log("W");
      achseY = achseY - speed;

      if (achseY < 0) {
        achseY = 0;
      }

    }

    if (p.keyIsDown(65) || p.keyIsDown(37)) {
      console.log("A");
      achseX = achseX - speed;

      if (achseX < 0) {
        achseX = 0;
      }
    }

    if (p.keyIsDown(83) || p.keyIsDown(40)) {
      console.log("S");
      achseY = achseY + speed;

      if (achseY > 450) {
        achseY = 450;
      }
    }

    if (p.keyIsDown(68) || p.keyIsDown(39)) {
      console.log("D");
      achseX = achseX + speed;

      if (achseX > 950) {
        achseX = 950;
      }
    }

    var speedAnzeige = document.getElementById("speedAnzeige");
    speedAnzeige!.innerText = "Speed = " + speed.toString();


    p.keyPressed = () => {
      if (p.keyCode == 107) {
        speed = speed + 1;
      }

      if (p.keyCode == 109) {
        speed = speed - 1;


        if (speed <= 1) {
          speed = 1;
        }

      }


    }






    p.background(0);
    p.fill(205);
    p.rect(achseX, achseY, 50, 50);


    
      p.image(img, achseX, achseY);













  }
}, document.getElementById('app')!);

var speedUP = document.getElementById('speedUP');
var slowDOWN = document.getElementById('slowDOWN');


speedUP!.onclick = function speedUpNOW() {
  speed = speed + 1;
}

slowDOWN!.onclick = function slowDownNOW() {
  speed = speed - 1;

  if (speed <= 1) {
    speed = 1;
  }
}