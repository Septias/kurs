import p5, { Vector } from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  //Background  
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }



  //kp
  let obstacles: Obstacle[] = []


  //Draw
  p.draw = function draw() {
    p.background(0, 0, 0)




    new Obstacle()


  
    obstacles.push(createObstacle(p.windowHeight, p.windowWidth))



    //(für die constanten in der class obstacle gilt :)
    for (const obstacle of obstacles) {


      //fürt die updates in der class durch
      obstacle.update()



      //fürt die draws in der class durch
      obstacle.draw(p)



      //füllt die variablen für die collision aus und checkt sie jeden draw tick 
      if (obstacle.collide(Player_Position_Horizontal, Player_Position_Vertikal, Player_Width, Player_height)) {

      }
    }

  }






  //git positionen für variablen des obstacles an 
  // this. heisst das auf die private variabeln zugegriffen wird diese gibt es nur in der class und sind ausserhalb nicht definiert / aufrufbar
  class Obstacle {
    constructor(private x: number, private y: number, private w: number, private h: number, private speed: number) {
    }


    // erstellt das obstacle mit oben eingetragenen variablen ist keine draw function wird in der draw function defieniert (wird von der draw function geupdated)
    draw(p: p5) {
      p.fill(0, 125, 21)
      p.rect(this.x, this.y, this.w, this.h)
    }


    // updated sich so oft wie die draw function wird in der draw function definiert (wird von der draw function geupdated)
    update() {
      this.x -= this.speed
    }


    //checkt colllision mit einem anderem objekt oben eingetragen werden daten von dem zu checkendem objekt die variabeln sind von überall aufrufbar
    collide(x_other: number, y_other: number, w_other: number, h_other: number): boolean {


      // checkt nach collisio0n mit den  private variablen also denen von dem obstacle was in der class definiert wird und den oben eingetragenen variabeln des anderen objeckts
      // checkt x
      if (x_other + w_other >= this.x + this.w && x_other <= this.x) {


        //checkt y
        if (y_other + h_other >= this.y + this.h && y_other <= this.y) {


          // wenn ein collision vorliegt dann wird collide true 
          return true

        }
      }

      // wenn keine collision vorliegt dann wird colide false
      return false
    }
  }

  //definiert für einen die variablne von dem obstacle und gibt dann ein new obstacle mit den generierten variablen aus und erstellt so ein neues obstacle 
  function createObstacle(windowHeight: number, windowWidth: number) {
    let obstacle_spawn_area_vertical = windowHeight - obstacle1_height / 2
    let x = windowWidth + obstacle1_width
    let y = getRndInteger(0 - obstacle1_height / 2, obstacle_spawn_area_vertical)

    return new Obstacle(x, y, 20, 20, speed_obstackle)
  }







}, document.getElementById('app')!);






