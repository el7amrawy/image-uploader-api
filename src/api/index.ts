import express, { Request, Response, Router } from "express";
import { upload, multerFile, fileName } from "../services/uploadFiles";

const routes: Router = Router();
routes.use("/uploaded", express.static("uploads/images"));

routes.post("/upload", upload.any(), (req: Request, res: Response) => {
  const files = req.files as unknown as multerFile[];
  if (files) {
    // setTimeout(() => {
    res.status(201).json({
      url: "uploaded/" + fileName,
    });
    // }, 1000);
  }
});

routes.all("*", (_req: Request, res: Response) => {
  res.status(404).send("<-- 404 page not found -->");
});

export default routes;
