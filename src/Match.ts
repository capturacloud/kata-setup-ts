import {Roll} from "@/Roll";

export class Match {
  private total: number = 0;
  private numberOfRolls: number = 0
  private wasSpare: boolean = false;
  private lastRoll: number = 0;
  private LAST_FRAME_ROLL_NUMBER = 18;


  addRoll(roll: Roll): void {
    const isLastFrame = this.numberOfRolls > this.LAST_FRAME_ROLL_NUMBER;

    if(this.wasSpare && !isLastFrame) {
      this.total += roll.pin;
      this.wasSpare = false;
    }

    const isNewFrame = this.numberOfRolls % 2 === 0;
    if(!isNewFrame && this.lastRoll + roll.pin === 10) {
      this.wasSpare = true;
    }
    this.total += roll.pin;

    this.numberOfRolls++;
    this.lastRoll = roll.pin;
  }
  score():number {
    return this.total;
  }
}