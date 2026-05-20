export class Bowling {
  private total: number = 0;

  roll(pins: number): void {
    this.total += pins;
  }
  score():number {
    return this.total;
  }
}