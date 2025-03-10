import { IDemoRepository } from "src/module/demo/repository/IDemoRepository";
import { IDemoService } from "src/module/demo/service/IDemoService";
import { DemoModel } from "src/module/demo/types/demoType";

export class DemoService implements IDemoService {
  constructor(private readonly repository: IDemoRepository) {}

  async getAll(): Promise<DemoModel[]> {
    return this.repository.getAll();
  }
  getById(id: string): Promise<DemoModel | null> {
    return this.repository.getById(id);
  }
}
