import p5 from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //framrate
  let framrate = 60


  //Random Integer
  function getRndInteger(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  //setup
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Helvetica');
    p.textSize(14)
    p.frameRate(framrate)

  };
  //draw
  p.draw = function draw() {
    p.background(0, 0, 0);

    


  }


  }, document.getElementById('app')!);


