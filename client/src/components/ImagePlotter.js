import { Card } from "./Card";

import "./ImagePlotter.css";

export const ImagePlotter = ({ coords, onUploadImage, file }) => {
  return (
    <div className="image-plotter">
      <h1 className="image-plotter-heading">Plot a drone image on the map!</h1>
      <Card>
        <form onSubmit={onUploadImage}>
          <div>
            File: <input type="file" name="img_upload" />
          </div>
          <input type="submit" value="Upload" />
        </form>
      </Card>
      {file && (
        <img src={file} alt="Your upload" style={{ maxWidth: "200px" }} />
      )}
    </div>
  );
};
