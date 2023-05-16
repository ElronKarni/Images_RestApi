import { Router } from "express";
import {
  getSortedPhotosById,
  getPhotos,
} from "../controllers/photosController.js";

const router = Router();

router.get("/", getPhotos);
router.post("/sortedPhotosById", getSortedPhotosById);

export default router;
