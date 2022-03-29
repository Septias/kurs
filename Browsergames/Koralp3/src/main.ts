import p5 from 'p5';

import './style.css';

const app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let borderX = 400
  let borderY = 400





  let BG1 = 200
  let BG2 = 200
  let BG3 = 200

  let P1 = 100
  let P2 = 100
  let P3 = 100

  let O1 = 0
  let O2 = 0
  let O3 = 0

  let PpX = 100
  let PpY = 100

  let PsX = 100
  let PsY = 100
  
  
  
  var BGcolor = p.background(BG1, BG2, BG3)
  var playercolor = p.fill(P1, P2, P3)
  var obstaclecolor = p.fill(O1, O2, O3)

  var BGsize = p.createCanvas(borderX=borderX-1, borderY=borderY-1)
  var playersize = p.rect(PpX, PpY, PsX, PsY)

    
  p.setup = function setup() {
    p.createCanvas(borderX, borderY);
  };


  p.draw = function draw() {BGcolor;playercolor;p.rotate(0.0)}






})