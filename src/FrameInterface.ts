import {Roll} from "@/Roll";

export interface FrameInterface {
    // isSpare(): boolean
    // isStrike(): boolean
    get firstScore(): number
    isCompleted(): boolean
    addRoll(roll: Roll): void
    score(): number
}