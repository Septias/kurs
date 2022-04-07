class EnemyJet {
    hitpoints: number;
    enemyX: number;
    enemyY: number;
    constructor(x: number,y: number){
    this.hitpoints = 3
    this.enemyX = x
    this.enemyY = y
    }
    hitByLaser(laserX: number,laserY:number,damage:number){
        if(laserX > this.enemyX && laserX < this.enemyX +100 && laserY > this.enemyY && laserY < this.enemyY + 100){
        this.hitpoints = this.hitpoints-damage;
        } 
    }
    isAlive(){
        this.hitpoints > 0
    }
}