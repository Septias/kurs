


var trefferJet2 = false;





if (trefferJet2 == false) {
    p.image(enemyJet, 50, 50);
  }



if (trefferJet2 == false) {
    if (laserY > 50 && laserY < 150 && laserX < 150 && laserX > 50) {
        console.log("treffer!")
        trefferJet2 = true;

    }
}