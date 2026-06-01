import {FrameInterface} from "@/FrameInterface";
import {Roll} from "@/Roll";

export class Frame implements FrameInterface {
    private firstRoll?: Roll
    private lastRoll?: Roll

    addRoll(roll: Roll): void {
        if (this.firstRoll) {
            this.lastRoll = roll;
            return;
        }
        this.firstRoll = roll;
    }

    score(): number {
        if (this.lastRoll) {
            return (this.firstRoll?.pin ?? 0) + this.lastRoll?.pin;
        }
        return this.firstRoll?.pin ?? 0;
    }
}