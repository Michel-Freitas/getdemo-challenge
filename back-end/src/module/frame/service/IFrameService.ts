import { FrameUpdateDto } from "../types/frameType";

export interface IFrameService {
  update(id: string, frame: FrameUpdateDto): Promise<void>;
}
