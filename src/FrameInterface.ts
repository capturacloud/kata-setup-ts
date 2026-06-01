import {Roll} from "@/Roll";

export interface FrameInterface {
    // isSpare(): boolean
    // isStrike(): boolean
    isCompleted(): boolean
    addRoll(roll: Roll): void
    score(): number
}