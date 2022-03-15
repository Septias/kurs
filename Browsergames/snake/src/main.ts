import p5, { SoundFile } from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Obstacle 1
  let obstacle1_width = 35
  let obstacle1_height = 35
  let spawntrigger1 = true
  let rnd_number1 = p.random(500)
  let speed1 = 5
  let obstacle1_spawn_pos_horizontal = p.windowWidth + obstacle1_width + rnd_number1
  let obstacle1_spawn_area_vertical = p.windowHeight - obstacle1_height
  let obstacle1_pos_horizontal = obstacle1_spawn_pos_horizontal
  let obstacle1_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
  //Obstacle 2
  let obstacle2_width = 35
  let obstacle2_height = 35
  let spawntrigger2 = true
  let rnd_number2 = p.random(500)
  let speed2 = 6
  let obstacle2_spawn_pos_horizontal = p.windowWidth + obstacle2_width + rnd_number2
  let obstacle2_spawn_area_vertical = p.windowHeight - obstacle2_height
  let obstacle2_pos_horizontal = obstacle2_spawn_pos_horizontal
  let obstacle2_pos_vertical = getRndInteger(0 - obstacle2_height / 2, obstacle2_spawn_area_vertical)
  //Obstacle 3
  let obstacle3_width = 35
  let obstacle3_height = 35
  let spawntrigger3 = true
  let rnd_number3 = p.random(500)
  let speed3 = 5
  let obstacle3_spawn_pos_horizontal = p.windowWidth + obstacle3_width + rnd_number3
  let obstacle3_spawn_area_vertical = p.windowHeight - obstacle3_height
  let obstacle3_pos_horizontal = obstacle3_spawn_pos_horizontal
  let obstacle3_pos_vertical = getRndInteger(0 - obstacle3_height / 2, obstacle3_spawn_area_vertical)
  //Obstacle 4
  let obstacle4_width = 35
  let obstacle4_height = 35
  let spawntrigger4 = true
  let rnd_number4 = p.random(500)
  let speed4 = 7
  let obstacle4_spawn_pos_horizontal = p.windowWidth + obstacle4_width + rnd_number4
  let obstacle4_spawn_area_vertical = p.windowHeight - obstacle4_height
  let obstacle4_pos_horizontal = obstacle4_spawn_pos_horizontal
  let obstacle4_pos_vertical = getRndInteger(0 - obstacle4_height / 2, obstacle4_spawn_area_vertical)
  //Obstacle 5
  let obstacle5_width = 35
  let obstacle5_height = 35
  let spawntrigger5 = true
  let rnd_number5 = p.random(400, 800)
  let speed5 = 8
  let obstacle5_spawn_pos_horizontal = p.windowWidth + obstacle5_width + rnd_number5
  let obstacle5_spawn_area_vertical = p.windowHeight - obstacle5_height
  let obstacle5_pos_horizontal = obstacle5_spawn_pos_horizontal
  let obstacle5_pos_vertical = getRndInteger(0 - obstacle5_height / 2, obstacle5_spawn_area_vertical)
  //Obstacle 6
  let obstacle6_width = 35
  let obstacle6_height = 35
  let spawntrigger6 = true
  let rnd_number6 = p.random(400, 800)
  let speed6 = 7
  let obstacle6_spawn_pos_horizontal = p.windowWidth + obstacle6_width + rnd_number6
  let obstacle6_spawn_area_vertical = p.windowHeight - obstacle6_height
  let obstacle6_pos_horizontal = obstacle6_spawn_pos_horizontal
  let obstacle6_pos_vertical = getRndInteger(0 - obstacle6_height / 2, obstacle6_spawn_area_vertical)
  //Obstacle 7
  let obstacle7_width = 35
  let obstacle7_height = 35
  let spawntrigger7 = true
  let rnd_number7 = p.random(400, 800)
  let speed7 = 6
  let obstacle7_spawn_pos_horizontal = p.windowWidth + obstacle7_width + rnd_number7
  let obstacle7_spawn_area_vertical = p.windowHeight - obstacle7_height
  let obstacle7_pos_horizontal = obstacle7_spawn_pos_horizontal
  let obstacle7_pos_vertical = getRndInteger(0 - obstacle7_height / 2, obstacle7_spawn_area_vertical)
  //Obstacle 8
  let obstacle8_width = 35
  let obstacle8_height = 35
  let spawntrigger8 = true
  let rnd_number8 = p.random(400, 800)
  let speed8 = 6
  let obstacle8_spawn_pos_horizontal = p.windowWidth + obstacle8_width + rnd_number8
  let obstacle8_spawn_area_vertical = p.windowHeight - obstacle8_height
  let obstacle8_pos_horizontal = obstacle8_spawn_pos_horizontal
  let obstacle8_pos_vertical = getRndInteger(0 - obstacle8_height / 2, obstacle8_spawn_area_vertical)
  //Obstacle 9
  let obstacle9_width = 35
  let obstacle9_height = 35
  let spawntrigger9 = true
  let rnd_number9 = p.random(400, 800)
  let speed9 = 7
  let obstacle9_spawn_pos_horizontal = p.windowWidth + obstacle9_width + rnd_number9
  let obstacle9_spawn_area_vertical = p.windowHeight - obstacle9_height
  let obstacle9_pos_horizontal = obstacle9_spawn_pos_horizontal
  let obstacle9_pos_vertical = getRndInteger(0 - obstacle9_height / 2, obstacle9_spawn_area_vertical)
  //Obstacle 10
  let obstacle10_width = 35
  let obstacle10_height = 35
  let spawntrigger10 = true
  let rnd_number10 = p.random(400, 800)
  let speed10 = 6
  let obstacle10_spawn_pos_horizontal = p.windowWidth + obstacle10_width + rnd_number10
  let obstacle10_spawn_area_vertical = p.windowHeight - obstacle10_height
  let obstacle10_pos_horizontal = obstacle10_spawn_pos_horizontal
  let obstacle10_pos_vertical = getRndInteger(0 - obstacle10_height / 2, obstacle10_spawn_area_vertical)
  //Fast_Obstacle 1
  let fast_obstacle1_width = 40
  let fast_obstacle1_height = 40
  let spawntrigger_fast_obstacle1 = false
  let rnd_number_fast_obstacle1 = p.random(800, 1000)
  let speed_fast_obstacle1 = 14
  let fast_obstacle1_spawn_pos_horizontal = p.windowWidth + fast_obstacle1_width + rnd_number_fast_obstacle1
  let fast_obstacle1_spawn_area_vertical = p.windowHeight - fast_obstacle1_height
  let fast_obstacle1_pos_horizontal = fast_obstacle1_spawn_pos_horizontal
  let fast_obstacle1_pos_vertical = getRndInteger(0 - fast_obstacle1_height / 2, fast_obstacle1_spawn_area_vertical)

  //Deathstar
  let deathstar1_width = 75
  let deathstar1_height = 75
  let spawntrigger_deathstar1 = true
  let speed_deathstar1 = 3
  let deathstar1_spawn_pos_horizontal = p.windowWidth + deathstar1_width
  let deathstar1_spawn_area_vertical = p.windowHeight - deathstar1_height
  let deathstar1_pos_horizontal = deathstar1_spawn_pos_horizontal
  let deathstar1_pos_vertical = p.windowHeight / 2 - deathstar1_width / 2

  //Health 1
  let health1_width = 35
  let health1_height = 35
  let spawntrigger_health1 = true
  let rnd_number_health1 = p.random(0, 100)
  let speed_health1 = 7
  let health1_spawn_pos_horizontal = p.windowWidth + health1_width + rnd_number_health1
  let health1_spawn_area_vertical = p.windowHeight - health1_height
  let health1_pos_horizontal = health1_spawn_pos_horizontal
  let health1_pos_vertical = getRndInteger(0 - health1_height / 2, health1_spawn_area_vertical)

  //Coin 1
  let coin1_width = 35
  let coin1_height = 35
  let spawntrigger_coin1 = true
  let rnd_number_coin1 = p.random(0, 100)
  let speed_coin1 = 6
  let coin1_spawn_pos_horizontal = p.windowWidth + coin1_width + rnd_number_coin1
  let coin1_spawn_area_vertical = p.windowHeight - coin1_height
  let coin1_pos_horizontal = coin1_spawn_pos_horizontal
  let coin1_pos_vertical = getRndInteger(0 - coin1_height / 2, coin1_spawn_area_vertical)
  //Coin 2
  let coin2_width = 35
  let coin2_height = 35
  let spawntrigger_coin2 = true
  let rnd_number_coin2 = p.random(1000, 1100)
  let speed_coin2 = 6
  let coin2_spawn_pos_horizontal = p.windowWidth + coin2_width + rnd_number_coin2
  let coin2_spawn_area_vertical = p.windowHeight - coin2_height
  let coin2_pos_horizontal = coin2_spawn_pos_horizontal
  let coin2_pos_vertical = getRndInteger(0 - coin2_height / 2, coin2_spawn_area_vertical)
  //Coin 3
  let coin3_width = 35
  let coin3_height = 35
  let spawntrigger_coin3 = true
  let rnd_number_coin3 = p.random(2000, 2100)
  let speed_coin3 = 6
  let coin3_spawn_pos_horizontal = p.windowWidth + coin3_width + rnd_number_coin3
  let coin3_spawn_area_vertical = p.windowHeight - coin3_height
  let coin3_pos_horizontal = coin3_spawn_pos_horizontal
  let coin3_pos_vertical = getRndInteger(0 - coin3_height / 2, coin3_spawn_area_vertical)
  //Coin 4
  let coin4_width = 35
  let coin4_height = 35
  let spawntrigger_coin4 = true
  let rnd_number_coin4 = p.random(3000, 3100)
  let speed_coin4 = 6
  let coin4_spawn_pos_horizontal = p.windowWidth + coin4_width + rnd_number_coin4
  let coin4_spawn_area_vertical = p.windowHeight - coin4_height
  let coin4_pos_horizontal = coin4_spawn_pos_horizontal
  let coin4_pos_vertical = getRndInteger(0 - coin4_height / 2, coin4_spawn_area_vertical)
  //Coin 5
  let coin5_width = 35
  let coin5_height = 35
  let spawntrigger_coin5 = true
  let rnd_number_coin5 = p.random(4000, 4100)
  let speed_coin5 = 6
  let coin5_spawn_pos_horizontal = p.windowWidth + coin5_width + rnd_number_coin5
  let coin5_spawn_area_vertical = p.windowHeight - coin5_height
  let coin5_pos_horizontal = coin5_spawn_pos_horizontal
  let coin5_pos_vertical = getRndInteger(0 - coin5_height / 2, coin5_spawn_area_vertical)

  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_height = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_Vertical = 0
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

  //Timer/Level/Coins
  let timer_active = true
  let time = 0
  let real_time = 0
  let level = 1
  let coins = 0
  let coins_goal = 10

  //Player
  let Player_Width = 90
  let Player_height = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertical = p.windowHeight / 2 - Player_height / 2
  let lives = 3
  let speed = 6
  let up = false

  //Superpower
  let power_menu = true
  let power_menu_width = 900
  let power_menu_height = 500
  let power_menu_pos_horizontal = p.windowWidth / 2 - power_menu_width / 2
  let power_menu_pos_vertical = p.windowHeight / 2 - power_menu_height / 2
  let flash_width = 80
  let flash_height = 80
  let flash_pos_horizontal = p.windowWidth / 2 - Player_Width / 2 - 250
  let flash_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30
  let coinmaster_width = 80
  let coinmaster_height = 80
  let coinmaster_pos_horizontal = p.windowWidth / 2 - Player_Width / 2
  let coinmaster_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30
  let menu_health_width = 80
  let menu_health_height = 80
  let menu_health_pos_horizontal = p.windowWidth / 2 - Player_Width / 2 + 245
  let menu_health_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30

  let flash = false
  let coinmaster = false

  //Randomizer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Music C:/Users/Bentik/Documents/GitHub/kurs/Browsergames/snake/Sounds/1-16 Electrodrome.mp3
  let hello: SoundFile
  p.setup = () => {
    hello = p.loadSound("C:/Users/Bentik/Documents/GitHub/kurs/Browsergames/snake/Sounds/1-16 Electrodrome.mp3");
  }

  p.mousePressed = () => {
    hello.play()
  }



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
      power_menu = false
    }
    if (p.keyCode === 49) {
      power_menu = false
      flash = true
    }
    if (p.keyCode === 50) {
      power_menu = false
      coinmaster = true
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
    if (spawntrigger6 == true) {
      obstacle6_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger7 == true) {
      obstacle7_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger8 == true) {
      obstacle8_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger9 == true) {
      obstacle9_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger10 == true) {
      obstacle10_pos_vertical = getRndInteger(0 - obstacle1_height / 2, obstacle1_spawn_area_vertical)
    }
    if (spawntrigger_fast_obstacle1 == true) {
      fast_obstacle1_pos_vertical = getRndInteger(0 - fast_obstacle1_height / 2, fast_obstacle1_spawn_area_vertical)
    }
    if (spawntrigger_coin1 == true) {
      coin1_pos_vertical = getRndInteger(0 - coin1_height / 2, coin1_spawn_area_vertical)
      coin1_pos_horizontal = coin1_spawn_pos_horizontal
    }
    if (spawntrigger_coin2 == true) {
      coin2_pos_vertical = getRndInteger(0 - coin2_height / 2, coin2_spawn_area_vertical)
      coin2_pos_horizontal = coin2_spawn_pos_horizontal
    }
    if (spawntrigger_coin3 == true) {
      coin3_pos_vertical = getRndInteger(0 - coin3_height / 2, coin3_spawn_area_vertical)
      coin3_pos_horizontal = coin3_spawn_pos_horizontal
    }
    if (spawntrigger_coin4 == true) {
      coin4_pos_vertical = getRndInteger(0 - coin4_height / 2, coin4_spawn_area_vertical)
      coin4_pos_horizontal = coin4_spawn_pos_horizontal
    }
    if (spawntrigger_coin5 == true) {
      coin5_pos_vertical = getRndInteger(0 - coin5_height / 2, coin5_spawn_area_vertical)
      coin5_pos_horizontal = coin5_spawn_pos_horizontal
    }
    if (spawntrigger_health1 == true) {
      health1_pos_vertical = getRndInteger(0 - health1_height / 2, health1_spawn_area_vertical)
      health1_pos_horizontal = health1_spawn_pos_horizontal
    }

    //Background
    p.background(0, 0, 0)//img für bild

    if (level < 4) {

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

      //Obstacle 6
      p.fill(600, 50, 30)
      p.rect(obstacle6_pos_horizontal, obstacle6_pos_vertical, obstacle6_width, obstacle6_height)
      obstacle6_pos_horizontal = obstacle6_pos_horizontal - speed6
      if (obstacle6_pos_horizontal > 0) {
        spawntrigger6 = false
      }
      if (obstacle6_pos_horizontal < 0) {
        obstacle6_pos_horizontal = p.windowWidth + obstacle6_width
        spawntrigger6 = true
      }

      //Obstacle 7
      p.fill(600, 50, 30)
      p.rect(obstacle7_pos_horizontal, obstacle7_pos_vertical, obstacle7_width, obstacle7_height)
      obstacle7_pos_horizontal = obstacle7_pos_horizontal - speed7
      if (obstacle7_pos_horizontal > 0) {
        spawntrigger7 = false
      }
      if (obstacle7_pos_horizontal < 0) {
        obstacle7_pos_horizontal = p.windowWidth + obstacle7_width
        spawntrigger7 = true
      }

      //Obstacle 8
      p.fill(600, 50, 30)
      p.rect(obstacle8_pos_horizontal, obstacle8_pos_vertical, obstacle8_width, obstacle8_height)
      obstacle8_pos_horizontal = obstacle8_pos_horizontal - speed8
      if (obstacle8_pos_horizontal > 0) {
        spawntrigger8 = false
      }
      if (obstacle8_pos_horizontal < 0) {
        obstacle8_pos_horizontal = p.windowWidth + obstacle8_width
        spawntrigger8 = true
      }

      //Obstacle 9
      p.fill(600, 50, 30)
      p.rect(obstacle9_pos_horizontal, obstacle9_pos_vertical, obstacle9_width, obstacle9_height)
      obstacle9_pos_horizontal = obstacle9_pos_horizontal - speed9
      if (obstacle9_pos_horizontal > 0) {
        spawntrigger9 = false
      }
      if (obstacle9_pos_horizontal < 0) {
        obstacle9_pos_horizontal = p.windowWidth + obstacle9_width
        spawntrigger9 = true
      }

      //Obstacle 10
      p.fill(600, 50, 30)
      p.rect(obstacle10_pos_horizontal, obstacle10_pos_vertical, obstacle10_width, obstacle10_height)
      obstacle10_pos_horizontal = obstacle10_pos_horizontal - speed10
      if (obstacle10_pos_horizontal > 0) {
        spawntrigger10 = false
      }
      if (obstacle10_pos_horizontal < 0) {
        obstacle10_pos_horizontal = p.windowWidth + obstacle10_width
        spawntrigger10 = true
      }

      //Damage 1
      if (Player_Position_Horizontal + Player_Width >= obstacle1_pos_horizontal + obstacle1_width + obstacle1_width && Player_Position_Horizontal <= obstacle1_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle1_pos_vertical + obstacle1_height && Player_Position_Vertical <= obstacle1_pos_vertical) {
          obstacle1_pos_horizontal = p.windowWidth + obstacle1_width
          lives = lives - 1
          spawntrigger1 = true
        }
      }
      //Damage 2
      if (Player_Position_Horizontal + Player_Width >= obstacle2_pos_horizontal + obstacle2_width && Player_Position_Horizontal <= obstacle2_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle2_pos_vertical + obstacle2_height && Player_Position_Vertical <= obstacle2_pos_vertical) {
          obstacle2_pos_horizontal = p.windowWidth + obstacle2_width
          lives = lives - 1
          spawntrigger2 = true
        }
      }
      //Damage 3
      if (Player_Position_Horizontal + Player_Width >= obstacle3_pos_horizontal + obstacle3_width && Player_Position_Horizontal <= obstacle3_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle3_pos_vertical + obstacle3_height && Player_Position_Vertical <= obstacle3_pos_vertical) {
          obstacle3_pos_horizontal = p.windowWidth + obstacle3_width
          lives = lives - 1
          spawntrigger3 = true
        }
      }
      //Damage 4
      if (Player_Position_Horizontal + Player_Width >= obstacle4_pos_horizontal + obstacle4_width && Player_Position_Horizontal <= obstacle4_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle4_pos_vertical + obstacle4_height && Player_Position_Vertical <= obstacle4_pos_vertical) {
          obstacle4_pos_horizontal = p.windowWidth + obstacle4_width
          lives = lives - 1
          spawntrigger4 = true
        }
      }
      //Damage 5
      if (Player_Position_Horizontal + Player_Width >= obstacle5_pos_horizontal + obstacle5_width && Player_Position_Horizontal <= obstacle5_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle5_pos_vertical + obstacle5_height && Player_Position_Vertical <= obstacle5_pos_vertical) {
          obstacle5_pos_horizontal = p.windowWidth + obstacle5_width
          lives = lives - 1
          spawntrigger5 = true
        }
      }
      //Damage 6
      if (Player_Position_Horizontal + Player_Width >= obstacle6_pos_horizontal + obstacle6_width && Player_Position_Horizontal <= obstacle6_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle6_pos_vertical + obstacle6_height && Player_Position_Vertical <= obstacle6_pos_vertical) {
          obstacle6_pos_horizontal = p.windowWidth + obstacle6_width
          lives = lives - 1
          spawntrigger6 = true
        }
      }
      //Damage 7
      if (Player_Position_Horizontal + Player_Width >= obstacle7_pos_horizontal + obstacle7_width && Player_Position_Horizontal <= obstacle7_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle7_pos_vertical + obstacle7_height && Player_Position_Vertical <= obstacle7_pos_vertical) {
          obstacle7_pos_horizontal = p.windowWidth + obstacle7_width
          lives = lives - 1
          spawntrigger7 = true
        }
      }
      //Damage 8
      if (Player_Position_Horizontal + Player_Width >= obstacle8_pos_horizontal + obstacle8_width && Player_Position_Horizontal <= obstacle8_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle8_pos_vertical + obstacle8_height && Player_Position_Vertical <= obstacle8_pos_vertical) {
          obstacle8_pos_horizontal = p.windowWidth + obstacle8_width
          lives = lives - 1
          spawntrigger8 = true
        }
      }
      //Damage 9
      if (Player_Position_Horizontal + Player_Width >= obstacle9_pos_horizontal + obstacle9_width && Player_Position_Horizontal <= obstacle9_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle9_pos_vertical + obstacle9_height && Player_Position_Vertical <= obstacle9_pos_vertical) {
          obstacle9_pos_horizontal = p.windowWidth + obstacle9_width
          lives = lives - 1
          spawntrigger9 = true
        }
      }
      //Damage 10
      if (Player_Position_Horizontal + Player_Width >= obstacle10_pos_horizontal + obstacle10_width && Player_Position_Horizontal <= obstacle10_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= obstacle10_pos_vertical + obstacle10_height && Player_Position_Vertical <= obstacle10_pos_vertical) {
          obstacle10_pos_horizontal = p.windowWidth + obstacle10_width
          lives = lives - 1
          spawntrigger10 = true
        }
      }

      //Fast_Obstacle1
      if (level > 1) {
        p.fill(139, 0, 0)
        p.rect(fast_obstacle1_pos_horizontal, fast_obstacle1_pos_vertical, fast_obstacle1_width, fast_obstacle1_height)
        fast_obstacle1_pos_horizontal = fast_obstacle1_pos_horizontal - speed_fast_obstacle1
        if (fast_obstacle1_pos_horizontal > 0) {
          spawntrigger_fast_obstacle1 = false
        }
        if (fast_obstacle1_pos_horizontal < 0) {
          fast_obstacle1_pos_horizontal = p.windowWidth + fast_obstacle1_width
          spawntrigger_fast_obstacle1 = true
        }
      }

      //Damage Fast_Obstacle1
      if (Player_Position_Horizontal + Player_Width >= fast_obstacle1_pos_horizontal + fast_obstacle1_width && Player_Position_Horizontal <= fast_obstacle1_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= fast_obstacle1_pos_vertical + fast_obstacle1_height && Player_Position_Vertical <= fast_obstacle1_pos_vertical) {
          fast_obstacle1_pos_horizontal = p.windowWidth + fast_obstacle1_width
          lives = lives - 1
          spawntrigger_fast_obstacle1 = true
        }
      }


      //Health1
      if (level > 2) {
        if (lives < 2) {
          p.fill(50, 205, 50)
          p.rect(health1_pos_horizontal, health1_pos_vertical, health1_width, health1_height)
          health1_pos_horizontal = health1_pos_horizontal - speed_health1
          if (health1_pos_horizontal > 0) {
            spawntrigger_health1 = false
          }
          if (health1_pos_horizontal < 0) {
            health1_pos_horizontal = p.windowWidth + health1_width
            spawntrigger_health1 = true
          }
        }
      }

      //Collect Health1
      if (Player_Position_Horizontal + Player_Width >= health1_pos_horizontal + health1_width && Player_Position_Horizontal <= health1_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= health1_pos_vertical + health1_height && Player_Position_Vertical <= health1_pos_vertical) {
          health1_pos_horizontal = p.windowWidth + health1_width
          lives = lives + 1
          spawntrigger_health1 = true
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
      //Coin2
      p.fill(205, 149, 12)
      p.rect(coin2_pos_horizontal, coin2_pos_vertical, coin2_width, coin2_height)
      coin2_pos_horizontal = coin2_pos_horizontal - speed_coin2
      if (coin2_pos_horizontal > 0) {
        spawntrigger_coin2 = false
      }
      if (coin2_pos_horizontal < 0) {
        coin2_pos_horizontal = p.windowWidth + coin2_width
        spawntrigger_coin2 = true
      }
      //Coin3
      p.fill(205, 149, 12)
      p.rect(coin3_pos_horizontal, coin3_pos_vertical, coin3_width, coin3_height)
      coin3_pos_horizontal = coin3_pos_horizontal - speed_coin3
      if (coin3_pos_horizontal > 0) {
        spawntrigger_coin3 = false
      }
      if (coin3_pos_horizontal < 0) {
        coin3_pos_horizontal = p.windowWidth + coin3_width
        spawntrigger_coin3 = true
      }
      //Coin4
      p.fill(205, 149, 12)
      p.rect(coin4_pos_horizontal, coin4_pos_vertical, coin4_width, coin4_height)
      coin4_pos_horizontal = coin4_pos_horizontal - speed_coin4
      if (coin4_pos_horizontal > 0) {
        spawntrigger_coin4 = false
      }
      if (coin4_pos_horizontal < 0) {
        coin4_pos_horizontal = p.windowWidth + coin4_width
        spawntrigger_coin4 = true
      }
      //Coin5
      p.fill(205, 149, 12)
      p.rect(coin5_pos_horizontal, coin5_pos_vertical, coin5_width, coin5_height)
      coin5_pos_horizontal = coin5_pos_horizontal - speed_coin5
      if (coin5_pos_horizontal > 0) {
        spawntrigger_coin5 = false
      }
      if (coin1_pos_horizontal < 0) {
        coin5_pos_horizontal = p.windowWidth + coin5_width
        spawntrigger_coin5 = true
      }

      //Collect Coin 1
      if (Player_Position_Horizontal + Player_Width >= coin1_pos_horizontal + coin1_width && Player_Position_Horizontal <= coin1_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= coin1_pos_vertical + coin1_height && Player_Position_Vertical <= coin1_pos_vertical) {
          coin1_pos_horizontal = p.windowWidth + coin1_width
          spawntrigger_coin1 = true
          if (coinmaster == true) {
            coins = coins + 2
          } else {
            coins = coins + 1
          }
        }
      }
      //Collect Coin 2
      if (Player_Position_Horizontal + Player_Width >= coin2_pos_horizontal + coin2_width && Player_Position_Horizontal <= coin2_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= coin2_pos_vertical + coin2_height && Player_Position_Vertical <= coin2_pos_vertical) {
          coin2_pos_horizontal = p.windowWidth + coin2_width
          spawntrigger_coin2 = true
          if (coinmaster == true) {
            coins = coins + 2
          } else {
            coins = coins + 1
          }
        }
      }
      //Collect Coin 3
      if (Player_Position_Horizontal + Player_Width >= coin3_pos_horizontal + coin3_width && Player_Position_Horizontal <= coin3_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= coin3_pos_vertical + coin3_height && Player_Position_Vertical <= coin3_pos_vertical) {
          coin3_pos_horizontal = p.windowWidth + coin3_width
          spawntrigger_coin3 = true
          if (coinmaster == true) {
            coins = coins + 2
          } else {
            coins = coins + 1
          }
        }
      }
      //Collect Coin 4
      if (Player_Position_Horizontal + Player_Width >= coin4_pos_horizontal + coin4_width && Player_Position_Horizontal <= coin4_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= coin4_pos_vertical + coin4_height && Player_Position_Vertical <= coin4_pos_vertical) {
          coin4_pos_horizontal = p.windowWidth + coin4_width
          spawntrigger_coin4 = true
          if (coinmaster == true) {
            coins = coins + 2
          } else {
            coins = coins + 1
          }
        }
      }
      //Collect Coin 5
      if (Player_Position_Horizontal + Player_Width >= coin5_pos_horizontal + coin5_width && Player_Position_Horizontal <= coin5_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= coin5_pos_vertical + coin5_height && Player_Position_Vertical <= coin5_pos_vertical) {
          coin5_pos_horizontal = p.windowWidth + coin5_width
          spawntrigger_coin5 = true
          if (coinmaster == true) {
            coins = coins + 2
          } else {
            coins = coins + 1
          }
        }
      }
    }

    if (level == 4) {
      //Deathstar1
      p.fill(600, 50, 30)
      p.rect(deathstar1_pos_horizontal, deathstar1_pos_vertical, deathstar1_width, deathstar1_height)
      deathstar1_pos_horizontal = deathstar1_pos_horizontal - speed_deathstar1
      if (deathstar1_pos_horizontal > 0) {
      }
      if (deathstar1_pos_horizontal < 0) {
        deathstar1_pos_horizontal = p.windowWidth + deathstar1_width
      }
      //Damage Deathstar1
      if (Player_Position_Horizontal + Player_Width >= deathstar1_pos_horizontal + deathstar1_width && Player_Position_Horizontal <= deathstar1_pos_horizontal) {
        if (Player_Position_Vertical + Player_height >= deathstar1_pos_vertical + deathstar1_height && Player_Position_Vertical <= deathstar1_pos_vertical) {
          deathstar1_pos_horizontal = p.windowWidth + deathstar1_width
          lives = 0
        }
      }
    }

    //Player
    p.fill(160, 32, 240)
    p.rect(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height)
    if (up == true) {
      Player_Position_Vertical = Player_Position_Vertical - speed
    }
    if (up == false) {
      Player_Position_Vertical = Player_Position_Vertical + speed * 1.3
    }
    if (Player_Position_Vertical > p.windowHeight - Player_height) {
      Player_Position_Vertical = p.windowHeight - Player_height
      lives = 0
    }
    if (Player_Position_Vertical < 0) {
      Player_Position_Vertical = 0
    }

    //Timer
    if (timer_active == true) {
      time = time + 1
    }
    if (time >= 60) {
      real_time = real_time + 1
      time = 0
    }

    //Text
    p.textFont("Calibri")
    p.textSize(20)
    p.fill(255, 255, 255)
    p.textAlign(p.LEFT)
    p.text("Press [ESC] for menu", 25, 30)
    p.text("Time survived: " + real_time, 25, 120)
    p.text("Lives: " + lives, 25, 60)
    if (coinmaster == true) {
      p.fill(205, 149, 12)
    } else {
      p.fill(255, 255, 255)
    }
    p.text(coins + "/" + coins_goal + " Coins", 25, 90)
    p.fill(255, 255, 255)
    p.textSize(45)
    p.text("Level: " + level, p.windowWidth / 2 - 100, 50)

    //Menu
    if (menu == true) {
      timer_active = false
      speed = 0
      speed1 = 0
      speed2 = 0
      speed3 = 0
      speed4 = 0
      speed5 = 0
      speed6 = 0
      speed7 = 0
      speed8 = 0
      speed9 = 0
      speed10 = 0
      speed_fast_obstacle1 = 0
      speed_health1 = 0
      speed_coin1 = 0
      speed_coin2 = 0
      speed_coin3 = 0
      speed_coin4 = 0
      speed_coin5 = 0
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
      speed1 = 5 + level - 1
      speed2 = 6 + level - 1
      speed3 = 5 + level - 1
      speed4 = 7 + level - 1
      speed5 = 8 + level - 1
      speed6 = 7 + level - 1
      speed7 = 6 + level - 1
      speed8 = 6 + level - 1
      speed9 = 7 + level - 1
      speed10 = 6 + level - 1
      speed_fast_obstacle1 = 14 + level - 1
      speed_health1 = 7 + level - 1
      speed_coin1 = 6 + level - 1
      speed_coin2 = 6 + level - 1
      speed_coin3 = 6 + level - 1
      speed_coin4 = 6 + level - 1
      speed_coin5 = 6 + level - 1
      console.log(speed10)
    }

    //Coins/Level
    if (coins >= coins_goal) {
      coins = 0
      coins_goal = coins_goal + 5
      level = level + 1
      speed1 = speed1 + 1
      speed2 = speed2 + 1
      speed3 = speed3 + 1
      speed4 = speed4 + 1
      speed5 = speed5 + 1
      speed6 = speed6 + 1
      speed7 = speed7 + 1
      speed8 = speed8 + 1
      speed9 = speed9 + 1
      speed10 = speed10 + 1
      speed_fast_obstacle1 = speed_fast_obstacle1 + 1
      speed_health1 = speed_health1 + 1
      speed_coin1 = speed_coin1 + 1
      speed_coin2 = speed_coin2 + 1
      speed_coin3 = speed_coin3 + 1
      speed_coin4 = speed_coin4 + 1
      speed_coin5 = speed_coin5 + 1
    }

    //Superpower (Space um menu zu schließen ohne power zu wählen)
    if (power_menu == true) {
      timer_active = false
      speed = 0
      speed1 = 0
      speed2 = 0
      speed3 = 0
      speed4 = 0
      speed5 = 0
      speed6 = 0
      speed7 = 0
      speed8 = 0
      speed9 = 0
      speed10 = 0
      speed_coin1 = 0
      speed_coin2 = 0
      speed_coin3 = 0
      speed_coin4 = 0
      speed_coin5 = 0
      p.fill(87, 87, 87)
      p.rect(power_menu_pos_horizontal, power_menu_pos_vertical, power_menu_width, power_menu_height)
      p.fill(600, 50, 30)
      p.rect(flash_pos_horizontal, flash_pos_vertical, flash_width, flash_height)
      p.fill(205, 149, 12)
      p.rect(coinmaster_pos_horizontal, coinmaster_pos_vertical, coinmaster_width, coinmaster_height)
      p.fill(130, 130, 130)
      p.rect(menu_health_pos_horizontal, menu_health_pos_vertical, menu_health_width, menu_health_height)
      p.fill(255, 255, 255)
      p.textSize(60)
      p.text("Choose a Superpower", p.windowWidth / 2 - 330, p.windowHeight / 2 - 100)
      p.textSize(20)
      p.text("Flash", p.windowWidth / 2 - 278, p.windowHeight / 2 + 105)
      p.text("[1]", p.windowWidth / 2 - 267, p.windowHeight / 2 + 32)
      p.text("Coinmaster", p.windowWidth / 2 - 51, p.windowHeight / 2 + 105)
      p.text("[2]", p.windowWidth / 2 - 16, p.windowHeight / 2 + 32)
    }

    if (flash == true) {
      speed = speed * 1.5
    }

    //Death
    if (lives < 1) {
      p.fill(0, 0, 0)
      p.rect(deathscreen_pos_horizontal, deathscreen_pos_Vertical, deathscreen_width, deathscreen_height)
      p.fill(600, 50, 30)
      p.textSize(90)
      p.textAlign(p.CENTER)
      p.text("GAME OVER", p.windowWidth / 2, p.windowHeight / 2)
      p.fill(255, 255, 255)
      p.textSize(40)
      p.text("Press [Space] to continue", p.windowWidth / 2, p.windowHeight / 2 + 180)
      speed = 0
      flash = false
      coinmaster = false
      if (space == true) {
        location.reload()
      }
    }
  }
}, document.getElementById('app')!);