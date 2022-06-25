import p5 from 'p5';
import './style.css';

new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  let bottomPipe: p5.Image | p5.Element;
  let topPipe: p5.Image | p5.Element;
  let flappyBird: p5.Image | p5.Element;
  var bottomPipeX1 = 0;
  var bottomPipeY1 = 0;
  var bottomPipeX2 = 0;
  var bottomPipeY2 = 0;
  var topPipeX1 = 0;
  var topPipeY1 = 0;
  var topPipeX2 = 0;
  var topPipeY2 = 0;
  var x = 100
  var y = p.windowHeight/2
  var up = false
  var  score = 0;
  p.setup = function setup() {
    p.createCanvas(p.windowWidth,p.windowHeight)

   flappyBird = p.loadImage("../Pictures/Das mittlere Bird.png")
   bottomPipe = p.loadImage("../Pictures/bottomPipe.png")
   topPipe = p.loadImage("../Pictures/topPipe.png")

   bottomPipeX1 = p.windowWidth + 100
   bottomPipeY1 = p.windowHeight - Math.floor(Math.random()*500) - 100
   bottomPipeX2 = p.windowWidth + 1200
   bottomPipeY2 = p.windowHeight - Math.floor(Math.random()*500) - 100

   topPipeX1 = p.windowWidth + 100
   topPipeY1 = bottomPipeY1 - 300 - 870
   topPipeX2 = p.windowWidth + 1200
   topPipeY2 = bottomPipeY2 - 300 - 870
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
    p.background(112,204,227);
      p.image(flappyBird, x, y)
      p.image(bottomPipe, bottomPipeX1, bottomPipeY1)
      p.image(bottomPipe, bottomPipeX2, bottomPipeY2)
      p.image(topPipe, topPipeX1, topPipeY1)
      p.image(topPipe, topPipeX2, topPipeY2)

    if (up == true){
      y = y-7
    }else y = y+7

  if (bottomPipeX1 > -250){
  bottomPipeX1 = bottomPipeX1 - 7
  topPipeX1 = topPipeX1 - 7
  }else{
  bottomPipeX1 = p.windowWidth + 100
  bottomPipeY1 = p.windowHeight - Math.floor(Math.random()*500) - 100
  topPipeX1 = p.windowWidth + 100
  topPipeY1 = bottomPipeY1 - 300 - 870
  }

  if (bottomPipeX2 > -250){
    bottomPipeX2 = bottomPipeX2 - 7
    topPipeX2 = topPipeX2 - 7
    }else{
    bottomPipeX2 = p.windowWidth + 100
    bottomPipeY2 = p.windowHeight - Math.floor(Math.random()*500) - 100
    topPipeX2 = p.windowWidth + 100
   topPipeY2 = bottomPipeY2 - 300 - 870
    }

    if (y < 1) {
      alert("Du hast Verloren! Schade")
      y = 200 
      location.reload();
    
    }
    
    if (y > p.windowHeight - 114) {
      alert("Du hast Verloren! Schade")
      y = p.windowHeight - 200
      location.reload();
    }

    if (p.keyIsDown(27)) {
      alert("Spiel pausiert. Zum Weiterspielen, drück Ok")
    }

    //BottomPipe1

    if (x > bottomPipeX1 && x < bottomPipeX1 + 250 && y > bottomPipeY1 - 114 && y < bottomPipeY1 + 870) {
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }
    if(x < bottomPipeX1 + 250 && x + 169 > bottomPipeX1  && y +114 > bottomPipeY1 && y < bottomPipeY1 + 870){
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }

    //BottomPipe2
    if (x > bottomPipeX2 && x < bottomPipeX2 + 250 && y > bottomPipeY2 - 114 && y < bottomPipeY2 + 870) {
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }
    if(x < bottomPipeX2 + 250 && x + 169 > bottomPipeX2  && y +114 > bottomPipeY2 && y < bottomPipeY2 + 870){
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }

    //TopPipe1

    if (x > topPipeX1 && x < topPipeX1 + 250 && y > topPipeY1 - 114 && y < topPipeY1 + 870) {
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }
    if(x < topPipeX1 + 250 && x + 169 > topPipeX1  && y +114 > topPipeY1 && y < topPipeY1 + 870){
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }

    //TopPipe2

    if (x > topPipeX2 && x < topPipeX2 + 250 && y > topPipeY2 - 114 && y < topPipeY2 + 870) {
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }
    if(x < topPipeX2 + 250 && x + 169 > topPipeX2  && y +114 > topPipeY2 && y < topPipeY2 + 870){
      alert("Score = " + Math.floor(score/200))
      x = 10000
      location.reload();
    }

    score = score+1

}

 document.getElementById('app')!});

 // Space ist 32

//Generate bottom Pipe and moves it




 










 