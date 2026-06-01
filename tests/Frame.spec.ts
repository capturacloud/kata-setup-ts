import {Roll} from "@/Roll";
import {Frame} from "@/Frame";
import {Match} from "@/Match";

it('should return 6 with a roll of 6', () => {
    const roll = new Roll(6);
    const frame = new Frame();
    frame.addRoll(roll)

    expect(frame.score()).toBe(6)
});

it('should return 0 with no roll', () => {
    const frame = new Frame();

    expect(frame.score()).toBe(0)
});

