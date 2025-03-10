import { Frame } from "@prisma/client";

export interface IFrameRepository {
  getById(id: string): Promise<Frame | null>;
  update(frame: Frame): Promise<void>;
}
