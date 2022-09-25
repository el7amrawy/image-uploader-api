import multer from "multer";
import path from "path";
import fs from "fs";

const appRoot = path.resolve();

let fileName: string;

const storage: multer.StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(appRoot, "uploads", file.fieldname + "s");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    fileName =
      file.fieldname + "-" + Date.now() + `.${file.mimetype.split("/")[1]}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

interface multerFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: Number;
}

export { upload, multerFile, appRoot, fileName };
