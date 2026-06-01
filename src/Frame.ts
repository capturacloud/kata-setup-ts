import {FrameInterface} from "@/FrameInterface";
import {Roll} from "@/Roll";

export class Frame implements FrameInterface {
    private firstRoll?: Roll
    addRoll(roll: Roll): void {
        this.firstRoll = roll;
    }

    score(): number {
        return this.firstRoll?.pin ?? 0;
    }
}