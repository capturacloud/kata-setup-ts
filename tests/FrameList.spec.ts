import {FrameList} from "@/FrameList";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";
import {Roll} from "@/Roll";
import {Match} from "@/Match";

it('should initialize with 10 frames', () => {
    const frameList = new FrameList();
    expect(frameList.frames).toHaveLength(10)
    expect(frameList.frames.every(frame => frame.score() === 0)).toBe(true)
})

it('should add 1 to score to the first frame when adding one roll with 1 pin', () => {
    const frameList = new FrameList();
    frameList.addRoll(new Roll(1))

    expect(frameList.frames[0].score()).toBe(1)
    expect(frameList.frames[1].score()).toBe(0)
})

it('should add 6 to score to the first frame when adding one roll with 6 pin', () => {
    const frameList = new FrameList();
    frameList.addRoll(new Roll(6))

    expect(frameList.frames[0].score()).toBe(6)
    expect(frameList.frames[1].score()).toBe(0)
})

it('should add 9 to score to the first frame when adding 6, 2 and 1', () => {
    const frameList = new FrameList();
    frameList.addRoll(new Roll(6))
    frameList.addRoll(new Roll(2))
    frameList.addRoll(new Roll(1))

    expect(frameList.frames[0].score()).toBe(8)
    expect(frameList.frames[1].score()).toBe(1)
    expect(frameList.frames[2].score()).toBe(0)
})

it('should return 7 with rolls 11311', () => {
    const frameList = new FrameList()
    frameList.addRoll(new Roll(1))
    frameList.addRoll(new Roll(1))
    frameList.addRoll(new Roll(3))
    frameList.addRoll(new Roll(1))
    frameList.addRoll(new Roll(1))
    expect(frameList.frames[0].score()).toBe(2)
    expect(frameList.frames[1].score()).toBe(4)
    expect(frameList.frames[2].score()).toBe(1)
    expect(frameList.frames[3].score()).toBe(0)
})

