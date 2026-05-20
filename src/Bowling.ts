export class Bowling {
  private pinRolled: number = 0;

  roll(pins: number): void {
    this.pinRolled = pins;
  }
  score():number {
    return this.pinRolled;
  }
}