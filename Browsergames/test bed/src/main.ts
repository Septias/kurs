import p5, { Vector } from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Background
  p.setup = function setup() {
    p.frameRate(240)
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  //Player
  let Player_Width = 100
  let Player_Height = 100
  let Player_Pos_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Pos_Vertikal = p.windowHeight / 2 - Player_Height / 2
  let up = false
  let down = false
  let right = false
  let left = false

  //Bullet
  //Vector ist die Position der bullet
  let location_bullet = p.createVector(p.windowWidth / 2, p.windowHeight / 2)
  
  //Keys
  p.keyPressed = function keyPressed() {
    if(p.keyCode == 38) {
      up = true
    }
    if(p.keyCode == 40) {
      down = true
    }
    if(p.keyCode == 39) {
      right = true
    }
    if(p.keyCode == 37) {
      left = true
    }
  }
  p.keyReleased = function keyReleased() {
    if(p.keyCode == 38) {
      up = false
    }
    if(p.keyCode == 40) {
      down = false
    }
    if(p.keyCode == 39) {
      right = false
    }
    if(p.keyCode == 37) {
      left = false
    }
  }
  
  //Mouse
  let click = false
  p.mouseClicked = function mouseClicked() {
    click = true
  }
  p.mouseReleased = function mouseReleased() {

  }


  p.draw = function draw() {

   //Background
   p.background(0,0,0)
   
   if(click == true) {
   //Bullet
   //Vector ist die Position des Cursors
   let target = p.createVector(p.mouseX, p.mouseY)

   //Berechnet die Richtung des Zielvektors (hier also des Cursors) zur Bullet. Sozusagen das Zielsystem.
   target.sub(location_bullet)

   //?? Setzt die länge des Vektors auf 1, kp was das bedeutet, ist aber wichtig
   target.normalize()

   //??
   location_bullet.add(target)
   
   p.rect(location_bullet.x, location_bullet.y, 50, 50)
   }

   //Player
   p.rect(Player_Pos_Horizontal, Player_Pos_Vertikal, Player_Width, Player_Height)
   p.fill(150, 150, 100)
   if(up == true) {
   Player_Pos_Vertikal = Player_Pos_Vertikal - 6
   }
   if(down == true) {
   Player_Pos_Vertikal = Player_Pos_Vertikal + 6
   }
   if(right == true) {
   Player_Pos_Horizontal = Player_Pos_Horizontal + 6
   }
   if(left == true) {
   Player_Pos_Horizontal = Player_Pos_Horizontal - 6
   }
   if(Player_Pos_Horizontal >= p.windowWidth - Player_Width){
   Player_Pos_Horizontal = p.windowWidth - Player_Width
   }
   if(Player_Pos_Horizontal <= p.windowWidth - p.windowWidth){
   Player_Pos_Horizontal = p.windowWidth - p.windowWidth
   }
   if(Player_Pos_Vertikal >= p.windowHeight - Player_Height){
   Player_Pos_Vertikal = p.windowHeight - Player_Height
   }
   if(Player_Pos_Vertikal <= p.windowHeight - p.windowHeight){
   Player_Pos_Vertikal = p.windowHeight - p.windowHeight
   }
  }
}, document.getElementById('app')!);
