import express from "express";
import demoController from "../module/demo";
import frameController from "../module/frame";

const router = express.Router();

router.get("/demo/", demoController.getAll);
router.get("/demo/:id", demoController.getById);

router.put("/frame/:id", frameController.update);

export default router;
