class EnemyJet {
    constructor(x,y){
    this.hitpoints = 3
    this.enemyX = x
    this.enemyY = y
    }
    hitByLaser(laserX,laserY,damage){
        if(laserX > this.enemyX && laserX < this.enemyX +100 && laserY > this.enemyY && laserY < this.enemyY + 100){
        hitpoints = hitpoints-damage;
        } 
    }
    isAlive(){
        this.hitpoints > 0
    }
}


