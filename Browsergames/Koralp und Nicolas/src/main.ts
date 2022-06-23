import p5 from 'p5';
import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;




  var x = 100
  var y = 100
  var up = false
  p.setup = function setup() {
    p.createCanvas(p.windowWidth,p.windowHeight)
  };


    p.keyPressed = () => {
      if (p.keyCode == 32) {
        up = true
      }
      
    }

    p.keyReleased = () => {
      if (p.keyCode == 32){
      up = false
    }
    }

  
    

  p.draw = function draw() {
    p.background(255,255,0);
    p.fill(255,0,0)
      p.rect(x,y,100,100)

    if (up == true){
      y = y-10
    }else y = y+10







  p.setup = function setup() {
    p.createCanvas(400,400)
    
  };

  p.keyPressed = () => {

  }


  p.draw = function draw() {
    p.background(0,255,0);

    p.fill(100, 100, 100)
    p.rect(200, 0, 50, 50)
  }

    console.log(this.keyPressed)
  };

 document.getElementById('app')!);


// space ist 32
