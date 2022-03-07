import p5 from 'p5';

import './style.css';

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let axisX=0
  let axisY=0

  let speed=1
  let colorspeed=10

  let sizeX=100
  let sizeY=200

  let farbe1=0 //rot
  let farbe2=0 //grün
  let farbe3=0 //blau

  let farbe4=0 //rot
  var farbe5=0 //grün
  let farbe6=0 //blau
  
  let ßw=87
  let ßa=65
  let ßs=83
  let ßd=68
  let ßpfeiltasterechts=39
  let ßpfeiltastelinks=37
  let ßpfeiltasteoben=38
  let ßpfeiltasteunten=40

  p.setup = function setup() {
    p.createCanvas(400, 400);
  };

  p.draw = function draw() {
    p.background(farbe1, farbe2, farbe3);
    p.fill(farbe4,farbe5,farbe6);
    p.rect(axisX, axisY, sizeX, sizeY);


    if (p.keyIsDown(ßd)) {axisX = axisX + speed}
    if (p.keyIsDown(ßs)) {axisY = axisY + speed}
    if (p.keyIsDown(ßa)) {axisX = axisX - speed}
    if (p.keyIsDown(ßw)) {axisY = axisY - speed}

    if (p.keyIsDown(ßpfeiltasterechts)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltastelinks)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}
    if (p.keyIsDown(ßpfeiltasteoben)) {farbe4 = farbe4 +colorspeed; farbe5 = farbe5 +colorspeed; farbe6 = farbe6 +colorspeed}
    if (p.keyIsDown(ßpfeiltasteunten)) {farbe4 = farbe4 -colorspeed; farbe5 = farbe5 -colorspeed; farbe6 = farbe6 -colorspeed}



  };

  

  p.keyPressed = () => {
    console.log(p.keyCode);
    
  
    
  }


}, document.getElementById('app')!);
