export class Bowling {
  private total: number = 0;
  private numberOfRolls: number = 0
  private wasSpare: boolean = false;
  private lastRoll: number = 0;
  private LAST_FRAME_ROLL_NUMBER = 18;


  roll(pins: number): void {
    const isLastFrame = this.numberOfRolls > this.LAST_FRAME_ROLL_NUMBER;

    if(this.wasSpare && !isLastFrame) {
      this.total += pins;
      this.wasSpare = false;
    }

    const isNewFrame = this.numberOfRolls % 2 === 0;
    if(!isNewFrame && this.lastRoll + pins === 10) {
      this.wasSpare = true;
    }
    this.total += pins;

    this.numberOfRolls++;
    this.lastRoll = pins;
  }
  score():number {
    return this.total;
  }
}