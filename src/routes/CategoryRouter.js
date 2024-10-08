import express from "express";
import { createCategory, getCategory, removeCategoryId } from "../controller/Categorys.js";

const router = express.Router();

router.get("/category", getCategory);
router.post("/category", createCategory);
router.delete("/category", removeCategoryId);

export default router;