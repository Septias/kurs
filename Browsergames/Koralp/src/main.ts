import p5 from 'p5';

import './style.css';

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let gamerunning = 1
  let gamepaused = -1
  let gametimer = 0
  let directionswitchthreshhold = 100
  let fullscreen = true
  let sqrt0point5 = 0.707106781

  let windowdistanceX = 100
  let windowdistanceY = 100

  let positionX=1
  let positionY=1

  let score = 1
  let speed = 1
  let diagonalspeedfactor = 0.707106781 - 1
  let roundspeed = 1
  let colorspeed = 10
  let acceleration = 0.002 - gametimer/1000

  let sizeX=50
  let sizeY=50

  let borderX = 1000
  let borderY = 1000

  if (fullscreen = true) {let borderX=window.innerWidth - windowdistanceX; let borderY=window.innerHeight - windowdistanceY}
  if (fullscreen = false) {let borderX=1000; let borderY=1000}
 

  let farbe1=100 //rot
  let farbe2=100 //grün
  let farbe3=200 //blau

  let farbe4=100 //rot
  var farbe5=200 //grün
  let farbe6=100 //blau
  
  let ORIGINALhlsvalue = 0
  let hslvalue = 100

  let colorcycleduration = 100

  let ßp=80

  let ßw=87
  let ßa=65
  let ßs=83
  let ßd=68
  let ßpfeiltasterechts=39
  let ßpfeiltastelinks=37
  let ßpfeiltasteoben=38
  let ßpfeiltasteunten=40

  let ßr=82

  let ßzirkumflex=220

  p.setup = function setup() {
    p.createCanvas(borderX=borderX-1, borderY=borderY-1);
  };

  p.draw = function draw() {
    var roundedSpeed = Math.round(speed) *roundspeed;

    var speedanzeige = document.getElementById("speedanzeige");
    speedanzeige!.innerText = "speed ~ " + roundedSpeed.toString();

   
    hslvalue = ORIGINALhlsvalue - speed
    

    speedanzeige!.style.color = `hsl(${(hslvalue*360)/colorcycleduration}, 100%, 30%)`;

    
    




    var roundedScore = Math.round(score) * 1;

    var scorevalue = document.getElementById("score");
    scorevalue!.innerText = "score: " + roundedScore.toString();


    


    p.background(farbe1, farbe2, farbe3);
    p.fill(farbe4,farbe5,farbe6);
    p.rect(positionX, positionY, sizeX, sizeY);


    gametimer = gametimer + 1
    acceleration = acceleration - gametimer/(this.pow(10,8))
    if (gametimer == directionswitchthreshhold) {speed = speed*(-1); gametimer = gametimer - directionswitchthreshhold}


    if (p.keyIsDown(ßp) && gamepaused < 0) {alert("Your game is paused. Press OK to unpause."); gamepaused = gamepaused - 2}
    if (p.keyIsDown(ßp) && gamepaused > 0) {gamepaused = gamepaused + 2}
    

    if (p.keyIsDown(ßd) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX + speed}
    if (p.keyIsDown(ßs) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionY = positionY + speed}
    if (p.keyIsDown(ßa) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX - speed}
    if (p.keyIsDown(ßw) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionY = positionY - speed}

    if (p.keyIsDown(ßs) && p.keyIsDown(ßd) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX + speed*diagonalspeedfactor; positionY = positionY + speed*diagonalspeedfactor}
    if (p.keyIsDown(ßs) && p.keyIsDown(ßa) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX - speed*diagonalspeedfactor; positionY = positionY + speed*diagonalspeedfactor}
    if (p.keyIsDown(ßw) && p.keyIsDown(ßs) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX - speed*diagonalspeedfactor; positionY = positionY - speed*diagonalspeedfactor}
    if (p.keyIsDown(ßw) && p.keyIsDown(ßd) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX + speed*diagonalspeedfactor; positionY = positionY - speed*diagonalspeedfactor}

    if (p.keyIsDown(ßpfeiltasterechts)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltastelinks)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}
    if (p.keyIsDown(ßpfeiltasteoben)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltasteunten)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}

    if (borderX > -1000 && gamerunning > 0) {speed=speed+speed*acceleration;}
    if (borderX > -1000) {console.log(acceleration)}
    
    const YouDied = "You died! Refresh to play again!"
    
    if (positionX<0-speed && p.keyIsDown(ßa) && gamerunning>0) {alert(YouDied);(gamerunning = gamerunning -2)}
    if (positionX>borderX-sizeX+speed && p.keyIsDown(ßd) && gamerunning>0) {alert(YouDied);(gamerunning = gamerunning -2)}
    if (positionY<0-speed && p.keyIsDown(ßw) && gamerunning>0) {alert(YouDied);(gamerunning = gamerunning -2)} 
    if (positionY>borderY-sizeY+speed && p.keyIsDown(ßs) && gamerunning>0) {alert(YouDied);(gamerunning = gamerunning -2)}

    if (speed == Infinity) {alert("WTF ARE YOU DOING ???!!!")}

    if (p.keyIsDown(ßw) && gamerunning > 0) {score = score + this.sqrt(this.sq(speed))}
    if (p.keyIsDown(ßa) && gamerunning > 0) {score = score + this.sqrt(this.sq(speed))}
    if (p.keyIsDown(ßs) && gamerunning > 0) {score = score + this.sqrt(this.sq(speed))}
    if (p.keyIsDown(ßd) && gamerunning > 0) {score = score + this.sqrt(this.sq(speed))}




    if (p.keyIsDown(89) && p.keyIsDown(88)) {console.log("hehe")}







git 
    
  }


}, document.getElementById('app')!);