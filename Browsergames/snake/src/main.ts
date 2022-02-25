import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  //Obstacle 1
  let obstacle1_width = 35
  let obstacle1_hight = 35
  let spawntrigger1 = true
  let rnd_number1 = p.random(200)
  let rnd_speed1 = p.random(3, 5)
  let obstacle1_spawn_pos_horizontal = p.windowWidth + obstacle1_width + rnd_number1 * 2
  let obstacle1_spawn_area_vertical = p.windowHeight - obstacle1_hight / 2
  let obstacle1_pos_horizontal = obstacle1_spawn_pos_horizontal
  let obstacle1_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)

  //Obstacle 2
  let obstacle2_width = 35
  let obstacle2_hight = 35
  let spawntrigger2 = true
  let rnd_number2 = p.random(200)
  let rnd_speed2 = p.random(3, 5)
  let obstacle2_spawn_pos_horizontal = p.windowWidth + obstacle2_width + rnd_number2 * 2
  let obstacle2_spawn_area_vertical = p.windowHeight - obstacle2_hight / 2
  let obstacle2_pos_horizontal = obstacle2_spawn_pos_horizontal
  let obstacle2_pos_vertical = getRndInteger(0 - obstacle2_hight / 2, obstacle2_spawn_area_vertical)

  //Obstacle 3
  let obstacle3_width = 35
  let obstacle3_hight = 35
  let spawntrigger3 = true
  let rnd_number3 = p.random(200)
  let rnd_speed3 = p.random(3, 5)
  let obstacle3_spawn_pos_horizontal = p.windowWidth + obstacle3_width + rnd_number3 * 2
  let obstacle3_spawn_area_vertical = p.windowHeight - obstacle3_hight / 2
  let obstacle3_pos_horizontal = obstacle3_spawn_pos_horizontal
  let obstacle3_pos_vertical = getRndInteger(0 - obstacle3_hight / 2, obstacle3_spawn_area_vertical)

  //Obstacle 4
  let obstacle4_width = 35
  let obstacle4_hight = 35
  let spawntrigger4 = true
  let rnd_number4 = p.random(200)
  let rnd_speed4 = p.random(3, 5)
  let obstacle4_spawn_pos_horizontal = p.windowWidth + obstacle4_width + rnd_number4 * 2
  let obstacle4_spawn_area_vertical = p.windowHeight - obstacle4_hight / 2
  let obstacle4_pos_horizontal = obstacle4_spawn_pos_horizontal
  let obstacle4_pos_vertical = getRndInteger(0 - obstacle4_hight / 2, obstacle4_spawn_area_vertical)

  //Obstacle 5
  let obstacle5_width = 35
  let obstacle5_hight = 35
  let spawntrigger5 = true
  let rnd_number5 = p.random(200)
  let rnd_speed5 = p.random(3, 5)
  let obstacle5_spawn_pos_horizontal = p.windowWidth + obstacle5_width + rnd_number5 * 2
  let obstacle5_spawn_area_vertical = p.windowHeight - obstacle5_hight / 2
  let obstacle5_pos_horizontal = obstacle5_spawn_pos_horizontal
  let obstacle5_pos_vertical = getRndInteger(0 - obstacle5_hight / 2, obstacle5_spawn_area_vertical)

  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_hight = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_vertikal = 0
  let space = false

  //Menu
  let menu = false
  let enemy_width = 25
  let enemy_height = 25
  let enemy_pos_horiozontal = p.windowWidth / 2 - 45
  let enemy_pos_vertical = p.windowHeight / 2 - 88

  //Music
  let mySound;

  //Player
  let Player_Width = 90
  let Player_Hight = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertikal = p.windowHeight / 2 - Player_Hight / 2
  let lives = 3
  let speed = 6
  let up = false
  let hit = false

  //Randomizer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*function preload() {
    p.soundFormats('mp3', 'ogg');
    mySound = p.loadSound('assets/doorbell');
  }*/

  //Background  
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight,)
  }
  //let img = p.loadImage("https://tse4.mm.bing.net/th?id=OIP.3Ig2q6rJvm_RRlAHZathMAHaEW&pid=Api")

  //Keys
  p.keyPressed = function () {
    if (p.keyCode === p.UP_ARROW)
      up = true
    if (p.keyCode === 32) {
      space = true
    }
    if (p.keyCode === 27) {
      menu = true
    }
  }

  p.keyReleased = function () {
    if (p.keyCode === p.UP_ARROW) {
      up = false
    }
    if (p.keyCode === 32) {
      space = false
    }
    if (p.keyCode === 27)
      menu = false
  }



  //Draw
  p.draw = function draw() {

    //Spawn
    if (spawntrigger1 == true) {
      obstacle1_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger2 == true) {
      obstacle2_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger3 == true) {
      obstacle3_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger4 == true) {
      obstacle4_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger5 == true) {
      obstacle5_pos_vertical = getRndInteger(0 - obstacle1_hight / 2, obstacle1_spawn_area_vertical)
    }

    p.background(0, 0, 0)//img für bild


    //Player
    if (hit == true) {
      p.fill(255, 215, 0)
    }
    if (hit == false) {
      p.fill(0, 200, 250)
    }
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

    //Obstacle 1
    p.fill(600, 50, 30)
    p.rect(obstacle1_pos_horizontal, obstacle1_pos_vertical, obstacle1_width, obstacle1_hight)
    obstacle1_pos_horizontal = obstacle1_pos_horizontal - rnd_speed1
    if (obstacle1_pos_horizontal > 0) {
      spawntrigger1 = false
    }
    if (obstacle1_pos_horizontal < 0) {
      obstacle1_pos_horizontal = p.windowWidth + obstacle1_width
      spawntrigger1 = true
    }

    //Obstacle 2
    p.fill(600, 50, 30)
    p.rect(obstacle2_pos_horizontal, obstacle2_pos_vertical, obstacle2_width, obstacle2_hight)
    obstacle2_pos_horizontal = obstacle2_pos_horizontal - rnd_speed2
    if (obstacle2_pos_horizontal > 0) {
      spawntrigger2 = false
    }
    if (obstacle2_pos_horizontal < 0) {
      obstacle2_pos_horizontal = p.windowWidth + obstacle2_width
      spawntrigger2 = true
    }

    //Obstacle 3
    p.fill(600, 50, 30)
    p.rect(obstacle3_pos_horizontal, obstacle3_pos_vertical, obstacle3_width, obstacle3_hight)
    obstacle3_pos_horizontal = obstacle3_pos_horizontal - rnd_speed3
    if (obstacle3_pos_horizontal > 0) {
      spawntrigger3 = false
    }
    if (obstacle3_pos_horizontal < 0) {
      obstacle3_pos_horizontal = p.windowWidth + obstacle3_width
      spawntrigger3 = true
    }

    //Obstacle 4
    p.fill(600, 50, 30)
    p.rect(obstacle4_pos_horizontal, obstacle4_pos_vertical, obstacle4_width, obstacle4_hight)
    obstacle4_pos_horizontal = obstacle4_pos_horizontal - rnd_speed4
    if (obstacle4_pos_horizontal > 0) {
      spawntrigger4 = false
    }
    if (obstacle4_pos_horizontal < 0) {
      obstacle4_pos_horizontal = p.windowWidth + obstacle4_width
      spawntrigger4 = true
    }

    //Obstacle 5
    p.fill(600, 50, 30)
    p.rect(obstacle5_pos_horizontal, obstacle5_pos_vertical, obstacle5_width, obstacle5_hight)
    obstacle5_pos_horizontal = obstacle5_pos_horizontal - rnd_speed5
    if (obstacle5_pos_horizontal > 0) {
      spawntrigger5 = false
    }
    if (obstacle5_pos_horizontal < 0) {
      obstacle5_pos_horizontal = p.windowWidth + obstacle5_width
      spawntrigger5 = true
    }

    //Damage 1
    if (Player_Position_Horizontal + Player_Width > obstacle1_pos_horizontal + obstacle1_width && Player_Position_Horizontal < obstacle1_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight > obstacle1_pos_vertical + obstacle1_hight && Player_Position_Vertikal < obstacle1_pos_vertical) {
        obstacle1_pos_horizontal = p.windowWidth + obstacle1_width
        lives = lives - 1
        spawntrigger1 = true
        hit = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 2
    if (Player_Position_Horizontal + Player_Width > obstacle2_pos_horizontal + obstacle2_width && Player_Position_Horizontal < obstacle2_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight > obstacle2_pos_vertical + obstacle2_hight && Player_Position_Vertikal < obstacle2_pos_vertical) {
        obstacle2_pos_horizontal = p.windowWidth + obstacle2_width
        lives = lives - 1
        spawntrigger2 = true
        hit = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 3
    if (Player_Position_Horizontal + Player_Width > obstacle3_pos_horizontal + obstacle3_width && Player_Position_Horizontal < obstacle3_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight > obstacle3_pos_vertical + obstacle3_hight && Player_Position_Vertikal < obstacle3_pos_vertical) {
        obstacle3_pos_horizontal = p.windowWidth + obstacle3_width
        lives = lives - 1
        spawntrigger3 = true
        hit = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 4
    if (Player_Position_Horizontal + Player_Width > obstacle4_pos_horizontal + obstacle4_width && Player_Position_Horizontal < obstacle4_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight > obstacle4_pos_vertical + obstacle4_hight && Player_Position_Vertikal < obstacle4_pos_vertical) {
        obstacle4_pos_horizontal = p.windowWidth + obstacle4_width
        lives = lives - 1
        spawntrigger4 = true
        hit = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 5
    if (Player_Position_Horizontal + Player_Width > obstacle5_pos_horizontal + obstacle5_width && Player_Position_Horizontal < obstacle5_pos_horizontal) {
      if (Player_Position_Vertikal + Player_Hight > obstacle5_pos_vertical + obstacle5_hight && Player_Position_Vertikal < obstacle5_pos_vertical) {
        obstacle5_pos_horizontal = p.windowWidth + obstacle5_width
        lives = lives - 1
        spawntrigger5 = true
        hit = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Text
    p.textFont("Calibri")
    p.textSize(20)
    p.fill(255, 255, 255)
    p.textAlign(p.LEFT)
    p.text("Lives: " + lives, 25, 55)
    p.text("Press [ESC] for menu", 25, 30)

    //Menu
    if (menu == true) {
      speed = 0
      rnd_speed1 = 0
      rnd_speed2 = 0
      rnd_speed3 = 0
      rnd_speed4 = 0
      rnd_speed5 = 0
      p.textSize(40)
      p.fill(255, 255, 255)
      p.textAlign(p.CENTER)
      p.text("MENU", p.windowWidth / 2, p.windowHeight / 2 - 100)
      p.textSize(20)
      p.text("enemy", p.windowWidth / 2 + 23, p.windowHeight / 2 - 70)
      p.fill(600, 50, 30)
      p.rect(enemy_pos_horiozontal, enemy_pos_vertical, enemy_width, enemy_height)
    } else {
      speed = 6
      rnd_speed1 = p.random(3, 5)
      rnd_speed2 = p.random(3, 5)
      rnd_speed3 = p.random(3, 5)
      rnd_speed4 = p.random(3, 5)
      rnd_speed5 = p.random(3, 5)
    }

    //Death
    if (lives < 1) {
      p.fill(0, 0, 0)
      p.rect(deathscreen_pos_horizontal, deathscreen_pos_vertikal, deathscreen_width, deathscreen_hight)
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