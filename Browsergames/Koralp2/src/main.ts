import p5 from 'p5';

import './style.css';

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let gamerunning = 1

  let score = 1
  let speed = 1
  let colorspeed = 10

  let positionX=100
  let positionY=100

  let sizeX=50
  let sizeY=50

  let positionX1=1000
  let positionY1=1000

  let sizeX1=5000
  let sizeY1=500

  let borderX=10000
  let borderY=2000

  let farbe1=50 //rot
  let farbe2=50 //grün
  let farbe3=200 //blau



  let farbe4=100 //rot
  var farbe5=200 //grün
  let farbe6=100 //blau
  
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
    var roundedSpeed = Math.round(speed) * 1;

    var speedanzeige = document.getElementById("speedanzeige");
    speedanzeige!.innerText = "speed ~ " + roundedSpeed.toString();


    var roundedScore = Math.round(score) * 1;

    var scorevalue = document.getElementById("score");
    scorevalue!.innerText = "score: " + roundedScore.toString();


    


    p.background(farbe1, farbe2, farbe3);
    p.fill(farbe4,farbe5,farbe6);
    p.rotate(0.0)

    p.rect(positionX1, positionY1, sizeX1, sizeY1)
    p.rect(positionX, positionY, sizeX, sizeY)


    if (p.keyIsDown(ßp)) {alert("Your game is paused. Press OK to unpause.");}

    if (p.keyIsDown(ßd) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX + speed}
    if (p.keyIsDown(ßs) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionY = positionY + speed}
    if (p.keyIsDown(ßa) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionX = positionX - speed}
    if (p.keyIsDown(ßw) && positionX<borderX-sizeX+speed && positionY<borderY-sizeY+speed && positionX>0-speed && positionY>0-speed) {positionY = positionY - speed}

    if (p.keyIsDown(ßpfeiltasterechts)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltastelinks)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}
    if (p.keyIsDown(ßpfeiltasteoben)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltasteunten)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}

    if (borderX > -1000 && gamerunning > 0) {speed=speed+speed*0.002 ; score=Math.pow(1.002,speed); positionX1=positionX1-speed}
    if (borderX > -1000) {console.log(gamerunning); }
    
    const YouDied = "You died! Refresh to play again!"
    
    if (positionX<0-speed && p.keyIsDown(ßa)) {alert(YouDied);(gamerunning = gamerunning -2)}
    if (positionX>borderX-sizeX+speed && p.keyIsDown(ßd)) {alert(YouDied);(gamerunning = gamerunning -2)}
    if (positionY<0-speed && p.keyIsDown(ßw)) {alert(YouDied);(gamerunning = gamerunning -2)} 
    if (positionY>borderY-sizeY+speed && p.keyIsDown(ßs)) {alert(YouDied);(gamerunning = gamerunning -2)}

    if (speed == Infinity) {alert("WTF ARE YOU DOING ???!!!")}
  };


  p.keyPressed = () => {
    console.log(p.keyCode);
    
  
    
  }


}, document.getElementById('app')!);