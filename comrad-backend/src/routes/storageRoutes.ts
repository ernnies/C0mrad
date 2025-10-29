// src/routes/storageRoutes.ts
import { Router } from "express";
import {
  uploadWorkflow,
  downloadWorkflow,
} from "../controllers/storageController";
import { generateReport } from "../controllers/reportController";

const router = Router();

router.post("/upload", uploadWorkflow);
router.get("/download/:rootHash", downloadWorkflow);
router.post("/report", generateReport);   // <-- now exported

export default router;