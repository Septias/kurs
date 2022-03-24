import p5 from "p5";

export class Obstacle {
    constructor(public x: number, public y: number, public width: number, public height: number) {}
    
    draw(p: p5) {
        p.rect(this.x, this.y, this.width, this.height);
    }

    update(p: p5) {
        this.x -= 2;
    }
}