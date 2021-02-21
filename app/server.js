const path = require("path");
const express = require("express");
const formidable = require("formidable");
const { readFile } = require("fs-extra");
require("express-async-errors");

const uploadPath = path.join(__dirname, "uploads");
const PORT = 4001;
const app = express();

app.use("/uploads", express.static("uploads"));

app.post("/api/upload", async (req, res, next) => {
  const form = formidable({
    uploadDir: uploadPath,
    keepExtensions: true,
  });
  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      const filePath = files.img_upload.path;
      const fileName = filePath.replace(`${uploadPath}/`, "");

      const buffer = await readFile(filePath);
      const parser = require("exif-parser").create(buffer);
      const result = parser.parse();
      const { GPSLatitude, GPSLongitude } = result.tags;
      const coordinates = [GPSLongitude, GPSLatitude];
      return res.json({ coordinates, file: `/uploads/${fileName}` });
    });
  } catch (err) {
    throw new Error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});
