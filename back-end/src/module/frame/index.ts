import { FrameRepository } from "./repository/imple/FrameRepository";
import { FrameService } from "./service/imple/FrameService";
import { FrameController } from "./controller/FrameController";
import { prisma } from "../../setup";

const frameRepository = new FrameRepository(prisma);
const frameService = new FrameService(frameRepository);
const frameController = new FrameController(frameService);

export default frameController;
