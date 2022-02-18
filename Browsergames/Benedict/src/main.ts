import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  

  let object_width = 300
  let object_hight = 100


  let speed = 4

  let object_position_horizontal = p.windowWidth / 2 - object_width / 2
  let object_position_vertical = p.windowHeight / 2 - object_hight / 2
  let object_runoff_width = 0 - object_width
  let object_runoff_hight = 0 - object_hight

  let moveleft = false
  let moveright = false
  let moveup = false
  let movedown = false

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };


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
    p.fill(2, 200, 200);
    p.rect(object_position_horizontal, object_position_vertical, object_width, object_hight);
    if (moveleft == true) {
      object_position_horizontal = object_position_horizontal - speed
      console.log(object_position_horizontal);
      if (object_position_horizontal <= object_runoff_width) {
        object_position_horizontal = p.windowWidth
      }
    }
    if (moveright == true) {
      object_position_horizontal = object_position_horizontal + speed
      console.log(object_position_horizontal);
      if (object_position_horizontal >= p.windowWidth) {
        object_position_horizontal = object_runoff_width
      }
    }
    if (moveup == true) {
      object_position_vertical = object_position_vertical - speed
      console.log(object_position_vertical);
      if (object_position_vertical <= object_runoff_hight) {
        object_position_vertical = p.windowHeight
      }
    }
    if (movedown == true) {
      object_position_vertical = object_position_vertical + speed
      console.log(object_position_vertical);
      if (object_position_vertical >= p.windowHeight) {
        object_position_vertical = object_runoff_hight
      }
    }
  };




}, document.getElementById('app')!);





