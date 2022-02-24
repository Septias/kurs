import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //backround
   p.setup = function setup() {
   p.createCanvas(p.windowHeight, p.windowWidth)

   }
  
 
  //Playerdata
    let Player_width = 60
    let Player_hight = 60
    let Player_position_horizontal = p.windowWidth / 2 - Player_width / 2
    let Player_position_vertikal = p.windowHeight /2 - Player_hight / 2

  //Playerspeed
  let speed = 6


  p.keyPressed = function () {
   if(p.keyCode === p.UP_ARROW)
    up = true
  
   if()

  } 



 
  //Player
  p.fill( 50, 0, 255)
  p.rect(Player_position_horizontal, Player_position_vertikal)


