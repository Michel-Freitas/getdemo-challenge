import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { prisma } from "./setup/index";
import router from "./routes";
import cors from "cors";

const server = express();
dotenv.config();
const PORT = process.env.PORT;

const main = async () => {
  server.use(cors());
  server.use(express.json());

  server.use("/api/v1", router);
  server.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
