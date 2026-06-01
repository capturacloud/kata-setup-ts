import {Roll} from "@/Roll";

export interface FrameInterface {
    // isSpare(): boolean
    // isStrike(): boolean
    // isFinished(): boolean
    addRoll(roll: Roll): void
    score(): number
}