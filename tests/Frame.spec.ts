import {Roll} from "@/Roll";
import {Frame} from "@/Frame";

it('should return 6 with a roll of 6', () => {
    const roll = new Roll(6);
    const frame = new Frame();
    frame.addRoll(roll)

    expect(frame.score()).toBe(6)
});