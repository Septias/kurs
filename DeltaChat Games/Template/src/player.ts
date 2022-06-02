import p5 from "p5";

export class Player {
    public player_height = 50;
    public player_width = 50;
    public velocity_y = 0;
    constructor(public x: number, public y: number) {
    }
  
    draw(p: p5) {
      p.rect(this.x, this.y, this.player_width, this.player_height);
    }
  
    update(
        p: p5,
    ) { 
        // Simuliere Erdanziehung
        this.velocity_y += 1;

        // Limitiere maximale Geschwindigkeit
        this.velocity_y = Math.min(this.velocity_y, 10);

        // Bewege den Spieler basierend auf seiner Geschwindigkeit
        this.y += this.velocity_y;

        // checke das Spieler nicht unten aus dem Spiel fällt.
        let rectified = p.windowHeight - this.player_height;
        if (this.y > rectified) {
            this.y = rectified;
        }
    }

    jump(p: p5) {
        
        let rectified = p.windowHeight - this.player_height;
        if (this.y === rectified) {
            this.velocity_y = -20;   
        }
    }
  }