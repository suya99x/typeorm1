import { Request, Response } from "express";
import express = require("express");
import { AppDataSource } from "../data-source";
import { Photo } from "../entity/PhotoEntity"

const router = express.Router();
const photoRepository = AppDataSource.getRepository(Photo)

router.get("/", async (req: Request, res: Response) => {
    const savedPhotos = await photoRepository.find()
    console.log("all photos",savedPhotos)
    })

router.post("/", async (req: Request, res: Response) => {
    const photo = new Photo()
    photo.name = req.body.name
    photo.description = req.body.description
    photo.views = req.body.views
    photo.isPublished = true
    await photoRepository.save(photo)
    console.log("Photo has been saved")
})

router.put("/:id", async (req: Request, res: Response) => {
    const photo = await photoRepository.findOneBy({
         id: Number(req.params.id),
       })
        photoRepository.merge(photo, req.body);
        const results = await photoRepository.save(photo);
        return res.send(results);
})

router.delete("/:id", async (req: Request, res: Response) => {
    const photoToRemove = await photoRepository.findOneBy({
    id: Number(req.params.id),
})
await photoRepository.remove(photoToRemove)
console.log("Photo has been deleted")
    
})

export default router;