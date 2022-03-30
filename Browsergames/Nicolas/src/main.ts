import p5 from 'p5';

import './style.css';

//import EnemyJet from "../Erstellung_des_Gegner_Objekts"

var achseX = 950;
var achseY = 600;

var speed = 15;

var laserX = achseX + 45;
var laserY = achseY;

var trefferJet1 = false;
var trefferJet2 = false;

var damage = 1;

var explosion = document.getElementById('explosion')

//var jet1 = new EnemyJet(x,y);
//var jet2 = new EnemyJet(x,y);


const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let img: p5.Image | p5.Element; let enemyJet: p5.Image | p5.Element;
  p.preload = function setup() {
    img = p.loadImage('Bilder/PlayerJet.jpg');
    enemyJet = p.loadImage('Bilder/EnemyJet.jpg');
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
      //console.log("A");
      achseX = achseX - speed;

    }

    /*
    if (p.keyIsDown(83) || p.keyIsDown(40)) {
      console.log("S");
      achseY = achseY + speed;


    }
    */
    if (p.keyIsDown(68) || p.keyIsDown(39)) {
      //console.log("D");
      achseX = achseX + speed;
    }





    if (achseX < 1) {
      achseX = 1
      alert("Verloren!")
      location.reload();

    }

    if (achseX > p.windowWidth - 105) {
      achseX = p.windowWidth - 106
      alert("Verloren!")
      location.reload();
    }



    var speedAnzeige = document.getElementById("speedAnzeige");
    speedAnzeige!.innerText = "Speed = " + speed.toString();


    p.background(0);
    p.fill(205);
    p.rect(achseX, achseY, 50, 50);
    p.image(img, achseX, achseY);
    if (trefferJet1 == false) {
      p.image(enemyJet, 50, 50);
    }
    if (trefferJet2 == false) {
      p.image(enemyJet, 1000, 50);
    }


    if (laserY > 0) {

      laserShot();

      var zufallsZahl = Math.round(Math.random() * 1000)
      //console.log(zufallsZahl)
      if (zufallsZahl == 69) {
        var bigLaser = p.rect(laserX, laserY, 10, 20)
        damage = 3;
        //} else if (zufallsZahl == 420) {
        //   p.rect(laserX, laserY, 69, 69)
      } else {
        var smolLaser = p.rect(laserX, laserY, 5, 10)
        damage = 1;
      }

      //smolLaser -1hp
      //bigLaser -3hp

    }

    if (p.keyIsDown(32)) {
      //console.log("Shoot!")
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
    if (trefferJet1 == false) {
      if (laserY > 50 && laserY < 150 && laserX < 150 && laserX > 50) {
        console.log("treffer!")
        trefferJet1 = true;
        explosion.currentTime = 0;

        explosion.play();
      }
    }

    if (trefferJet2 == false) {
      if (laserY > 50 && laserY < 150 && laserX < 1100 && laserX > 1000) {
        console.log("treffer!")
        trefferJet2 = true;

        explosion.currentTime = 0;

        explosion.play();
      }
    }


  }

}
  //}
// else
//  delete
//}

