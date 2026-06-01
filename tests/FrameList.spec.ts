import {FrameList} from "@/FrameList";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";

it('should initialize with 10 frames', () => {
    const frameList = new FrameList();
    expect(frameList.frames).toHaveLength(10)
    expect(frameList.frames.every(frame => frame.score() === 0)).toBe(true)
})

