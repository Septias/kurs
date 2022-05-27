import { inAppPurchase } from 'electron/main';
import p5, { Vector } from 'p5';
import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont('Helvetica');
    p.textSize(14)
    p.frameRate(60)
    p.background(255, 255, 255);
    
  };
  
  const body_x_top = p.windowWidth / 2
  const body_y_top = p.windowHeight / 2
  const galgen_x_bottom = body_x_top - 250
  const galgen_y_bottom = body_y_top + 300
  let elements_to_draw = 0
  const wörter = ["lol", "sodkak", "adada"]
  let zielwort = wörter[Math.floor(Math.random() * wörter.length + 1)]
  
    
  
  
  
  const parts = [
    //galgen
    [galgen_x_bottom, galgen_y_bottom, 250, 250, p.PI, 0],
    [galgen_x_bottom, galgen_y_bottom - 250 / 2, galgen_x_bottom, galgen_y_bottom - 450],
    [galgen_x_bottom, galgen_y_bottom - 450, body_x_top, galgen_y_bottom - 450],
    [galgen_x_bottom, galgen_y_bottom - 370, galgen_x_bottom + 80, galgen_y_bottom - 450],
    [body_x_top, galgen_y_bottom - 450, body_x_top, body_y_top - 50],
    //head
    [body_x_top, body_y_top - 25, 50],
    [body_x_top - 1 / 3 * 25, body_y_top - 28, 2],
    [body_x_top + 1 / 3 * 25, body_y_top - 28, 2],
    //body
    [body_x_top, body_y_top, body_x_top, body_y_top + 100],
    //arms
    [body_x_top, body_y_top + 15, body_x_top - 30, body_y_top + 90],
    [body_x_top, body_y_top + 15, body_x_top + 30, body_y_top + 90],
    //legs
    [body_x_top, body_y_top + 100, body_x_top - 25, body_y_top + 175],
    [body_x_top, body_y_top + 100, body_x_top + 25, body_y_top + 175],
  ]
  
  
  
  
  
  
  
  const parts_to_draw = [p.rect(100, 100, 50, 50)]
  p.draw = function draw() {
  
   
    if (zielwort.includes(p.key) == false) {
      elements_to_draw++
      parts_to_draw.push(parts[elements_to_draw])
  
    }
    for(var x of parts_to_draw ) {
      console.log(x)
        
      }
    }
    console.log("lol")
  




  }, document.getElementById('app')!;

})

