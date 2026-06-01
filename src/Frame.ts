import {FrameInterface} from "@/FrameInterface";
import {Roll} from "@/Roll";

export class Frame implements FrameInterface {
    private firstRoll?: Roll
    private lastRoll: boolean = false

    addRoll(roll: Roll): void {
        if (this.firstRoll) {
            this.lastRoll = true;
        }
        this.firstRoll = roll;
    }

    score(): number {
        if (this.lastRoll) {
            return 5;
        }
        return this.firstRoll?.pin ?? 0;
    }
}