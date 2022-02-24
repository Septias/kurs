import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  const x = 0;
  const y = 48;

  var farbe1=50 //rot
  var farbe2=0 //grün
  var farbe3=50 //blau

  var farbe4=255 //rot
  var farbe5=125 //grün
  var farbe6=125 //blau
  
  var axisX=1
  var axisY=2
  

  var ßw=87
  var ßa=65
  var ßs=83
  var ßd=68
  var ßpfeiltasterechts=39
  var ßpfeiltastelinks=37
  var ßpfeiltasteoben=38
  var ßpfeiltasteunten=40

  p.setup = function setup() {
    p.createCanvas(64, 64);
  };

  p.draw = function draw() {
    p.background(farbe1, farbe2, farbe3);
    p.fill(farbe4,farbe5,farbe6);
    p.rect(x, y, 16, 16);
  };

  p.keyPressed = () => {
    console.log(p.keyCode);
    
    if (p.keyCode == ßpfeiltasterechts) {farbe4 = farbe4 +50}
    if (p.keyCode == ßpfeiltastelinks) {farbe4 = farbe4 -50}
    if (p.keyCode == ßpfeiltasteoben) {farbe1 = 250}
    if (p.keyCode == ßpfeiltasteunten) {farbe1 = 0}
    
    if (p.keyCode == ßd) {axisX = axisX + 10}
    if (p.keyCode == ßa) {axisY = axisY + 10}
    if (p.keyCode == ßw) {axisX = axisX - 10}
    if (p.keyCode == ßs) {axisY = axisY - 10}
    if (p.keyCode == ßd;ßw) {axisX = axisX + 10; axisY = axisY + 10}
    if (p.keyCode == ßd;ßs) {axisY = axisY + 10; axisY = axisY - 10}
    if (p.keyCode == ßa;ßw) {axisX = axisX - 10; axisY = axisY + 10}
    if (p.keyCode == ßa;ßs) {axisY = axisY - 10; axisY = axisY - 10}
    
  }


}, document.getElementById('app')!);
