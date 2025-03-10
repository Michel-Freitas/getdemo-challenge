import { Frame } from "@prisma/client";

export type FrameModel = Frame;

export type FrameUpdateDto = Pick<FrameModel, "html" | "order">;
