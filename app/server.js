const express = require("express");
const formidable = require("formidable");
const { readFile } = require("fs-extra");
require("express-async-errors");

const PORT = 4001;
const app = express();

app.post("/api/upload", async (req, res, next) => {
  const form = formidable();
  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      const filepath = files.img_upload.path;
      const buffer = await readFile(filepath);
      const parser = require("exif-parser").create(buffer);
      const result = parser.parse();
      const { GPSLatitude, GPSLongitude } = result.tags;
      res.json([GPSLatitude, GPSLongitude]);
    });
  } catch (err) {
    throw new Error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});
