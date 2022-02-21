import p5 from 'p5';

import './style.css';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;



//Randomizer
function getRndInteger(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}  



//Background  
p.setup = function setup () {
p.createCanvas (p.windowWidth, p.windowHeight,)

}
//let img = p.loadImage("https://tse4.mm.bing.net/th?id=OIP.3Ig2q6rJvm_RRlAHZathMAHaEW&pid=Api")



//Player
let Player_Width = 90
let Player_Hight = 90
let Player_Postion_Horizontal = p.windowWidth / 2 - Player_Width / 2
let Player_Position_Vertikal = p.windowHeight / 2 - Player_Hight / 2



//Movement Player
let speed = 6
let up = false

p.keyPressed = function () {
if(p.keyCode === p.UP_ARROW)
up = true
}

p.keyReleased = function () {
  if(p.keyCode === p.UP_ARROW)
  up = false
}


//Obstacles
let obstackle1_spawn_zone = 







//Draw
p.draw = function draw() {

p.background(0,0,0)



//Player
p.fill(20,200,250)
p.rect(Player_Postion_Horizontal, Player_Position_Vertikal, Player_Width, Player_Hight)

if(up == true) {
Player_Position_Vertikal = Player_Position_Vertikal - speed
}

if(up == false) {
Player_Position_Vertikal = Player_Position_Vertikal + speed
}

if(Player_Position_Vertikal > p.windowHeight - Player_Hight){
Player_Position_Vertikal = p.windowHeight - Player_Hight
}


//Obstacles





}




}, document.getElementById('app')!);