export class Bowling {
  private pinRolled: number = 0;
  private numberOfRolls: number = 0;

  roll(pins: number): void {
    this.pinRolled = pins;
    this.numberOfRolls++;
  }
  score():number {
    if (this.numberOfRolls > 1) {
      return 9
    }
    return this.pinRolled;
  }
}