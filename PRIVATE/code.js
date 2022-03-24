let bigpositivenumber=1000000000
let bignegativenumber=-bigpositivenumber
let factor1=200
let maxapparentcolor = 250

let borderX=400
let borderY=400

let sizeX=20
let sizeY=20



let borderdistance=40
let voidsize=10

let positionX=borderdistance
let positionY=borderdistance

let speed=10
let colorspeed=1.25
let voidspeed=0.5

let backgroundRED=125
let backgroundGREEN=160
let backgroundBLUE=0
let fillRED=0
let fillGREEN=0
let fillBLUE=0


function setup() {
  createCanvas(borderX, borderY);
}


function draw() {
  background(backgroundRED, backgroundGREEN, backgroundBLUE);
  
  fill(fillRED, fillGREEN, fillBLUE); rect(positionX, positionY, sizeX, sizeY)
  
  fill(0, 0, 0); rect(0, 0, borderX, voidsize)
  fill(0, 0, 0); rect(0, borderY-voidsize, borderX, voidsize)
  fill(0, 0, 0); rect(0, 0, voidsize, borderY) 
  fill(0, 0, 0); rect(borderX-voidsize, 0, voidsize, borderY) 
  
  
  
  
  
  if (positionX < borderX - borderdistance - sizeX - voidsize && positionY < borderdistance + 1 + voidsize) {positionX = positionX + speed} //oben
  if (positionX > borderX - borderdistance - sizeX - 1 - voidsize && positionY < borderY - borderdistance - sizeY - voidsize)  {positionY = positionY + speed} //rechts
  if (positionX > borderdistance + voidsize && positionY > borderY - borderdistance - sizeY - 1 - voidsize) {positionX = positionX - speed} //unten
  if (positionX < borderdistance + 1 + voidsize && positionY > borderdistance + voidsize) {positionY = positionY - speed} //links
  

  if (borderX>bignegativenumber && borderY>bignegativenumber && fillGREEN<250 && fillBLUE<250 && voidsize>9)  {voidsize=voidsize+voidspeed; fillRED=fillRED+colorspeed}
  
  if (fillRED>250) {fillGREEN=fillGREEN+colorspeed}
  if (fillGREEN>250) {fillBLUE=fillBLUE+colorspeed}
  
  if (fillBLUE>250) {voidsize=voidsize-4*voidspeed; backgroundRED=backgroundRED-bigpositivenumber-1000; backgroundGREEN=backgroundGREEN-bigpositivenumber-1000; backgroundBLUE=backgroundBLUE+bigpositivenumber}
  
  
  if (backgroundBLUE>factor1*bigpositivenumber) {backgroundBLUE=backgroundBLUE-bigpositivenumber*bigpositivenumber}
  
  
  if (backgroundBLUE<0 && backgroundBLUE>bigpositivenumber*bignegativenumber) {backgroundBLUE=backgroundBLUE-bigpositivenumber;fillRED=fillRED-3;fillGREEN=fillGREEN-5;fillBLUE=fillBLUE-3}
  
  

  
  
  let bleepstripe1red = maxapparentcolor
  let bleepstripe1green = maxapparentcolor
  let bleepstripe1blue = maxapparentcolor
    
  let bleepstripe2red = maxapparentcolor
  let bleepstripe2green = maxapparentcolor
  let bleepstripe2blue = 0
    
  let bleepstripe3red = 0
  let bleepstripe3green = maxapparentcolor
  let bleepstripe3blue = maxapparentcolor
    
  let bleepstripe4red = 0
  let bleepstripe4green = maxapparentcolor
  let bleepstripe4blue = 0
  
  let bleepstripe5red = maxapparentcolor
  let bleepstripe5green = 0
  let bleepstripe5blue = maxapparentcolor
    
  let bleepstripe6red = maxapparentcolor
  let bleepstripe6green = 0
  let bleepstripe6blue = 0
    
  let bleepstripe7red = 0
  let bleepstripe7green = 0
  let bleepstripe7blue = maxapparentcolor



  let bleepstripe8red = 0
  let bleepstripe8green = 0
  let bleepstripe8blue = maxapparentcolor
    
  let bleepstripe9red = maxapparentcolor
  let bleepstripe9green = 0
  let bleepstripe9blue = maxapparentcolor
    
  let bleepstripe10red = maxapparentcolor
  let bleepstripe10green = maxapparentcolor
  let bleepstripe10blue = 0
    
  let bleepstripe11red = maxapparentcolor
  let bleepstripe11green = 0
  let bleepstripe11blue = 0
  
  let bleepstripe12red = 0
  let bleepstripe12green = maxapparentcolor
  let bleepstripe12blue = maxapparentcolor
    
  let bleepstripe13red = maxapparentcolor/2
  let bleepstripe13green = maxapparentcolor/2
  let bleepstripe13blue = maxapparentcolor/2
    
  let bleepstripe14red = maxapparentcolor
  let bleepstripe14green = maxapparentcolor
  let bleepstripe14blue = maxapparentcolor
 
  /////

  let bigbleepstripesizeX = borderX/7
  let bigbleepstripesizeY = borderY*3/4
  let smallbleepstripesizeX = bigbleepstripesizeX
  let smallbleepstripesizeY = borderY/12

  /////

  let bleepstripe1sizeX = bigbleepstripesizeX
  let bleepstripe2sizeX = bigbleepstripesizeX
  let bleepstripe3sizeX = bigbleepstripesizeX
  let bleepstripe4sizeX = bigbleepstripesizeX
  let bleepstripe5sizeX = bigbleepstripesizeX
  let bleepstripe6sizeX = bigbleepstripesizeX
  let bleepstripe7sizeX = bigbleepstripesizeX

  let bleepstripe8sizeX = smallbleepstripesizeX
  let bleepstripe9sizeX = smallbleepstripesizeX
  let bleepstripe10sizeX = smallbleepstripesizeX
  let bleepstripe11sizeX = smallbleepstripesizeX
  let bleepstripe12sizeX = smallbleepstripesizeX
  let bleepstripe13sizeX = smallbleepstripesizeX
  let bleepstripe14sizeX = smallbleepstripesizeX

  let bleepstripe1sizeY = bigbleepstripesizeY 
  let bleepstripe2sizeY = bigbleepstripesizeY
  let bleepstripe3sizeY = bigbleepstripesizeY
  let bleepstripe4sizeY = bigbleepstripesizeY
  let bleepstripe5sizeY = bigbleepstripesizeY
  let bleepstripe6sizeY = bigbleepstripesizeY
  let bleepstripe7sizeY = bigbleepstripesizeY

  let bleepstripe8sizeY = smallbleepstripesizeY
  let bleepstripe9sizeY = smallbleepstripesizeY
  let bleepstripe10sizeY = smallbleepstripesizeY
  let bleepstripe11sizeY = smallbleepstripesizeY
  let bleepstripe12sizeY = smallbleepstripesizeY
  let bleepstripe13sizeY = smallbleepstripesizeY
  let bleepstripe14sizeY = smallbleepstripesizeY

  /////

  let offsetYcorrection = 400
  let offsetY = borderY-offsetYcorrection
  
  let bigbleepstripespawnpositionY = -offsetY
  let smallbleepstripespawnpositionY = -offsetY + bigbleepstripesizeY
  
  
  /////

  let bleepstripe1positionX = 0*bigbleepstripesizeX
  let bleepstripe2positionX = 1*bigbleepstripesizeX
  let bleepstripe3positionX = 2*bigbleepstripesizeX
  let bleepstripe4positionX = 3*bigbleepstripesizeX
  let bleepstripe5positionX = 4*bigbleepstripesizeX
  let bleepstripe6positionX = 5*bigbleepstripesizeX
  let bleepstripe7positionX = 6*bigbleepstripesizeX

  let bleepstripe8positionX = 0*bigbleepstripesizeX
  let bleepstripe9positionX = 1*bigbleepstripesizeX
  let bleepstripe10positionX = 2*bigbleepstripesizeX
  let bleepstripe11positionX = 3*bigbleepstripesizeX
  let bleepstripe12positionX = 4*bigbleepstripesizeX
  let bleepstripe13positionX = 5*bigbleepstripesizeX
  let bleepstripe14positionX = 6*bigbleepstripesizeX

  let bleepstripe1positionY = bigbleepstripespawnpositionY
  let bleepstripe2positionY = bigbleepstripespawnpositionY
  let bleepstripe3positionY = bigbleepstripespawnpositionY
  let bleepstripe4positionY = bigbleepstripespawnpositionY
  let bleepstripe5positionY = bigbleepstripespawnpositionY
  let bleepstripe6positionY = bigbleepstripespawnpositionY
  let bleepstripe7positionY = bigbleepstripespawnpositionY

  let bleepstripe8positionY = smallbleepstripespawnpositionY
  let bleepstripe9positionY = smallbleepstripespawnpositionY
  let bleepstripe10positionY = smallbleepstripespawnpositionY
  let bleepstripe11positionY = smallbleepstripespawnpositionY
  let bleepstripe12positionY = smallbleepstripespawnpositionY
  let bleepstripe13positionY = smallbleepstripespawnpositionY
  let bleepstripe14positionY = smallbleepstripespawnpositionY
    
  /////
  /////
  /////

  fill (bleepstripe1red, bleepstripe1green, bleepstripe1blue); rect (bleepstripe1positionX, bleepstripe1positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///1
  fill (bleepstripe2red, bleepstripe2green, bleepstripe2blue); rect (bleepstripe2positionX, bleepstripe2positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///2
  fill (bleepstripe3red, bleepstripe3green, bleepstripe3blue); rect (bleepstripe3positionX, bleepstripe3positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///3
  fill (bleepstripe4red, bleepstripe4green, bleepstripe4blue); rect (bleepstripe4positionX, bleepstripe4positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///4
  fill (bleepstripe5red, bleepstripe5green, bleepstripe5blue); rect (bleepstripe5positionX, bleepstripe5positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///5
  fill (bleepstripe6red, bleepstripe6green, bleepstripe6blue); rect (bleepstripe6positionX, bleepstripe6positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///6
  fill (bleepstripe7red, bleepstripe7green, bleepstripe7blue); rect (bleepstripe7positionX, bleepstripe7positionY, bigbleepstripesizeX, bigbleepstripesizeY) ///7

  fill (bleepstripe8red, bleepstripe8green, bleepstripe8blue); rect (bleepstripe8positionX, bleepstripe8positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///8
  fill (bleepstripe9red, bleepstripe9green, bleepstripe9blue); rect (bleepstripe9positionX, bleepstripe9positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///9
  fill (bleepstripe10red, bleepstripe10green, bleepstripe10blue); rect (bleepstripe10positionX, bleepstripe10positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///10
  fill (bleepstripe11red, bleepstripe11green, bleepstripe11blue); rect (bleepstripe11positionX, bleepstripe11positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///11
  fill (bleepstripe12red, bleepstripe12green, bleepstripe12blue); rect (bleepstripe12positionX, bleepstripe12positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///12
  fill (bleepstripe13red, bleepstripe13green, bleepstripe13blue); rect (bleepstripe13positionX, bleepstripe13positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///13
  fill (bleepstripe14red, bleepstripe14green, bleepstripe14blue); rect (bleepstripe14positionX, bleepstripe14positionY, smallbleepstripesizeX, smallbleepstripesizeY) ///14
  
  
if (borderX>-1000) {bigbleepstripespawnpositionY=bigbleepstripespawnpositionY+1}
  


  
  if (borderX>bignegativenumber) {console.log(backgroundBLUE)}
  

  
  
}