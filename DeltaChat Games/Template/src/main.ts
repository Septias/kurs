import p5 from 'p5';
import { Player } from './player';
import { Obstacle } from './obstacle';
import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;
  let player = new Player(10, 10);
  let obstacles: Obstacle[] = [];


  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight - 5);
  };

  p.keyPressed = () => {
    if (p.keyCode === 32) { 
      player.jump(p)
    }
  }

  setInterval(() => {
    obstacles.push(new Obstacle(p.windowWidth, p.windowHeight, 50, 50));
  }, 1000);

  p.draw = function draw() {
    p.background(0);

    // spieler updaten
    player.update(p);
    player.draw(p);

    // Hindernisse updaten

    for (const obstacle of obstacles ) {
      obstacle.update(p);
      obstacle.draw(p);
    }
  };

}, document.getElementById('app')!);

