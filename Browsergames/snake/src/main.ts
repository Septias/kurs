import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  //Obstacle 1
  let obstacle1_width = 35
  let obstacle1_height = 35
  let spawntrigger1 = true
  let rnd_number1 = p.random(200)
  let speed1 = 5
  let obstacle1_spawn_pos_horizontal = p.windowWidth + obstacle1_width + rnd_number1 * 2
  let obstacle1_spawn_area_vertical = p.windowHeight - obstacle1_height / 2
  let obstacle1_pos_horizontal = obstacle1_spawn_pos_horizontal
  let obstacle1_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)

  //Obstacle 2
  let obstacle2_width = 35
  let obstacle2_height = 35
  let spawntrigger2 = true
  let rnd_number2 = p.random(200)
  let speed2 = 5
  let obstacle2_spawn_pos_horizontal = p.windowWidth + obstacle2_width + rnd_number2 * 2
  let obstacle2_spawn_area_vertical = p.windowHeight - obstacle2_height / 2
  let obstacle2_pos_horizontal = obstacle2_spawn_pos_horizontal
  let obstacle2_pos_vertical = getRndInteger(0 - obstacle2_height / 2, obstacle2_spawn_area_vertical)

  //Obstacle 3
  let obstacle3_width = 35
  let obstacle3_height = 35
  let spawntrigger3 = true
  let rnd_number3 = p.random(200)
  let speed3 = 5
  let obstacle3_spawn_pos_horizontal = p.windowWidth + obstacle3_width + rnd_number3 * 2
  let obstacle3_spawn_area_vertical = p.windowHeight - obstacle3_height / 2
  let obstacle3_pos_horizontal = obstacle3_spawn_pos_horizontal
  let obstacle3_pos_vertical = getRndInteger(0 - obstacle3_height / 2, obstacle3_spawn_area_vertical)

  //Obstacle 4
  let obstacle4_width = 35
  let obstacle4_height = 35
  let spawntrigger4 = true
  let rnd_number4 = p.random(200)
  let speed4 = 5
  let obstacle4_spawn_pos_horizontal = p.windowWidth + obstacle4_width + rnd_number4 * 2
  let obstacle4_spawn_area_vertical = p.windowHeight - obstacle4_height / 2
  let obstacle4_pos_horizontal = obstacle4_spawn_pos_horizontal
  let obstacle4_pos_vertical = getRndInteger(0 - obstacle4_height / 2, obstacle4_spawn_area_vertical)

  //Obstacle 5
  let obstacle5_width = 35
  let obstacle5_height = 35
  let spawntrigger5 = true
  let rnd_number5 = p.random(200)
  let speed5 = 5
  let obstacle5_spawn_pos_horizontal = p.windowWidth + obstacle5_width + rnd_number5 * 2
  let obstacle5_spawn_area_vertical = p.windowHeight - obstacle5_height / 2
  let obstacle5_pos_horizontal = obstacle5_spawn_pos_horizontal
  let obstacle5_pos_vertical = getRndInteger(0 - obstacle5_height / 2, obstacle5_spawn_area_vertical)

  //Coin 1
  let coin1_width = 35
  let coin1_height = 35
  let spawntrigger_coin1 = true
  let rnd_number_coin1 = p.random(10, 100)
  let speed_coin1 = 4
  let coin1_spawn_pos_horizontal = p.windowWidth + coin1_width + rnd_number_coin1 * 2
  let coin1_spawn_area_vertical = p.windowHeight - coin1_height / 2
  let coin1_pos_horizontal = coin1_spawn_pos_horizontal
  let coin1_pos_vertical = getRndInteger(0 - coin1_height / 2, coin1_spawn_area_vertical)

  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_height = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_vertikal = 0
  let space = false

  //Menu
  let menu = false
  let enemy_width = 25
  let enemy_height = 25
  let enemy_pos_horiozontal = p.windowWidth / 2 - 48
  let enemy_pos_vertical = p.windowHeight / 2 - 107
  let menu_coin_width = 25
  let menu_coin_height = 25
  let menu_coin_pos_horiozontal = p.windowWidth / 2 - 48
  let menu_coin_pos_vertical = p.windowHeight / 2 - 48
  let menu_width = 300
  let menu_height = 400
  let menu_pos_horizontal = p.windowWidth / 2 - menu_width / 2
  let menu_pos_vertical = p.windowHeight / 2 - menu_height / 2

  //Music
  //let mySound;

  //Timer/Level/Coins
  let timer_active = true
  let time = 0
  let real_time = 0
  let level = 1
  let coins = 0
  let coins_goal = 5

  //Player
  let Player_Width = 90
  let Player_height = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertikal = p.windowHeight / 2 - Player_height / 2
  let lives = 3
  let speed = 6
  let up = false

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
    p.frameRate(60)
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
    if (p.keyCode === 32) {
      menu = false
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

  //Draw
  p.draw = function draw() {

    //Spawn
    if (spawntrigger1 == true) {
      obstacle1_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger2 == true) {
      obstacle2_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger3 == true) {
      obstacle3_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger4 == true) {
      obstacle4_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger5 == true) {
      obstacle5_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }

    p.background(0, 0, 0)//img für bild

    //Player
    p.fill(160, 32, 240)
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

    //Obstacle 1
    p.fill(600, 50, 30)
    p.rect(obstacle1_pos_horizontal, obstacle1_pos_vertical, obstacle1_width, obstacle1_height)
    obstacle1_pos_horizontal = obstacle1_pos_horizontal - speed1
    if (obstacle1_pos_horizontal > 0) {
      spawntrigger1 = false
    }
    if (obstacle1_pos_horizontal < 0) {
      obstacle1_pos_horizontal = p.windowWidth + obstacle1_width
      spawntrigger1 = true
    }

    //Obstacle 2
    p.fill(600, 50, 30)
    p.rect(obstacle2_pos_horizontal, obstacle2_pos_vertical, obstacle2_width, obstacle2_height)
    obstacle2_pos_horizontal = obstacle2_pos_horizontal - speed2
    if (obstacle2_pos_horizontal > 0) {
      spawntrigger2 = false
    }
    if (obstacle2_pos_horizontal < 0) {
      obstacle2_pos_horizontal = p.windowWidth + obstacle2_width
      spawntrigger2 = true
    }

    //Obstacle 3
    p.fill(600, 50, 30)
    p.rect(obstacle3_pos_horizontal, obstacle3_pos_vertical, obstacle3_width, obstacle3_height)
    obstacle3_pos_horizontal = obstacle3_pos_horizontal - speed3
    if (obstacle3_pos_horizontal > 0) {
      spawntrigger3 = false
    }
    if (obstacle3_pos_horizontal < 0) {
      obstacle3_pos_horizontal = p.windowWidth + obstacle3_width
      spawntrigger3 = true
    }

    //Obstacle 4
    p.fill(600, 50, 30)
    p.rect(obstacle4_pos_horizontal, obstacle4_pos_vertical, obstacle4_width, obstacle4_height)
    obstacle4_pos_horizontal = obstacle4_pos_horizontal - speed4
    if (obstacle4_pos_horizontal > 0) {
      spawntrigger4 = false
    }
    if (obstacle4_pos_horizontal < 0) {
      obstacle4_pos_horizontal = p.windowWidth + obstacle4_width
      spawntrigger4 = true
    }

    //Obstacle 5
    p.fill(600, 50, 30)
    p.rect(obstacle5_pos_horizontal, obstacle5_pos_vertical, obstacle5_width, obstacle5_height)
    obstacle5_pos_horizontal = obstacle5_pos_horizontal - speed5
    if (obstacle5_pos_horizontal > 0) {
      spawntrigger5 = false
    }
    if (obstacle5_pos_horizontal < 0) {
      obstacle5_pos_horizontal = p.windowWidth + obstacle5_width
      spawntrigger5 = true
    }

    //Damage 1
    if (Player_Position_Horizontal + Player_Width > obstacle1_pos_horizontal + obstacle1_width && Player_Position_Horizontal < obstacle1_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > obstacle1_pos_vertical + obstacle1_height && Player_Position_Vertikal < obstacle1_pos_vertical) {
        obstacle1_pos_horizontal = p.windowWidth + obstacle1_width
        lives = lives - 1
        spawntrigger1 = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 2
    if (Player_Position_Horizontal + Player_Width > obstacle2_pos_horizontal + obstacle2_width && Player_Position_Horizontal < obstacle2_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > obstacle2_pos_vertical + obstacle2_height && Player_Position_Vertikal < obstacle2_pos_vertical) {
        obstacle2_pos_horizontal = p.windowWidth + obstacle2_width
        lives = lives - 1
        spawntrigger2 = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 3
    if (Player_Position_Horizontal + Player_Width > obstacle3_pos_horizontal + obstacle3_width && Player_Position_Horizontal < obstacle3_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > obstacle3_pos_vertical + obstacle3_height && Player_Position_Vertikal < obstacle3_pos_vertical) {
        obstacle3_pos_horizontal = p.windowWidth + obstacle3_width
        lives = lives - 1
        spawntrigger3 = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 4
    if (Player_Position_Horizontal + Player_Width > obstacle4_pos_horizontal + obstacle4_width && Player_Position_Horizontal < obstacle4_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > obstacle4_pos_vertical + obstacle4_height && Player_Position_Vertikal < obstacle4_pos_vertical) {
        obstacle4_pos_horizontal = p.windowWidth + obstacle4_width
        lives = lives - 1
        spawntrigger4 = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Damage 5
    if (Player_Position_Horizontal + Player_Width > obstacle5_pos_horizontal + obstacle5_width && Player_Position_Horizontal < obstacle5_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > obstacle5_pos_vertical + obstacle5_height && Player_Position_Vertikal < obstacle5_pos_vertical) {
        obstacle5_pos_horizontal = p.windowWidth + obstacle5_width
        lives = lives - 1
        spawntrigger5 = true
        console.log("Damage")
        console.log(lives)
      }
    }

    //Coin1
    p.fill(205, 149, 12)
    p.rect(coin1_pos_horizontal, coin1_pos_vertical, coin1_width, coin1_height)
    coin1_pos_horizontal = coin1_pos_horizontal - speed_coin1
    if (coin1_pos_horizontal > 0) {
      spawntrigger_coin1 = false
    }
    if (coin1_pos_horizontal < 0) {
      coin1_pos_horizontal = p.windowWidth + coin1_width
      spawntrigger_coin1 = true
    }

    //Collect Coin 1
    if (Player_Position_Horizontal + Player_Width > coin1_pos_horizontal + coin1_width && Player_Position_Horizontal < coin1_pos_horizontal) {
      if (Player_Position_Vertikal + Player_height > coin1_pos_vertical + coin1_height && Player_Position_Vertikal < coin1_pos_vertical) {
        coin1_pos_horizontal = p.windowWidth + coin1_width
        coins = coins + 1
        spawntrigger_coin1 = true
      }
    }

    //Timer/Level/Coins
    if (timer_active == true) {
      time = time + 1
    }
    if (time >= 60) {
      real_time = real_time + 1
      time = 0
    }
    if (coins == coins_goal) {
      coins = 0
      coins_goal = coins_goal + 5
      level = level + 1
    }

    //Text
    p.textFont("Calibri")
    p.textSize(20)
    p.fill(255, 255, 255)
    p.textAlign(p.LEFT)
    p.text("Press [ESC] for menu", 25, 30)
    p.text("Lives: " + lives, 25, 60)
    p.text("Level: " + level, 25, 90)
    p.text(coins + "/" + coins_goal + " Coins", 25, 120)
    p.text("Time survived: " + real_time, 25, 150)

    //Menu
    if (menu == true) {
      timer_active = false
      speed = 0
      speed1 = 0
      speed2 = 0
      speed3 = 0
      speed4 = 0
      speed5 = 0
      speed_coin1 = 0
      p.fill(87, 87, 87)
      p.rect(menu_pos_horizontal, menu_pos_vertical, menu_width, menu_height)
      p.textSize(40)
      p.fill(255, 255, 255)
      p.textAlign(p.CENTER)
      p.text("MENU", p.windowWidth / 2, p.windowHeight / 2 - 140)
      p.textSize(20)
      p.text("enemy", p.windowWidth / 2 + 17, p.windowHeight / 2 - 90)
      p.fill(600, 50, 30)
      p.rect(enemy_pos_horiozontal, enemy_pos_vertical, enemy_width, enemy_height)
      p.fill(255, 255, 255)
      p.text("coin", p.windowWidth / 2 + 7, p.windowHeight / 2 - 30)
      p.fill(205, 149, 12)
      p.rect(menu_coin_pos_horiozontal, menu_coin_pos_vertical, menu_coin_width, menu_coin_height)
      p.fill(255, 255, 255)
      p.text("[Space] to close the menu", p.windowWidth / 2 + 3, p.windowHeight / 2 + 180)
    } else {
      timer_active = true
      speed = 6
      speed1 = 5
      speed2 = 5
      speed3 = 5
      speed4 = 5
      speed5 = 5
      speed_coin1 = 4
    }

    //Death
    if (lives < 1) {
      p.fill(0, 0, 0)
      p.rect(deathscreen_pos_horizontal, deathscreen_pos_vertikal, deathscreen_width, deathscreen_height)
      p.fill(600, 50, 30)
      p.textSize(90)
      p.textAlign(p.CENTER)
      p.text("You Died", p.windowWidth / 2, p.windowHeight / 2)
      speed = 0
      if (space == true) {
        lives = 3
        time = 0
        real_time = 0
      }
    }

  }

}, document.getElementById('app')!);