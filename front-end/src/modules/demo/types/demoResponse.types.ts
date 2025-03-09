import { FrameResponse } from "../../frame/types/frameResponse.types";

export interface DemoResponse {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DemoDetailsResponse {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  frames: FrameResponse[];
}
