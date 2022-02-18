import p5 from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;


  //Player Dimension
  let player_width = 150
  let player_height = 150

  //Player Speed
  let speed = 15

  //Player Positional Variables
  let player_position_horizontal = p.windowWidth / 2 - player_width / 2
  let player_position_vertical = p.windowHeight / 2 - player_height / 2
  let player_runoff_width = 0 - player_width
  let player_runoff_height = 0 - player_height

  //Collectible Dimensions
  let collectible_width = 50
  let collectible_height = 50


  //Collectible Positional Variables
  let collectible_spawn_area_horizontal = p.windowWidth - collectible_width / 2
  let collectible_spawn_area_vertical = p.windowHeight - collectible_height / 2
  let collectible_position_horizontal = getRndInteger(0, collectible_spawn_area_horizontal)
  let collectible_position_vertical = getRndInteger(0, collectible_spawn_area_vertical)

  //Move Variabels
  let moveleft = false
  let moveright = false
  let moveup = false
  let movedown = false

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  //Random Integer
  function getRndInteger(min:any, max:any) {
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
    
    //Collectible
    p.fill(255,0,0)
    p.rect(collectible_position_horizontal, collectible_position_vertical, collectible_width, collectible_height);
    
    //Player
    p.fill(2, 200, 200);
    p.rect(player_position_horizontal, player_position_vertical, player_width, player_height);

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
    if (player_position_horizontal + player_width >= collectible_position_horizontal + collectible_width && player_position_horizontal - player_width <= collectible_position_horizontal - collectible_width) {
      if (player_position_vertical + player_height >= collectible_position_vertical + collectible_height && player_position_vertical - player_height <= collectible_position_vertical - collectible_height) {

        collectible_position_horizontal = getRndInteger(0, collectible_spawn_area_horizontal)
        collectible_position_vertical = getRndInteger(0, collectible_spawn_area_vertical)

        console.log("hit");
      }
    }
  };
}, document.getElementById('app')!);