import {Roll} from "@/Roll";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";
import {FrameList} from "@/FrameList";

export class Match {
  private total: number = 0;
  private numberOfRolls: number = 0
  private wasSpare: boolean = false;
  private lastRoll: number = 0;
  private LAST_FRAME_ROLL_NUMBER = 18;
  private frame?: FrameInterface;
  private readonly frameList: FrameList = new FrameList();

  addRoll(roll: Roll): void {
    this.frameList.addRoll(roll);

    // const isLastFrame = this.numberOfRolls > this.LAST_FRAME_ROLL_NUMBER;
    //
    // if(this.wasSpare && !isLastFrame) {
    //   this.total += roll.pin;
    //   this.wasSpare = false;
    // }
    //
    // const isNewFrame = this.numberOfRolls % 2 === 0;
    // if(!isNewFrame && this.lastRoll + roll.pin === 10) {
    //   this.wasSpare = true;
    // }
    // this.total += roll.pin;
    //
    // this.numberOfRolls++;
    // this.lastRoll = roll.pin;
  }
  score():number {

    return this.frameList.frames.reduce((score, currentFrame) => score + currentFrame.score(), 0)
  }
}