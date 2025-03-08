import { Router } from "express";
import { getAllAlbumById, getAllAlbums } from "../controller/album.comtroller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAllAlbumById);

export default router;