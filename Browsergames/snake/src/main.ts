import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;



  //Randomizer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  //Background  
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight,)

  }
  //let img = p.loadImage("https://tse4.mm.bing.net/th?id=OIP.3Ig2q6rJvm_RRlAHZathMAHaEW&pid=Api")



  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_hight = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_vertikal = 0
  let respawn = false
  
  p.keyPressed = function() {
    if (p.keyCode === 32)
    respawn = true
  }

  p.keyReleased = function() {
    if (p.keyCode === 32)
    respawn = false
  }

  //Player
  let Player_Width = 90
  let Player_Hight = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertikal = p.windowHeight / 2 - Player_Hight / 2

  let lives = 3

  let alive = true



  //Movement Player
  let speed = 6
  let up = false


  p.keyPressed = function () {
    if (p.keyCode === p.UP_ARROW)
      up = true
  }

  p.keyReleased = function () {
    if (p.keyCode === p.UP_ARROW)
      up = false
  }


  //Obstacles
  let speedobstackle = 3
  let obstacle1_width = 35
  let obstacle1_hight = 35

  let obstacle_pos_horizontal = p.windowWidth + obstacle1_width
  let obstacle_pos_vertical = p.windowHeight / 2 - obstacle1_hight







  //Draw
  p.draw = function draw() {

    p.background(0, 0, 0)//img für bild
    p.textFont("Calibri")
    p.textSize(20)
    p.fill(255, 255, 255)
    p.text("Lives: " + lives, 25, 35)


    //Player
    p.fill(0, 200, 250)
    p.rect(Player_Position_Horizontal, Player_Position_Vertikal, Player_Width, Player_Hight)

    if (up == true) {
      Player_Position_Vertikal = Player_Position_Vertikal - speed
    }

    if (up == false) {
      Player_Position_Vertikal = Player_Position_Vertikal + speed
    }

    if (Player_Position_Vertikal > p.windowHeight - Player_Hight) {
      Player_Position_Vertikal = p.windowHeight - Player_Hight
    }

    if (Player_Position_Vertikal < 0) {
      Player_Position_Vertikal = 0
    }





    //Obstacles
    p.fill(600, 50, 30)
    p.rect(obstacle_pos_horizontal, obstacle_pos_vertical, obstacle1_width, obstacle1_hight)
    obstacle_pos_horizontal = obstacle_pos_horizontal - speedobstackle


    if(obstacle_pos_horizontal < 0) {
      obstacle_pos_horizontal = p.windowWidth + obstacle1_width
    }

    //console.log(obstacle_pos_vertical)



    //Damage
    if (Player_Position_Horizontal + Player_Width >= obstacle_pos_horizontal + obstacle1_width && Player_Position_Horizontal <= obstacle_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight >= obstacle_pos_vertical + obstacle1_hight && Player_Position_Vertikal <= obstacle_pos_vertical) {
        
      obstacle_pos_horizontal = p.windowWidth + obstacle1_width
        
      lives = lives - 1
      
      console.log("Damage")
      console.log(lives)
      }
    }


    //Death
    if (lives == 0) {
    alive = false  
    }

    if (alive == false) {
    p.fill(0,0,0)
    p.rect(deathscreen_pos_horizontal,deathscreen_pos_vertikal,deathscreen_width,deathscreen_hight)
    p.fill(600, 50, 30)
    p.textSize(90)
    p.text("You Died", p.windowWidth / 2 - 90, p.windowHeight / 2)
    }
    

if(respawn == true) {
  deathscreen_pos_horizontal = 0 -deathscreen_width
  deathscreen_pos_vertikal = 0 - deathscreen_hight
}    



  }




}, document.getElementById('app')!);