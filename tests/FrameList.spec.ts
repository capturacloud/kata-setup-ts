import {FrameList} from "@/FrameList";
import {Frame} from "@/Frame";
import {FrameInterface} from "@/FrameInterface";

it('should initialize with 10 frames', () => {
    const frameList = new FrameList();
    expect(frameList.frames).toHaveLength(10)
    frameList.frames.forEach((frame) => expectTypeOf(frame).toExtend<FrameInterface>())
})

