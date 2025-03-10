import { Request, Response } from "express";
import { IDemoService } from "../service/IDemoService";

export class DemoController {
  constructor(private readonly service: IDemoService) {
    this.bindMethods();
  }

  private bindMethods() {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(req: Request, res: Response) {
    try {
      res.status(200).json(await this.service.getAll());
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      res.status(200).json(await this.service.getById(id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
