import { DemoModel } from "src/module/demo/types/demoType";

export interface IDemoService {
  getAll(): Promise<DemoModel[]>;
  getById(id: string): Promise<DemoModel | null>;
}
