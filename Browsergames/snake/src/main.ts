import p5, { Vector } from 'p5';

import './style.css';

//Obstacles
let speed_obstackle = 4
let spawntrigger = true

//Obstacle Size
let obstacle1_width = 35
let obstacle1_height = 35

let obstackle2_width = 35
let obstackle2_height = 35


  //Randomizer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  //Background  
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight,)
    
  }
  
  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_height = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_vertikal = 0
  let space = false

  //Player
  let Player_Width = 90
  let Player_height = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertikal = p.windowHeight / 2 - Player_height / 2
  let lives = 3

  //Movement Player
  let speed = 6
  let up = false


  p.keyPressed = function () {
    if (p.keyCode === p.UP_ARROW)
      up = true

    if (p.keyCode === 32) {
      space = true
    }
  }

  p.keyReleased = function () {
    if (p.keyCode === p.UP_ARROW) {
      up = false
    }

    if (p.keyCode === 32) {
      space = false
    }
  }

  let obstacles: Obstacle[] = []


  //Draw
  p.draw = function draw() {
    if (spawntrigger == true) {
      //obstacle_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle_spawn_area_vertical)
      obstacles.push(createObstacle(p.windowHeight, p.windowWidth))
    }

    console.log(space)

    p.background(0, 0, 0)//img für bild
    p.textFont("Calibri")
    p.textSize(20)
    p.fill(255, 255, 255)
    p.textAlign(p.LEFT)
    p.text("Lives: " + lives, 25, 35)


    //Player
    p.fill(0, 200, 250)
    p.rect(Player_Position_Horizontal, Player_Position_Vertikal, Player_Width, Player_height)

    if (up == true) {
      Player_Position_Vertikal = Player_Position_Vertikal - speed
    }

    if (up == false) {
      Player_Position_Vertikal = Player_Position_Vertikal + speed
    }

    if (Player_Position_Vertikal > p.windowHeight - Player_height) {
      Player_Position_Vertikal = p.windowHeight - Player_height
    }

    if (Player_Position_Vertikal < 0) {
      Player_Position_Vertikal = 0
    }


    //Obstacles
    p.fill(255, 50, 30)

    //p.rect(obstacle_pos_horizontal, obstacle_pos_vertical, obstacle1_width, obstacle1_height)
    // obstacle_pos_horizontal = obstacle_pos_horizontal - speed_obstackle


    for (const obstacle of obstacles) {
      obstacle.update()
      obstacle.draw()
      if (obstacle.collide(/* spielerposition */)) {

      }
    }


    //Damage
    /*if (Player_Position_Horizontal + Player_Width >= obstacle_pos_horizontal + obstacle1_width && Player_Position_Horizontal <= obstacle_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height >= obstacle_pos_vertical + obstacle1_height && Player_Position_Vertikal <= obstacle_pos_vertical) {

        spawntrigger = true

        obstacle_pos_horizontal = p.windowWidth + obstacle1_width

        lives = lives - 1

        console.log("Damage")
        console.log(lives)
      }
    }*/


    //Death
    if (lives == 0) {
      p.fill(0, 0, 0)
      p.rect(deathscreen_pos_horizontal, deathscreen_pos_vertikal, deathscreen_width, deathscreen_height)
      p.fill(600, 50, 30)
      p.textSize(90)
      p.textAlign(p.CENTER)
      p.text("You Died", p.windowWidth / 2, p.windowHeight / 2)


      if (space == true) {
        lives = 3
      }
    }
  }
}, document.getElementById('app')!);


class Obstacle {

  constructor(private position: [number, number], private speed: number) {}

  draw() {

  }

  update() {

  }

  collide(): boolean {
    return true
  }
}


function createObstacle(windowHeight: number, windowWidth: number) {
  let obstacle_spawn_area_vertical = windowHeight - obstacle1_height / 2
  let x =  windowWidth + obstacle1_width
  let y = getRndInteger(0 - obstacle1_height / 2, obstacle_spawn_area_vertical)
  
  return new Obstacle([x, y], speed_obstackle)
}