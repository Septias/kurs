import p5 from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Player Dimension
  let player_width = 75
  let player_height = 75

  //Player Speed
  let speed = 2

  //Player Positional Variables
  let player_position_horizontal = p.windowWidth / 2 - player_width / 2
  let player_position_vertical = p.windowHeight / 2 - player_height / 2
  let player_runoff_width = 0 - player_width
  let player_runoff_height = 0 - player_height

  //Collectible Dimensions
  let collectible_width = 25
  let collectible_height = 25

  //Collectible Positional Variables
  let collectible_spawn_area_horizontal = p.windowWidth - collectible_width / 2
  let collectible_spawn_area_vertical = p.windowHeight - collectible_height / 2
  let collectible_position_horizontal = getRndInteger(0 - collectible_width / 2, collectible_spawn_area_horizontal)
  let collectible_position_vertical = getRndInteger(0 - collectible_height / 2, collectible_spawn_area_vertical)

  //Heal Collectible Dimensions
  let heal_collectible_width = 25
  let heal_collectible_height = 25

  //Heal Collectible Positional Variables
  let heal_collectible_spawn_area_horizontal = p.windowWidth - heal_collectible_width / 2
  let heal_collectible_spawn_area_vertical = p.windowHeight - heal_collectible_height / 2
  let heal_collectible_position_horizontal = getRndInteger(0 - heal_collectible_width / 2, heal_collectible_spawn_area_horizontal)
  let heal_collectible_position_vertical = getRndInteger(0 - heal_collectible_height / 2, heal_collectible_spawn_area_vertical)


  //Obstacle Dimensions
  let obstacle_height = 30
  let obstacle_width = 30

  //Obstacle 2 Dimensions
  let obstacle2_height = 30
  let obstacle2_width = 30

  //Obstacle 3 Dimensions
  let obstacle3_height = 30
  let obstacle3_width = 30

  //Obstacle 4 Dimensions
  let obstacle4_height = 30
  let obstacle4_width = 30

  //Obstacle Positional Variables
  let obstacle_spawn_area_horizontal = p.windowWidth - obstacle_width / 2
  let obstacle_spawn_area_vertical = p.windowHeight - obstacle_height / 2
  let obstacle_position_horizontal = getRndInteger(0 - obstacle_width / 2, obstacle_spawn_area_horizontal)
  let obstacle_position_vertical = getRndInteger(0 - obstacle_height / 2, obstacle_spawn_area_vertical)

  //Obstacle 2 Positional Variables
  let obstacle2_spawn_area_horizontal = p.windowWidth - obstacle2_width / 2
  let obstacle2_spawn_area_vertical = p.windowHeight - obstacle2_height / 2
  let obstacle2_position_horizontal = getRndInteger(0 - obstacle2_width / 2, obstacle2_spawn_area_horizontal)
  let obstacle2_position_vertical = getRndInteger(0 - obstacle2_height / 2, obstacle2_spawn_area_vertical)

  //Obstacle 3 Positional Variables
  let obstacle3_spawn_area_horizontal = p.windowWidth - obstacle3_width / 2
  let obstacle3_spawn_area_vertical = p.windowHeight - obstacle3_height / 2
  let obstacle3_position_horizontal = getRndInteger(0 - obstacle3_width / 2, obstacle3_spawn_area_horizontal)
  let obstacle3_position_vertical = getRndInteger(0 - obstacle3_height / 2, obstacle3_spawn_area_vertical)

  //Obstacle 4 Positional Variables
  let obstacle4_spawn_area_horizontal = p.windowWidth - obstacle4_width / 2
  let obstacle4_spawn_area_vertical = p.windowHeight - obstacle4_height / 2
  let obstacle4_position_horizontal = getRndInteger(0 - obstacle4_width / 2, obstacle4_spawn_area_horizontal)
  let obstacle4_position_vertical = getRndInteger(0 - obstacle4_height / 2, obstacle4_spawn_area_vertical)

  //Obstacle Speed Variable
  let obstacle_positive_speed = 4
  let obstacle_negative_speed = -4
  let obstacle_speed = obstacle_negative_speed

  //Obstacle2 Speed Variable
  let obstacle2_positive_speed = 4
  let obstacle2_negative_speed = -4
  let obstacle2_speed = obstacle2_negative_speed

  //Obstacle3 Speed Variable
  let obstacle3_positive_speed = 4
  let obstacle3_negative_speed = -4
  let obstacle3_speed = obstacle3_negative_speed

  //Obstacle4 Speed Variable
  let obstacle4_positive_speed = 4
  let obstacle4_negative_speed = -4
  let obstacle4_speed = obstacle4_negative_speed


  //Obstacle spawntrigger
  let object_spawntrigger = false

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

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Helvetica');
    p.textSize(14)

  };

  //Random Integer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Handles All Keypresses
  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      moveleft = true
    }
    if (p.keyCode === p.RIGHT_ARROW) {
      moveright = true
    }
    if (p.keyCode === p.UP_ARROW) {
      moveup = true
    }
    if (p.keyCode === p.DOWN_ARROW) {
      movedown = true
    }
    if (p.keyCode === 32) {
      space_is_pressed = true
    }
  }

  //Handles All Keyrealeses
  p.keyReleased = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      moveleft = false
    }
    if (p.keyCode === p.RIGHT_ARROW) {
      moveright = false
    }
    if (p.keyCode === p.UP_ARROW) {
      moveup = false
    }
    if (p.keyCode === p.DOWN_ARROW) {
      movedown = false
    }
    if (p.keyCode === 32) {
      space_is_pressed = false
    }
  }

  p.draw = function draw() {
    p.background(0, 0, 0);

    //Obstacles Horizontal
    p.fill(145, 71, 254)
    p.rect(obstacle_position_horizontal, obstacle_position_vertical, obstacle_width, obstacle_height);
    obstacle_position_vertical = obstacle_position_vertical + obstacle_speed
    if (obstacle_position_vertical <= 0) {
      obstacle_speed = obstacle_positive_speed
    }
    if (obstacle_position_vertical >= p.windowHeight - obstacle_height) {
      obstacle_speed = obstacle_negative_speed
    }


    //Obstacles2 Horizontal
    p.fill(145, 71, 254)
    p.rect(obstacle2_position_horizontal, obstacle2_position_vertical, obstacle2_width, obstacle2_height);
    obstacle2_position_vertical = obstacle2_position_vertical + obstacle2_speed
    if (obstacle2_position_vertical <= 0) {
      obstacle2_speed = obstacle2_positive_speed
    }
    if (obstacle2_position_vertical >= p.windowHeight - obstacle2_height) {
      obstacle2_speed = obstacle2_negative_speed
    }

    //Obstacles3
    p.fill(145, 71, 254)
    p.rect(obstacle3_position_horizontal, obstacle3_position_vertical, obstacle3_width, obstacle3_height);
    obstacle3_position_horizontal = obstacle3_position_horizontal + obstacle3_speed
    if (obstacle3_position_horizontal <= 0) {
      obstacle3_speed = obstacle3_positive_speed
    }
    if (obstacle3_position_horizontal >= p.windowWidth - obstacle3_height) {
      obstacle3_speed = obstacle3_negative_speed
    }

    //Obstacles4
    p.fill(145, 71, 254)
    p.rect(obstacle4_position_horizontal, obstacle4_position_vertical, obstacle4_width, obstacle4_height);
    obstacle4_position_horizontal = obstacle4_position_horizontal + obstacle4_speed
    if (obstacle4_position_horizontal <= 0) {
      obstacle4_speed = obstacle4_positive_speed
    }
    if (obstacle4_position_horizontal >= p.windowWidth - obstacle4_height) {
      obstacle4_speed = obstacle4_negative_speed
    }


    //Collectible
    p.fill(225, 0, 127)
    p.rect(collectible_position_horizontal, collectible_position_vertical, collectible_width, collectible_height);


    //Scoreboard
    p.fill(255, 255, 255)
    p.fill(255, 255, 255)
    p.text("Highscore: " + highscore, 25, 25)
    p.text("Score: " + score_counter, 25, 50)
    p.text("Speed: " + ((speed).toFixed(1)), 25, 75)
    if (player_health == 3) {
      p.fill("green")
    }
    if (player_health == 2) {
      p.fill("orange")
    }
    if (player_health == 1) {
      p.fill(125, 0, 0)
    }
    p.text("Health: " + player_health, 25, 100)

    //Heal Collectible
    p.rect(heal_collectible_position_horizontal, heal_collectible_position_vertical, heal_collectible_width, heal_collectible_height);


    //Player
    if (player_health == 3) {
      p.fill("green")
    }
    if (player_health == 2) {
      p.fill("orange")
    }
    if (player_health == 1) {
      p.fill(125, 0, 0)
    }
    p.rect(player_position_horizontal, player_position_vertical, player_width, player_height);


    if ((player_width <= collectible_width) || (player_height <= collectible_height)) {
      p.fill("red")
      p.textSize(70)
      p.text("WARNING!! SIZES NOT COMPATIBLE!!", 100, 85)
    }

    //Deathscreen
    if (player_health == 0) {


      p.background(0, 0, 0)
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
        location.reload()



      }
    }





    //Collectible Position Debug:
    //console.log(collectible_position_horizontal, collectible_position_vertical);


    //Movement Checks
    if (moveleft == true) {
      player_position_horizontal = player_position_horizontal - speed
      //console.log(player_position_horizontal);
      if (player_position_horizontal <= player_runoff_width) {
        player_position_horizontal = p.windowWidth
      }
    }
    if (moveright == true) {
      player_position_horizontal = player_position_horizontal + speed
      //console.log(player_position_horizontal);
      if (player_position_horizontal >= p.windowWidth) {
        player_position_horizontal = player_runoff_width
      }
    }
    if (moveup == true) {
      player_position_vertical = player_position_vertical - speed
      //console.log(player_position_vertical);
      if (player_position_vertical <= player_runoff_height) {
        player_position_vertical = p.windowHeight
      }
    }
    if (movedown == true) {
      player_position_vertical = player_position_vertical + speed
      //console.log(player_position_vertical);
      if (player_position_vertical >= p.windowHeight) {
        player_position_vertical = player_runoff_height
      }
    }

    //Collectible Checks
    if (player_position_horizontal + player_width >= collectible_position_horizontal + collectible_width && player_position_horizontal <= collectible_position_horizontal) {
      if (player_position_vertical + player_height >= collectible_position_vertical + collectible_height && player_position_vertical <= collectible_position_vertical) {


        //Obstacle Spawntrigger
        object_spawntrigger = true

        //Incremeants Scoreboard by 1
        score_counter = score_counter + 1
        speed = speed + 0.1

        console.log("hit");
      }
    }
    //Heal Collectible Checks
    if (player_health < 3) {
      if (player_position_horizontal + player_width >= heal_collectible_position_horizontal + heal_collectible_width && player_position_horizontal <= heal_collectible_position_horizontal) {
        if (player_position_vertical + player_height >= heal_collectible_position_vertical + heal_collectible_height && player_position_vertical <= heal_collectible_position_vertical) {


          //Obstacle Spawntrigger
          object_spawntrigger = true

          //Incremeants Health by 1
          if (player_health < 3) {
            player_health = player_health + 1
          }
          console.log("Heal");
        }
      }
    }


    //Obstacle Checks

    //obstacle
    if (player_position_horizontal + player_width + obstacle_width >= obstacle_position_horizontal + obstacle_width && player_position_horizontal - obstacle_width <= obstacle_position_horizontal) {
      if (player_position_vertical + player_height + obstacle_height >= obstacle_position_vertical + obstacle_height && player_position_vertical - obstacle_height <= obstacle_position_vertical) {

        //obstacle spawntrigger for 1 & 2
        object_spawntrigger = true

        player_health = player_health - 1

        //Obstacle speed + 1
        obstacle_negative_speed + 0.005
        obstacle2_negative_speed + 0.005
        obstacle3_negative_speed + 0.005
        obstacle4_negative_speed + 0.005

        obstacle_positive_speed + 0.005
        obstacle2_positive_speed + 0.005
        obstacle3_positive_speed + 0.005
        obstacle4_positive_speed + 0.005


        console.log("Obstacle!");
      }
    }
    //obstacle2
    if (player_position_horizontal + player_width + obstacle2_width >= obstacle2_position_horizontal + obstacle2_width && player_position_horizontal - obstacle2_width <= obstacle2_position_horizontal) {
      if (player_position_vertical + player_height + obstacle2_height >= obstacle2_position_vertical + obstacle2_height && player_position_vertical - obstacle2_height <= obstacle2_position_vertical) {

        //obstacle spawntrigger for 1 & 2
        object_spawntrigger = true

        player_health = player_health - 1

        //Obstacle speed + 1
        obstacle_negative_speed + 0.005
        obstacle2_negative_speed + 0.005
        obstacle3_negative_speed + 0.005
        obstacle4_negative_speed + 0.005

        obstacle_positive_speed + 0.005
        obstacle2_positive_speed + 0.005
        obstacle3_positive_speed + 0.005
        obstacle4_positive_speed + 0.005

        console.log("Obstacle!");
      }
    }
    //obstacle3
    if (player_position_horizontal + player_width + obstacle3_width >= obstacle3_position_horizontal + obstacle3_width && player_position_horizontal - obstacle3_width <= obstacle3_position_horizontal) {
      if (player_position_vertical + player_height + obstacle3_height >= obstacle3_position_vertical + obstacle3_height && player_position_vertical - obstacle3_height <= obstacle3_position_vertical) {

        //obstacle spawntrigger for 1 & 2 & 3
        object_spawntrigger = true

        player_health = player_health - 1

       //Obstacle speed + 1
       obstacle_negative_speed + 0.005
       obstacle2_negative_speed + 0.005
       obstacle3_negative_speed + 0.005
       obstacle4_negative_speed + 0.005

       obstacle_positive_speed + 0.005
       obstacle2_positive_speed + 0.005
       obstacle3_positive_speed + 0.005
       obstacle4_positive_speed + 0.005


        console.log("Obstacle!");
      }
    }
    //obstacle4
    if (player_position_horizontal + player_width + obstacle4_width >= obstacle4_position_horizontal + obstacle4_width && player_position_horizontal - obstacle4_width <= obstacle4_position_horizontal) {
      if (player_position_vertical + player_height + obstacle4_height >= obstacle4_position_vertical + obstacle4_height && player_position_vertical - obstacle4_height <= obstacle4_position_vertical) {

        //obstacle spawntrigger for 1 & 2
        object_spawntrigger = true

        player_health = player_health - 1

        //Obstacle speed + 1
        obstacle_negative_speed + 0.005
        obstacle2_negative_speed + 0.005
        obstacle3_negative_speed + 0.005
        obstacle4_negative_speed + 0.005

        obstacle_positive_speed + 0.005
        obstacle2_positive_speed + 0.005
        obstacle3_positive_speed + 0.005
        obstacle4_positive_speed + 0.005


        console.log("Obstacle!");
      }
    }
    //obstacle spawntrigger
    if (object_spawntrigger == true) {

      //Random Position for Collectible
      collectible_position_horizontal = getRndInteger(0, collectible_spawn_area_horizontal)
      collectible_position_vertical = getRndInteger(0, collectible_spawn_area_vertical)

      //Random Position for Heal Collectible
      heal_collectible_position_horizontal = getRndInteger(0, heal_collectible_spawn_area_horizontal)
      heal_collectible_position_vertical = getRndInteger(0, heal_collectible_spawn_area_vertical)

      //Random Location for Obstacle 1
      obstacle_position_horizontal = getRndInteger(0 - obstacle_width, obstacle_spawn_area_horizontal)
      obstacle_position_vertical = getRndInteger(0 - obstacle_height, obstacle_spawn_area_vertical)

      //Random Location for Obstacle 2
      obstacle2_position_horizontal = getRndInteger(0 - obstacle2_width, obstacle2_spawn_area_horizontal)
      obstacle2_position_vertical = getRndInteger(0 - obstacle2_height, obstacle2_spawn_area_vertical)

      //Random Location for Obstacle 3
      obstacle3_position_horizontal = getRndInteger(0 - obstacle3_width, obstacle3_spawn_area_horizontal)
      obstacle3_position_vertical = getRndInteger(0 - obstacle3_height, obstacle3_spawn_area_vertical)

      //Random Location for Obstacle4
      obstacle4_position_horizontal = getRndInteger(0 - obstacle4_width, obstacle4_spawn_area_horizontal)
      obstacle4_position_vertical = getRndInteger(0 - obstacle4_height, obstacle4_spawn_area_vertical)


      object_spawntrigger = false
    }
  };

}, document.getElementById('app')!);


