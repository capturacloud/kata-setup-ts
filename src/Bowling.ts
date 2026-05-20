export class Bowling {
  private pinRolled: number = 0;
  private pinRolled2: number = 0;
  private pinRolled3: number = 0;
  private numberOfRolls: number = 0;

  roll(pins: number): void {
    if (this.numberOfRolls > 1){
      this.pinRolled3 = pins;
    } else if (this.numberOfRolls > 0) {
      this.pinRolled2 = pins;
    } else {
      this.pinRolled = pins;
    }
    this.numberOfRolls++;
  }
  score():number {
    if (this.numberOfRolls > 1) {
      return this.pinRolled + this.pinRolled2 + this.pinRolled3;
    } else if (this.numberOfRolls > 0) {
      return this.pinRolled + this.pinRolled2;
    }
    return this.pinRolled;
  }
}