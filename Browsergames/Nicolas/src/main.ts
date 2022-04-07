import p5 from 'p5';

import './style.css';

//import EnemyJet from "./classEnemyJet"
//const EnemyJet = REQUIRE_OR_IMPORT("./classEnemyJet");

var achseX = 950;
var achseY = 600;

var speed = 15;

var laserX = achseX + 45;
var laserY = achseY;




var cooldown = 0;
var jetAppearsIn = 1000;








//EnemyJet Class
class EnemyJet {
  hitpoints: number;
  enemyX: number;
  enemyY: number;
  constructor(x: number, y: number) {
    this.hitpoints = 5
    this.enemyX = x
    this.enemyY = y
  }
  hitByLaser(laserX: number, laserY: number, damage: number):boolean {
    if (laserX > this.enemyX && laserX < this.enemyX + 100 && laserY > this.enemyY + 85 && laserY < this.enemyY + 100) {
      console.log("TREFFER!");
      this.hitpoints = this.hitpoints - damage;
      console.log(this.hitpoints)
      return true;
    }
    return false;
  }
  isAlive(): boolean {
    return this.hitpoints > 0
  }
}

//Projectile Class
class Projectile {
  damage: number;
  sizeX: number;
  sizeY: number;
  posY: number;
  posX: number;
  isHit: boolean;
  constructor(positionX: number, positionY: number) {
    this.posX = positionX;
    this.posY = positionY;
    var zufallsZahl = Math.round(Math.random() * 100)
    if (zufallsZahl == 69) {
      this.damage = 3;
      this.sizeX = 10;
      this.sizeY = 20;
    } else {
      this.damage = 1;
      this.sizeX = 5;
      this.sizeY = 10;
    }
    this.isHit = false;
  }
  isVisible(): boolean{
    if(this.posY<=0){
      return false;
    }
    if(this.isHit){
    return false;
    }
    return true;
  }

  move(){
    this.posY = this.posY -10;
  }

  hit(){
    this.isHit = true;
  }
}








//var explosion = document.getElementById('explosion') as HTMLAudioElement;
//var eXplosion = document.getElementById('exploAnimation')


var jet1 = new EnemyJet(50, 50);
var jet2 = new EnemyJet(1000, 50);
var jet3 = new EnemyJet(525, 50);
var jets = [jet1, jet2, jet3];

var projectiles: Array<Projectile> = [];


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

    if (p.keyIsDown(27)) {
      alert("Spiel pausiert. Zum Weiterspielen, drück Ok")
    }



    if (achseX < 1) {
      achseX = 1
      alert("Cringe! Du hast verloren")
      location.reload();

    }

    if (achseX > p.windowWidth - 105) {
      achseX = p.windowWidth - 106
      alert("Lern mal steuern!")
      location.reload();
    }



    var speedAnzeige = document.getElementById("speedAnzeige");
    speedAnzeige!.innerText = "Speed = " + speed.toString();


    p.background(0);
    p.fill(205);
    p.rect(achseX, achseY, 50, 50);
    p.image(img, achseX, achseY);







      if (jet1.isAlive()) {
        p.image(enemyJet, jet1.enemyX, jet1.enemyX);
      }
      if(jet2.isAlive()){
        p.image(enemyJet, jet2.enemyX, jet2.enemyY)
      }
      if(jet3.isAlive()){
        p.image(enemyJet, jet3.enemyX, jet3.enemyY)
      }
    

    if (laserY > 0) {

    for(var i = 0; i < projectiles.length; i++){
    var proj = projectiles[i];
    proj.move();
    var isJet1Hit = jet1.hitByLaser(proj.posX, proj.posY, proj.damage);
    var isJet2Hit = jet2.hitByLaser(proj.posX, proj.posY, proj.damage);
    var isJet3Hit = jet3.hitByLaser(proj.posX, proj.posY, proj.damage);

    if(isJet1Hit || isJet2Hit||isJet3Hit){
      proj.hit();
    }
    if(proj.isVisible()){
    p.rect(proj.posX, proj.posY, proj.sizeX, proj.sizeY)
    }
  }

  /* for(var l = 0; l < projectiles.length; l++){

  } */



      //smolLaser -1hp
      //bigLaser -3hp


    }

    if (p.keyIsDown(32)) {
      if(cooldown == 0){
      //console.log("Shoot!")
      laserX = achseX + 45;
      laserY = achseY;
      var p1 = new Projectile(laserX,laserY);
      projectiles.push(p1);
      console.log(projectiles.length);
      cooldown = 10;
      }else{
        cooldown = cooldown -1;
      }
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
 





    /* if (trefferJet1 == false) {
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
 */



  //}
// else
//  delete
//}

