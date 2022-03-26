import p5 from 'p5';

import './style.css';

var achseX = 950;
var achseY = 600;

var speed = 15;

var laserX = achseX + 45;
var laserY = achseY;

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let img: p5.Image | p5.Element;
  p.preload = function setup() {
    img = p.loadImage('Bilder/PlayerJet.jpg');
  };
  p.setup = function setup() {
    p.createCanvas(p.windowWidth - 20, p.windowHeight - 200);
  };
  //console.log (p.keyCode);
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
  p.draw = function draw() {
    /* if (p.keyIsDown(87) || p.keyIsDown(38)) {
       console.log("W");
       achseY = achseY - speed;
 
 
 
     }
     */
    if (p.keyIsDown(65) || p.keyIsDown(37)) {
      console.log("A");
      achseX = achseX - speed;

    }

    /*
    if (p.keyIsDown(83) || p.keyIsDown(40)) {
      console.log("S");
      achseY = achseY + speed;


    }
    */
    if (p.keyIsDown(68) || p.keyIsDown(39)) {
      console.log("D");
      achseX = achseX + speed;
    }





    if (achseX < 1) {
      achseX = 1
      alert("Du bist tot!")
    }

    if (achseX > p.windowWidth - 105) {
      achseX = p.windowWidth - 106
      alert("Du bist tot!")
    }



    var speedAnzeige = document.getElementById("speedAnzeige");
    speedAnzeige!.innerText = "Speed = " + speed.toString();


    p.background(0);
    p.fill(205);
    p.rect(achseX, achseY, 50, 50);
    p.image(img, achseX, achseY);


    if (laserY > 0) {

      laserShot();

      var zufallsZahl = Math.round(Math.random()*1000)
      //console.log(zufallsZahl)
      if (zufallsZahl == 69) {
        p.rect(laserX, laserY, 10, 20)
      //} else if (zufallsZahl == 420) {
     //   p.rect(laserX, laserY, 69, 69)
      } else p.rect(laserX, laserY, 5, 10)




    }

    if (p.keyIsDown(32)) {
      console.log("Shoot!")
      laserX = achseX + 45;
      laserY = achseY;

    }
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

//Leertaste ist key32
//Ziel:Shoot Laserbeams with Space

function laserShot() {
  //for (var i = 0; i < 100; i++){
  if (laserY > 0) {
    laserY = laserY - 10;
    //console.log(laserY)

  }
  //}
}
// else
//  delete
//}