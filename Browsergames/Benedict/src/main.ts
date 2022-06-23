import { inAppPurchase } from 'electron/main';
import p5, { Vector } from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  //Player Dimension
  let player_width = 75
  let player_height = 75

  //Player Positional Variables
  let player_position_horizontal = 0
  let player_position_vertical = 0
  let player_runoff_width = 0 - player_width
  let player_runoff_height = 0 - player_height

  // spawntrigger
  let obstacle_spawntrigger = true
  let player_spawntrigger = true
  let collectible_spawntrigger = true
  let heal_collectible_spawntrigger = true
  let bullet_spawntrigger = false

  //Move Variabels  
  let moveleft = false
  let moveright = false
  let moveup = false
  let movedown = false

  //Scoreboard Variables
  let score_counter = 0
  let player_health = 3
  let highscore = 0

  //Deathscreen variables 
  let space_is_pressed = false

  //setup
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Helvetica');
    p.textSize(14)
    p.frameRate(60)
  };

  //arrays
  let obstacles: obstacle[] = []

  let players: player[] = []

  let heal_collectibles: heal_collectible[] = []

  let collectibles: collectible[] = []

  let bullets: bullet[] = []

  //handles all key presses
  p.keyPressed = function () {
    if (p.keyCode === 65) {
      moveleft = true
    }
    if (p.keyCode === 68) {
      moveright = true
    }
    if (p.keyCode === 87) {
      moveup = true
    }
    if (p.keyCode === 83) {
      movedown = true
    }
    if (p.keyCode === 32) {
      space_is_pressed = true
      bullet_spawntrigger = true

    }
  }

  //Handles All Keyrealeses
  p.keyReleased = function () {
    if (p.keyCode === 65) {
      moveleft = false
    }
    if (p.keyCode === 68) {
      moveright = false
    }
    if (p.keyCode === 87) {
      moveup = false
    }
    if (p.keyCode === 83) {
      movedown = false
    }
    if (p.keyCode === 32) {
      space_is_pressed = false
      bullet_spawntrigger = false
    }
  }
  //draw
  p.draw = function draw() {
    p.background(0, 0, 0);

    //bullet spawntrigger
    if (bullet_spawntrigger == true) {


      bullets.push(new bullet(player_position_horizontal + player_width / 2, 
          player_position_vertical + player_height / 2, 15, 15, 10, 10, 10, 10, 0))

      for (const bullet of bullets) {
        bullet.direction_check(p)
      }
    }

    //update bullet
    for (const [index, bullet] of bullets) {

      bullet.draw(p)
      bullet.update()
      bullet.runoff(p)

      if (bullet.runoff(p) == true) {
        bullets.splice(index, 1)
      }
    }

    //update collectible
    for (const collectible of collectibles) {
      collectible.x_min
      collectible.draw(p)

      collectible.collide(player_position_horizontal, player_position_vertical, player_runoff_width, player_height)

      if (collectible.collide(player_position_horizontal, player_position_vertical, player_width, player_height) == true) {
        obstacle_spawntrigger = true
        collectible_spawntrigger = true
        heal_collectible_spawntrigger = true
        score_counter++
      }

    }

    //update healcollectible
    for (const heal_collectible of heal_collectibles) {

      heal_collectible.draw(p)

      heal_collectible.collide(player_position_horizontal, player_position_vertical, player_runoff_width, player_height)

      if (player_health <= 2 && player_health > 0) {
        if (heal_collectible.collide(player_position_horizontal, player_position_vertical, player_width, player_height) == true) {
          obstacle_spawntrigger = true
          collectible_spawntrigger = true
          heal_collectible_spawntrigger = true
          player_health++
        }
      }

    }

    //update obstacle
    for (const obstacle of obstacles) {

      obstacle.update()


      obstacle.draw(p)

      obstacle.richtungswechsler()

      obstacle.collide(player_position_horizontal, player_position_vertical, player_width, player_height)

      if (obstacle.collide(player_position_horizontal, player_position_vertical, player_width, player_height) == true) {
        obstacle_spawntrigger = true
        collectible_spawntrigger = true
        heal_collectible_spawntrigger = true
        player_health--
      }

    }

    //update player
    for (const player of players) {

      player.draw(p)

      player.update()

      player.runoff()


    }

    //obstacle spawntrigger
    if (obstacle_spawntrigger == true) {

      obstacles.length = 0

      obstacles.push(new obstacle(1, p.windowWidth, 1, p.windowHeight, 30, 30, 4, 0, 0, 0))
      obstacles.push(new obstacle(1, p.windowWidth, 1, p.windowHeight, 30, 30, 4, 0, 0, 0))
      obstacles.push(new obstacle(1, p.windowWidth, 1, p.windowHeight, 30, 30, 0, 4, 0, 0))
      obstacles.push(new obstacle(1, p.windowWidth, 1, p.windowHeight, 30, 30, 0, 4, 0, 0))

      for (const obstacle of obstacles) {
        obstacle.randomizer()
      }
      obstacle_spawntrigger = false
    }

    //collectible spawntrigger
    if (collectible_spawntrigger == true) {

      collectibles.length = 0

      collectibles.push(new collectible(0, p.windowWidth, 0, p.windowHeight, 25, 25, 0, 0))

      for (const collectible of collectibles) {
        collectible.randomizer()
      }

      collectible_spawntrigger = false
    }

    //heal_collectible spawntrigger
    if (heal_collectible_spawntrigger == true) {

      heal_collectibles.length = 0

      heal_collectibles.push(new heal_collectible(0, p.windowWidth, 0, p.windowHeight, 25, 25, 0, 0))

      for (const heal_collectible of heal_collectibles) {
        heal_collectible.randomizer()
      }

      heal_collectible_spawntrigger = false
    }

    //player spawntrigger
    if (player_spawntrigger == true) {
      players.length = 0

      player_position_horizontal = p.windowWidth / 2 - player_width / 2

      player_position_vertical = p.windowHeight / 2 - player_height / 2

      players.push(new player(4))

      player_spawntrigger = false
    }

    //Scoreboard
    p.textAlign(p.LEFT)
    p.textSize(14)
    p.fill(255, 255, 255)
    p.fill(255, 255, 255)
    p.text("Highscore: " + highscore, 25, 25)
    p.text("Score: " + score_counter, 25, 50)
    if (player_health == 3) {
      p.fill("green")
    }
    if (player_health == 2) {
      p.fill("orange")
    }
    if (player_health == 1) {
      p.fill(125, 0, 0)
    }
    p.text("Health: " + player_health, 25, 75)


    //Deathscreen
    if (player_health <= 0) {
      p.fill(0, 0, 0)
      p.rect(0, 0, p.windowWidth, p.windowHeight)
      p.textAlign(p.CENTER)
      p.textSize(50)
      p.fill(153, 0, 0)
      p.text("You Died", p.windowWidth / 2, p.windowHeight / 2 - 100)
      p.fill(255, 255, 255)
      p.text("You had a famous score of " + score_counter, p.windowWidth / 2, p.windowHeight / 2)
      p.text("Press Space to restart", p.windowWidth / 2, p.windowHeight / 2 + 200)
      if (score_counter > highscore) {
        highscore = score_counter
      }
      if (space_is_pressed == true) {
        player_health = 3
        score_counter = 0
        player_spawntrigger = true
        obstacle_spawntrigger = true
        collectible_spawntrigger = true
        heal_collectible_spawntrigger = true
      }
    }

  }, document.getElementById('app')!;

  //classes
  class player {
    constructor(public speed: number) {
    }
    draw(p: p5) {
      if (player_health >= 3) {
        p.fill("green")
      }
      if (player_health == 2) {
        p.fill("orange")
      }
      if (player_health == 1) {
        p.fill(125, 0, 0)
      }
      p.rect(player_position_horizontal, player_position_vertical, player_width, player_height);
      p.text(player_health, player_position_horizontal + player_width / 2 - p.textWidth(player_health.toString()) / 2, player_position_vertical - 10)
    }
    update() {
      if (moveup == true) {
        player_position_vertical = player_position_vertical - this.speed
      }
      if (movedown == true) {
        player_position_vertical = player_position_vertical + this.speed
      }
      if (moveleft == true) {
        player_position_horizontal = player_position_horizontal - this.speed
      }
      if (moveright == true) {
        player_position_horizontal = player_position_horizontal + this.speed
      }
    }
    runoff() {
      if (player_position_horizontal >= p.windowWidth) {
        player_position_horizontal = player_runoff_width
      }
      if (player_position_horizontal <= player_runoff_width) {
        player_position_horizontal = p.windowWidth
      }
      if (player_position_vertical >= p.windowHeight) {
        player_position_vertical = player_runoff_height
      }
      if (player_position_vertical <= player_runoff_height) {
        player_position_vertical = p.windowHeight
      }
    }
  }
  class obstacle {
    constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private x_speed: number, private y_speed: number, private x: number, private y: number) {
    }

    randomizer() {
      function getRndInteger(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      this.x = getRndInteger(this.x_min, this.x_max - this.w - 1)
      this.y = getRndInteger(this.y_min, this.y_max - this.h - 1)
    }
    draw(p: p5) {
      p.fill(145, 71, 254)
      p.rect(this.x, this.y, this.w, this.h)

    }
    update() {

      this.x = this.x + this.x_speed
      this.y = this.y + this.y_speed


    }
    ftr() {
      if (this.x <= 0) {
        this.x_speed = 0 - this.x_speed
      }
      if (this.x >= this.x_max - this.w) {
        this.x_speed = 0 - this.x_speed
      }
      if (this.y <= 0) {
        this.y_speed = 0 - this.y_speed
      }
      if (this.y >= this.y_max - this.h) {
        this.y_speed = 0 - this.y_speed
      }
    }
    collide(x_player: number, y_player: number, w_player: number, h_player: number) {

      if (x_player + w_player + this.w >= this.x + this.w && x_player - this.w <= this.x && y_player + h_player + this.h >= this.y + this.h && y_player - this.h <= this.y) {
        return true
      }
      else {
        return false
      }
    }
  }
  class collectible {
    constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private x: number, private y: number) {
    }
    randomizer() {
      function getRndInteger(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      this.x = getRndInteger(this.x_min, this.x_max - this.w)
      this.y = getRndInteger(this.y_min, this.y_max - this.h)
    }
    draw(p: p5) {
      p.fill(225, 0, 127)
      p.rect(this.x, this.y, this.w, this.h);
    }

    collide(x_player: number, y_player: number, w_player: number, h_player: number) {
      if (x_player + w_player >= this.x + this.w && x_player <= this.x && y_player + h_player >= this.y + this.h && y_player <= this.y) {
        return true
      }
      else {
        return false
      }
    }

  }
  class heal_collectible {
    constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private x: number, private y: number) {
    }
    randomizer() {
      function getRndInteger(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      this.x = getRndInteger(this.x_min, this.x_max - this.w)
      this.y = getRndInteger(this.y_min, this.y_max - this.h)
    }
    draw(p: p5) {
      if (player_health >= 3) {
        p.fill("green")
      }
      if (player_health == 2) {
        p.fill("orange")
      }
      if (player_health == 1) {
        p.fill(125, 0, 0)
      }
      p.rect(this.x, this.y, this.w, this.h);
    }

    collide(x_player: number, y_player: number, w_player: number, h_player: number) {
      if (x_player + w_player >= this.x + this.w && x_player <= this.x && y_player + h_player >= this.y + this.h && y_player <= this.y) {
        return true
      }
      else {
        return false
      }
    }

  }
  class bullet {
    constructor(private x: number, private y: number, private w: number, private h: number, private x_speed1: number, private x_speed2: number, private y_speed1: number, private y_speed2: number, private direction: number) {
    }
    direction_check(p: p5) {

      this.direction = (player_position_horizontal + player_width / 2 - p.mouseX) / (player_position_vertical + player_height / 2 - p.mouseY)
      if (player_position_horizontal + player_width / 2 < p.mouseX && player_position_vertical + player_height / 2 < p.mouseY) {
        this.x_speed2 = this.x_speed1 * this.direction
        this.y_speed2 = this.y_speed1
      }
      if (player_position_horizontal + player_width / 2 > p.mouseX && player_position_vertical + player_height / 2 < p.mouseY) {
        this.x_speed2 = this.x_speed1 * this.direction
        this.y_speed2 = this.y_speed1
      }
      if (player_position_horizontal + player_width / 2 > p.mouseX && player_position_vertical + player_height / 2 > p.mouseY) {
        this.x_speed2 = 0 - this.x_speed1 * this.direction
        this.y_speed2 = 0 - this.y_speed1
      }
      if (player_position_horizontal + player_width / 2 < p.mouseX && player_position_vertical + player_height / 2 > p.mouseY) {
        this.x_speed2 = 0 - this.x_speed1 * this.direction
        this.y_speed2 = 0 - this.y_speed1
      }
    }
    draw(p: p5) {
      p.fill("blue")
      p.rect(this.x, this.y, this.w, this.h)
    }
    update() {
      this.x = this.x + this.x_speed2
      this.y = this.y + this.y_speed2
    }
    runoff(p: p5) {
      if (this.x <= 0 - this.w || this.x >= p.windowWidth || this.y <= 0 - this.h || this.y >= p.windowHeight) {
        return true
      }
      else {
        return false
      }
    }
  }

})
