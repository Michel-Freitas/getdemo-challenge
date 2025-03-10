import { IFrameRepository } from "../IFrameRepository";
import { Frame, PrismaClient } from "@prisma/client";

export class FrameRepository implements IFrameRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getById(id: string): Promise<Frame | null> {
    return await this.prisma.frame.findFirst({ where: { id } });
  }

  async update(frame: Frame): Promise<void> {
    await this.prisma.frame.update({
      where: { id: frame.id },
      data: {
        html: frame.html,
        order: frame.order,
        updatedAt: frame.updatedAt,
      },
    });
  }
}
