import { api } from "../../../config/api.config";
import { FrameUpdateDto } from "../types/frameRequest.type.ts";

const frameService = () => {
  const putFrame = async (id: string, data: FrameUpdateDto) => {
    await api.put(`/v1/frame/${id}`, data);
  };

  return { putFrame };
};

export default frameService;
