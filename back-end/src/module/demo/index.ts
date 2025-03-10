import { DemoRepository } from "./repository/imple/DemoRepository";
import { DemoController } from "./controller/DemoController";
import { DemoService } from "./service/imple/DemoService";
import { prisma } from "../../setup";

const demoRepository = new DemoRepository(prisma);
const demoService = new DemoService(demoRepository);
const demoController = new DemoController(demoService);

export default demoController;
