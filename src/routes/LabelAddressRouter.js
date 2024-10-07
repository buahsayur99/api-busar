import express from "express";
import { getLabelAddress, createLabelAddress } from "../controller/LabelAddress.js";

const router = express.Router();

router.get("/label/address", getLabelAddress);
router.post("/label/address", createLabelAddress);

export default router;