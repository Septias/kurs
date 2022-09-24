import p5 from "p5";

export class Coin {
  constructor(private x_min: number, private x_max: number, private y_min: number, private y_max: number, private w: number, private h: number, private coin_speed: number, private x: number, private y: number) {
  }

  coin_randomizer() {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.x = getRndInteger(this.x_min, this.x_max)
    this.y = getRndInteger(this.y_min, this.y_max)
  }

  coin_execute_in_draw_1(p: p5) {
    p.fill(255, 185, 15)
    p.rect(this.x, this.y, this.w, this.h)
  }

  coin_execute_in_draw_2() {
    this.x = this.x - this.coin_speed
  }

  coin_collect(player_x: number, player_y: number, player_w: number, player_h: number) {

    if (player_x + player_w + this.w >= this.x + this.w && player_x <= this.x) {
      if (player_y + player_h + this.h >= this.y + this.h && player_y <= this.y) {

        return true
      }
    }
    return false
  }

  coin_border() {
    function getRndInteger(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (this.x < 0) {
      this.x = getRndInteger(this.x_min, this.x_max)
      this.y = getRndInteger(this.y_min, this.y_max)
    }
  }
}

export let coins: Coin[] = []