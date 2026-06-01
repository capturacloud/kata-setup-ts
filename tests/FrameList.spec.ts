import {FrameList} from "@/FrameList";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";
import {Roll} from "@/Roll";

it('should initialize with 10 frames', () => {
    const frameList = new FrameList();
    expect(frameList.frames).toHaveLength(10)
    expect(frameList.frames.every(frame => frame.score() === 0)).toBe(true)
})

it('should add score to the first frame when adding one roll', () => {
    const frameList = new FrameList();
    frameList.addRoll(new Roll(1))

    expect(frameList.frames[0].score()).toBe(1)
    expect(frameList.frames[1].score()).toBe(0)
})



