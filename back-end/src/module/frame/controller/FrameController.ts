import { Request, Response } from "express";
import { IFrameService } from "../service/IFrameService";
import { FrameUpdateDto } from "../types/frameType";

export class FrameController {
  constructor(private readonly service: IFrameService) {
    this.bindMethods();
  }

  private bindMethods() {
    this.update = this.update.bind(this);
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body as FrameUpdateDto;
      await this.service.update(id, data);
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
