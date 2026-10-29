import multer from "multer";
import path from "node:path";
import fs from "node:fs";

const uploadDir = path.resolve("uploads/resumes");

fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },

  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    cb(null, `${crypto.randomUUID()}${extension}`);
  },
});

const fileFilter: multer.Options["fileFilter"] = (
  _req,
  file,
  cb
) => {
  const allowedExtensions = [".pdf", ".docx"];
  const extension = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    return cb(new Error("Only PDF and DOCX resumes are allowed"));
  }

  cb(null, true);
};

export const uploadResume = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
});