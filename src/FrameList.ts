import {Frame} from "@/Frame";
import {FixedArray} from "@/FixedArray";
import {Roll} from "@/Roll";



export class FrameList {
    public readonly frames: FixedArray<Frame, 10>
    private currentFrameIndex: number = 0

    constructor() {
        this.frames = Array.from(
            {length: 10},
            () => new Frame()
        ) as typeof this.frames
    }

    addRoll(roll: Roll) {
        if(this.frames[this.currentFrameIndex].isCompleted()){
            this.currentFrameIndex++
        }

        this.frames[this.currentFrameIndex].addRoll(roll);
    }
}