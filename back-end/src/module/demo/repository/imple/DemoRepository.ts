import { Demo, PrismaClient } from "@prisma/client";
import { IDemoRepository } from "src/module/demo/repository/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll(): Promise<Demo[]> {
    return await this.prisma.demo.findMany();
  }

  async getById(id: string): Promise<Demo | null> {
    return await this.prisma.demo.findFirst({
      where: { id },
      include: {
        frames: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  }
}
