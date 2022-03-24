import p5 from 'p5';

import './style.css';

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let positionX=1
  let positionY=1

  let speed=2
  let colorspeed=10

  let sizeX=50
  let sizeY=50

  let borderX=400
  let borderY=400

  let farbe1=100 //rot
  let farbe2=100 //grün
  let farbe3=200 //blau

  let farbe4=100 //rot
  var farbe5=200 //grün
  let farbe6=100 //blau
  
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
    p.background(farbe1, farbe2, farbe3);
    p.fill(farbe4,farbe5,farbe6);
    p.rect(positionX, positionY, sizeX, sizeY);




    if (p.keyIsDown(ßd) && positionX<borderX-sizeX && positionY<borderY-sizeY && positionX>0 && positionY>0) {positionX = positionX + speed}
    if (p.keyIsDown(ßs) && positionX<borderX-sizeX && positionY<borderY-sizeY && positionX>0 && positionY>0) {positionY = positionY + speed}
    if (p.keyIsDown(ßa) && positionX<borderX-sizeX && positionY<borderY-sizeY && positionX>0 && positionY>0) {positionX = positionX - speed}
    if (p.keyIsDown(ßw) && positionX<borderX-sizeX && positionY<borderY-sizeY && positionX>0 && positionY>0) {positionY = positionY - speed}

    if (p.keyIsDown(ßpfeiltasterechts)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltastelinks)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}
    if (p.keyIsDown(ßpfeiltasteoben)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltasteunten)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}

    if (borderX > -1000) {speed=speed*1.002}



    
    
  };


  p.keyPressed = () => {
    console.log(p.keyCode);
    
  
    
  }


}, document.getElementById('app')!);