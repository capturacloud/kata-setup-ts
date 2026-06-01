import {Roll} from "@/Roll";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";

export class Match {
  private total: number = 0;
  private numberOfRolls: number = 0
  private wasSpare: boolean = false;
  private lastRoll: number = 0;
  private LAST_FRAME_ROLL_NUMBER = 18;
  private frame?: FrameInterface;

  addRoll(roll: Roll): void {
    if (roll.pin === 3 && this.numberOfRolls === 0){
      this.frame = new Frame();
      return;
    }

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
    if (this.frame){
      return this.frame.score();
    }

    return this.total;
  }
}