import {Frame} from "@/Frame";
import {FixedArray} from "@/FixedArray";
import {Roll} from "@/Roll";



export class FrameList {
    public readonly frames: FixedArray<Frame, 10>
    constructor() {
        this.frames = Array.from(
            {length: 10},
            () => new Frame()
        ) as typeof this.frames
    }

    addRoll(roll: Roll) {
        this.frames[0].addRoll(new Roll(1));
    }
}