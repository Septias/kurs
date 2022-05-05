import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Obstacle
  let spawntrigger_obstacle = true
  let speed_obstacle = 5

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

  //Deathscreen
  let deathscreen_width = p.windowWidth
  let deathscreen_height = p.windowHeight
  let deathscreen_pos_horizontal = 0
  let deathscreen_pos_Vertical = 0
  let space = false

  //Player
  let Player_Width = 90
  let Player_height = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertical = p.windowHeight / 2 - Player_height / 2
  let lives = 3
  let speed = 6
  let up = false

  //Menu
  let menu = false
  let menu_object_width = 25
  let menu_object_height = 25
  let enemy_pos_horiozontal = p.windowWidth / 2 - 48
  let enemy_pos_vertical = p.windowHeight / 2 - 107
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

  //Superpower
  let power_menu = true
  let power_menu_width = 900
  let power_menu_height = 500
  let power_menu_pos_horizontal = p.windowWidth / 2 - power_menu_width / 2
  let power_menu_pos_vertical = p.windowHeight / 2 - power_menu_height / 2
  let power_menu_object_width = 80
  let power_menu_object_height = 80
  let flash_pos_horizontal = p.windowWidth / 2 - Player_Width / 2 - 250
  let flash_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30
  let coinmaster_pos_horizontal = p.windowWidth / 2 - Player_Width / 2
  let coinmaster_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30
  let menu_health_pos_horizontal = p.windowWidth / 2 - Player_Width / 2 + 245
  let menu_health_pos_vertical = p.windowHeight / 2 - Player_height / 2 + 30
  let flash = false
  let coinmaster = false

  //Variablen Klassen
  let obstacles: Obstacle[] = []

  //Randomizer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Background  
  p.setup = function setup() {
    p.frameRate(60)
    p.createCanvas(p.windowWidth, p.windowHeight,)
  }

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
    console.log(obstacles)

    if (p.keyCode === p.UP_ARROW) {
      up = false
    }
    if (p.keyCode === 32) {
      space = false
    }
  }

  //Draw
  p.draw = function draw() {

    //Background
    p.background(0, 0, 0)

    //Damage Obstacle and Border
    for (const obstacle of obstacles) {

      obstacle.execute_in_draw_1(p) //p weil p5 elemente verwendet werden

      obstacle.execute_in_draw_2()

      obstacle.border(p)

      obstacle.collide(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height)

      if (obstacle.collide(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height) == true) {
        lives = lives - 1
        spawntrigger_obstacle = true
      }
    }

    //Spawn Obstacle
    if (spawntrigger_obstacle == true) {
      console.log("yes")
      let new_obstacle = new Obstacle(p.windowWidth, p.windowWidth - 50, p.windowHeight - 100, 0, 35, 35, speed_obstacle, 0, 0)
      obstacles.push(new_obstacle)
      //new_obstacle.randomizer()
      spawntrigger_obstacle = false
    }

    if (spawntrigger_fast_obstacle1 == true) {
      fast_obstacle1_pos_vertical = getRndInteger(0 - fast_obstacle1_height / 2, fast_obstacle1_spawn_area_vertical)
    }
    if (spawntrigger_coin1 == true) {
      coin1_pos_vertical = getRndInteger(0 - coin1_height / 2, coin1_spawn_area_vertical)
      coin1_pos_horizontal = coin1_spawn_pos_horizontal
    }
    if (spawntrigger_health1 == true) {
      health1_pos_vertical = getRndInteger(0 - health1_height / 2, health1_spawn_area_vertical)
      health1_pos_horizontal = health1_spawn_pos_horizontal
    }

    

    //Fast_Obstacle1
    if (level > 1) {
      p.fill(138, 0, 0)
      p.rect(fast_obstacle1_pos_horizontal, fast_obstacle1_pos_vertical, fast_obstacle1_width, fast_obstacle1_height)
      fast_obstacle1_pos_horizontal = fast_obstacle1_pos_horizontal - speed_fast_obstacle1
      if (fast_obstacle1_pos_horizontal > 0) {
        spawntrigger_fast_obstacle1 = false
      }
      if (fast_obstacle1_pos_horizontal < 0) {
        fast_obstacle1_pos_horizontal = p.windowWidth + fast_obstacle1_width + rnd_number_fast_obstacle1
        spawntrigger_fast_obstacle1 = true
      }
    }

    //Damage Fast_Obstacle1
    if (Player_Position_Horizontal + Player_Width + fast_obstacle1_width >= fast_obstacle1_pos_horizontal + fast_obstacle1_width && Player_Position_Horizontal <= fast_obstacle1_pos_horizontal) {
      if (Player_Position_Vertical + Player_height + fast_obstacle1_height >= fast_obstacle1_pos_vertical + fast_obstacle1_height && Player_Position_Vertical <= fast_obstacle1_pos_vertical) {
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
          health1_pos_horizontal = p.windowWidth + health1_width + rnd_number_health1
          spawntrigger_health1 = true
        }
      }
    }

    //Collect Health1
    if (Player_Position_Horizontal + Player_Width + health1_width >= health1_pos_horizontal + health1_width && Player_Position_Horizontal <= health1_pos_horizontal) {
      if (Player_Position_Vertical + Player_height + health1_height >= health1_pos_vertical + health1_height && Player_Position_Vertical <= health1_pos_vertical) {
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
      coin1_pos_horizontal = p.windowWidth + coin1_width + rnd_number_coin1
      spawntrigger_coin1 = true
    }

    //Collect Coin 1
    if (Player_Position_Horizontal + Player_Width + coin1_width >= coin1_pos_horizontal + coin1_width && Player_Position_Horizontal <= coin1_pos_horizontal) {
      if (Player_Position_Vertical + Player_height + coin1_height >= coin1_pos_vertical + coin1_height && Player_Position_Vertical <= coin1_pos_vertical) {
        coin1_pos_horizontal = p.windowWidth + coin1_width
        spawntrigger_coin1 = true
        if (coinmaster == true) {
          coins = coins + 2
        } else {
          coins = coins + 1
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
      speed_obstacle = 0
      speed_fast_obstacle1 = 0
      speed_health1 = 0
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
      p.rect(enemy_pos_horiozontal, enemy_pos_vertical, menu_object_width, menu_object_height)
      p.fill(255, 255, 255)
      p.text("coin", p.windowWidth / 2 + 7, p.windowHeight / 2 - 30)
      p.fill(205, 149, 12)
      p.rect(menu_coin_pos_horiozontal, menu_coin_pos_vertical, menu_object_width, menu_object_height)
      p.fill(255, 255, 255)
      p.text("[Space] to close the menu", p.windowWidth / 2 + 3, p.windowHeight / 2 + 180)
    } else {
      timer_active = true
      speed = 6
      speed_obstacle = 5 + level - 1
      speed_fast_obstacle1 = 14 + level - 1
      speed_health1 = 7 + level - 1
      speed_coin1 = 6 + level - 1
    }

    //Coins/Level
    if (coins >= coins_goal) {
      coins = 0
      coins_goal = coins_goal + 5
      level = level + 1
      speed_obstacle = speed_obstacle + 1
      speed_fast_obstacle1 = speed_fast_obstacle1 + 1
      speed_health1 = speed_health1 + 1
      speed_coin1 = speed_coin1 + 1
    }

    //Superpower (Space um menu zu schließen ohne power zu wählen)
    if (power_menu == true) {
      timer_active = false
      speed = 0
      speed_obstacle = 0
      speed_coin1 = 0
      p.fill(87, 87, 87)
      p.rect(power_menu_pos_horizontal, power_menu_pos_vertical, power_menu_width, power_menu_height)
      p.fill(600, 50, 30)
      p.rect(flash_pos_horizontal, flash_pos_vertical, power_menu_object_width, power_menu_object_height)
      p.fill(205, 149, 12)
      p.rect(coinmaster_pos_horizontal, coinmaster_pos_vertical, power_menu_object_width, power_menu_object_height)
      p.fill(130, 130, 130)
      p.rect(menu_health_pos_horizontal, menu_health_pos_vertical, power_menu_object_width, power_menu_object_height)
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

class Obstacle {
  constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private x_speed: number, private x: number, private y: number) {
  }

  randomizer() {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.x = getRndInteger(this.x_min, this.x_max )//Horizontaler Spawnbereich
    this.y = getRndInteger(this.y_min, this.y_max ) //Vertikaler Spawnbereich
  }

  execute_in_draw_1(p: p5) { //Wird in der draw function aufgegriffen und ausgeführt
    p.fill(200, 50, 30)
    p.rect(this.x, this.y, this.w, this.h) //Werte werden in der draw function eingesetzt
  }

  execute_in_draw_2() {
    this.x = this.x - this.x_speed
  }

  collide(player_x: number, player_y: number, player_w: number, player_h: number) {

    if (player_x + player_w + this.w >= this.x + this.w && player_x <= this.x) {
      if (player_y + player_h + this.h >= this.y + this.h && player_y <= this.y) {
        this.x = this.x_max
        this.y = this.y_max
        return true
      }
    } else {
      return false
    }
  }

  border(p: p5) {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (this.x < 0) {
      this.x = getRndInteger(this.x_min, this.x_max )
      this.y = getRndInteger(this.y_min, this.y_max)
    }
  }
}