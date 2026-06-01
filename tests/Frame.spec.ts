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

it('should return 5 with a roll of 3 and a roll of 2', () => {
    const frame = new Frame()
    frame.addRoll(new Roll(3))
    frame.addRoll(new Roll(2))

    expect(frame.score()).toBe(5)
})

it('should return 9 with a roll of 6 and a roll of 3', () => {
    const frame = new Frame()
    frame.addRoll(new Roll(6))
    frame.addRoll(new Roll(3))

    expect(frame.score()).toBe(9)
})

test('isCompleted should return false on a new Frame', () => {
    const frame = new Frame()

    expect(frame.isCompleted()).toBe(false);
})

test('isCompleted should return true on a Frame with two rolls', () => {
    const frame = new Frame()
    frame.addRoll(new Roll(3))
    frame.addRoll(new Roll(6))

    expect(frame.isCompleted()).toBe(true);
})

test('isCompleted should return false on a Frame with one roll', () => {
    const frame = new Frame()
    frame.addRoll(new Roll(3))

    expect(frame.isCompleted()).toBe(false);
})

test('isCompleted should return true on a Frame with a strike roll', () => {
    const frame = new Frame()
    frame.addRoll(new Roll(10))

    expect(frame.isCompleted()).toBe(true);
})

test('firstScore is 0 if there are no rolls', () => {
    const frame = new Frame()

    expect(frame.firstScore).toBe(0)
})
