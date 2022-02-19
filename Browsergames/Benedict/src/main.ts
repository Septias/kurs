import p5 from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Player Health
  let player_health = 3

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
  let collectible_position_horizontal = getRndInteger(0 - collectible_width, collectible_spawn_area_horizontal)
  let collectible_position_vertical = getRndInteger(0 - collectible_height, collectible_spawn_area_vertical)

  //Obstacle Dimensions
  let obstacle_height = 30
  let obstacle_width = 30

  //Obstacle 2 Dimensions
  let obstacle2_height = 30
  let obstacle2_width = 30

  //Obstacle Positional Variables
  let obstacle_spawn_area_horizontal = p.windowWidth - obstacle_width / 2
  let obstacle_spawn_area_vertical = p.windowHeight - obstacle_height / 2
  let obstacle_position_horizontal = getRndInteger(0 - obstacle_width, obstacle_spawn_area_horizontal)
  let obstacle_position_vertical = getRndInteger(0 - obstacle_height, obstacle_spawn_area_vertical)
  
  //Obstacle 2 Positional Variables
  let obstacle2_spawn_area_horizontal = p.windowWidth - obstacle2_width / 2
  let obstacle2_spawn_area_vertical = p.windowHeight - obstacle2_height / 2
  let obstacle2_position_horizontal = getRndInteger(0 - obstacle2_width, obstacle2_spawn_area_horizontal)
  let obstacle2_position_vertical = getRndInteger(0 - obstacle2_height, obstacle2_spawn_area_vertical)

  //Move Variabels
  let moveleft = false
  let moveright = false
  let moveup = false
  let movedown = false

  //Scoreboard Variables
  let score_counter = 0

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
  }

  p.draw = function draw() {
    p.background(0, 0, 0);

    //Obstacles
    p.fill(145, 71, 254)
    p.rect(obstacle_position_horizontal, obstacle_position_vertical, obstacle_width, obstacle_height);

    //Obstacles2
    p.fill(145, 71, 254)
    p.rect(obstacle2_position_horizontal, obstacle2_position_vertical, obstacle2_width, obstacle2_height);

    //Collectible
    p.fill(255, 0, 0)
    p.rect(collectible_position_horizontal, collectible_position_vertical, collectible_width, collectible_height);

    //Player
    if (player_health == 3) {
      p.fill(2,200,200)
    }
    if (player_health == 2) {
      p.fill("orange")
    }
    if (player_health == 1) {
      p.fill("red")
    }
    p.rect(player_position_horizontal, player_position_vertical, player_width, player_height);

    //Scoreboard
    p.fill(255, 255, 255)
    p.text("Score: " + score_counter, 25, 25)
    p.text("Speed: " + speed, 25, 50)
    if (player_health == 3) {
      p.fill(255,255,255)
    }
    if (player_health == 2) {
      p.fill("orange")
    }
    if (player_health == 1) {
      p.fill("red")
    }
    p.text("Health: " + player_health,25,75)
    
    if ((player_width <= collectible_width) || (player_height <= collectible_height)) {
      p.fill("red")
      p.textSize(70)
      p.text("WARNING!! SIZES NOT COMPATIBLE!!", 100, 85)
    }
    

    //Collectible Position Debug
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

        //Random Position for Collectible
        collectible_position_horizontal = getRndInteger(0, collectible_spawn_area_horizontal)
        collectible_position_vertical = getRndInteger(0, collectible_spawn_area_vertical)

        //Incremeants Scoreboard by 1
        score_counter = score_counter + 1
        speed = speed + 0.1

        console.log("hit");
      }
    }

    //Obstacle Checks
    if (player_position_horizontal + player_width + obstacle_width >= obstacle_position_horizontal + obstacle_width && player_position_horizontal - obstacle_width <= obstacle_position_horizontal) {
      if (player_position_vertical + player_height + obstacle_height >= obstacle_position_vertical + obstacle_height && player_position_vertical - obstacle_height <= obstacle_position_vertical) {
        //Random Location for Obstacle 1
        obstacle_position_horizontal = getRndInteger(0 - obstacle_width, obstacle_spawn_area_horizontal)
        obstacle_position_vertical = getRndInteger(0 - obstacle_height, obstacle_spawn_area_vertical)
        
        //Random Location for Obstacle 2
        obstacle2_position_horizontal = getRndInteger(0 - obstacle2_width, obstacle2_spawn_area_horizontal)
        obstacle2_position_vertical = getRndInteger(0 - obstacle2_height, obstacle2_spawn_area_vertical)

        player_health = player_health - 1

        if (player_health == 0) {
          location.reload()
        }
        

        console.log("Obstacle!");
      }
    }
    
    if (player_position_horizontal + player_width + obstacle2_width >= obstacle2_position_horizontal + obstacle2_width && player_position_horizontal - obstacle2_width<= obstacle2_position_horizontal) {
      if (player_position_vertical + player_height + obstacle2_height >= obstacle2_position_vertical + obstacle2_height && player_position_vertical - obstacle2_height <= obstacle2_position_vertical) {
        //Random Location for Obstacle 1
        obstacle_position_horizontal = getRndInteger(0 - obstacle_width, obstacle_spawn_area_horizontal)
        obstacle_position_vertical = getRndInteger(0 - obstacle_height, obstacle_spawn_area_vertical)
        
        //Random Location for Obstacle 2
        obstacle2_position_horizontal = getRndInteger(0 - obstacle2_width, obstacle2_spawn_area_horizontal)
        obstacle2_position_vertical = getRndInteger(0 - obstacle2_height, obstacle2_spawn_area_vertical)
        
        player_health = player_health - 1

        if (player_health == 0) {
          location.reload()
        }


        console.log("Obstacle!");
      }
    }
  };
}, document.getElementById('app')!);