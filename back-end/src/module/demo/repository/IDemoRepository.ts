import { Demo } from "@prisma/client";

export interface IDemoRepository {
  getAll(): Promise<Demo[]>;
  getById(id: string): Promise<Demo | null>;
}
