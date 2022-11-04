import p5 from "p5";
import "./style.css";

import { Coin } from "./coins"
import { coins } from "./coins"
import { Health } from "./health"
import { healthpack } from "./health"

class Obstacle {
  constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private obstacle_speed: number, private x: number, private y: number) {
  }

  randomizer() {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.x = getRndInteger(this.x_min, this.x_max)//Horizontaler Spawnbereich
    this.y = getRndInteger(this.y_min, this.y_max) //Vertikaler Spawnbereich
  }

  execute_in_draw_1(p: p5) { //Wird in der draw function aufgegriffen und ausgeführt
    p.fill(200, 50, 30)
    p.rect(this.x, this.y, this.w, this.h) //Werte werden in der draw function eingesetzt
  }

  execute_in_draw_2() {
    this.x = this.x - this.obstacle_speed
  }

  collide(player_x: number, player_y: number, player_w: number, player_h: number) {

    if (player_x + player_w + this.w >= this.x + this.w && player_x <= this.x) {
      if (player_y + player_h + this.h >= this.y + this.h && player_y <= this.y) {

        return true
      }
    }
    return false
  }

  border() {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (this.x < 0) {
      this.x = getRndInteger(this.x_min, this.x_max)
      this.y = getRndInteger(this.y_min, this.y_max)
    }
  }
}

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Player
  let Player_Width = 90
  let Player_height = 90
  let Player_Position_Horizontal = p.windowWidth / 2 - Player_Width / 2
  let Player_Position_Vertical = p.windowHeight / 2 - Player_height / 2
  let lives = 3
  let speed = 6
  let up = false

  //Deathscreen
  let space = false

  //Score
  let coin_item = 0

  //Variablen Klassen Install p5 Contributor Library
  let obstacles: Obstacle[] = []

  let maintheme;
  let loopStart = 0
  let loopDuration = 3

  maintheme = window.loadSound("src/maintheme.mp3")
  maintheme.play()

  //Preload
  /*p.preload = function preload(){
    
  }*/

  //Background  
  p.setup = function setup() {
    p.frameRate(60)
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  //Keys
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

  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  obstacles.push(new Obstacle(p.windowWidth + 50, p.windowWidth + 300, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))

  coins.push(new Coin(p.windowWidth + 50, p.windowWidth + 200, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  coins.push(new Coin(p.windowWidth + 50, p.windowWidth + 200, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  coins.push(new Coin(p.windowWidth + 50, p.windowWidth + 200, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))
  coins.push(new Coin(p.windowWidth + 50, p.windowWidth + 200, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))

  healthpack.push(new Health(p.windowWidth + 50, p.windowWidth + 200, p.windowHeight - 100, 0, 35, 35, p.random(5, 11), 0, 0))

  //Draw
  p.draw = function draw() {

    //Background
    p.background(0, 0, 0)

    //Damage Obstacle, Border
    for (const obstacle of obstacles) {
      obstacle.execute_in_draw_1(p) //p weil p5 elemente verwendet werden
      obstacle.execute_in_draw_2()
      obstacle.border()

      if (obstacle.collide(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height) == true) {
        lives = lives - 1
        obstacle.randomizer()
      }
    }

    //Collect Coin, Border
    for (const coin of coins) {
      coin.coin_execute_in_draw_1(p)
      coin.coin_execute_in_draw_2()
      coin.coin_border()

      if (coin.coin_collect(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height) == true) {
        coin_item = coin_item + 1
        coin.coin_randomizer()
      }
    }

    //Collect Healthpack, Border
    for (const health of healthpack) {
      if (lives == 1) {
        health.health_execute_in_draw_1(p)
        health.health_execute_in_draw_2()
        health.health_border()
      }

      if (health.health_collect(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height) == true) {
        lives = lives + 1
        health.health_randomizer()
      }
    }

    //Player
    p.fill(160, 32, 240)
    p.rect(Player_Position_Horizontal, Player_Position_Vertical, Player_Width, Player_height)
    if (up == true) {
      Player_Position_Vertical = Player_Position_Vertical - speed
    }
    else {
      Player_Position_Vertical = Player_Position_Vertical + speed * 1.3
    }
    if (Player_Position_Vertical > p.windowHeight - Player_height) {
      Player_Position_Vertical = p.windowHeight - Player_height
      lives = 0
    }
    if (Player_Position_Vertical < 0) {
      Player_Position_Vertical = 0
    }

    //Text
    p.textFont("Calibri")
    p.fill(255, 255, 255)
    p.textSize(45)
    p.text("Lives: " + lives, p.windowWidth / 2 - 100, 50)
    p.text("Score: " + coin_item, p.windowWidth / 2 + 100, 50)

    //Death
    if (lives < 1) {
      p.fill(0, 0, 0)
      p.rect(0, 0, p.windowWidth, p.windowHeight)
      p.textAlign(p.CENTER)
      p.fill(255, 255, 255)
      p.text("Press [Space] to continue", p.windowWidth / 2, p.windowHeight / 2 + 100)
      p.fill(600, 50, 30)
      p.textSize(90)
      p.text("GAME OVER", p.windowWidth / 2, p.windowHeight / 2)
      speed = 0
      if (space == true) {
        location.reload()
      }
    }
  }
}, document.getElementById("app")!);