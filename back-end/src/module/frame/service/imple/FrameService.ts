import { IFrameRepository } from "../../repository/IFrameRepository";
import { IFrameService } from "../IFrameService";
import { FrameUpdateDto } from "../../types/frameType";

export class FrameService implements IFrameService {
  constructor(private readonly repository: IFrameRepository) {}

  async update(id: string, frame: FrameUpdateDto): Promise<void> {
    const frameModel = await this.repository.getById(id);

    if (!frameModel) throw new Error("Frame Not Found");

    await this.repository.update({
      ...frameModel,
      html: frame.html,
      order: frame.order,
      updatedAt: new Date(),
    });
  }
}
