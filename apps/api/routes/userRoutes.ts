import { Router } from "express";
import { uploadResume } from "../middleware/upload_resume.ts";
import { register } from "../controller/userController.ts";

const router = Router();

router.post("/register",uploadResume.single("resume"),register);
export default router;