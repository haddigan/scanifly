import { ImageUploader } from "./ImageUploader";
import { PlottedImage } from "./PlottedImage";

import "./ImagePlotter.css";

export const ImagePlotter = ({ coords, onUploadImage, file }) => {
  return (
    <div className="image-plotter">
      <h1 className="image-plotter-heading">Plot a drone image on the map!</h1>
      <ImageUploader onUploadImage={onUploadImage} />
      <PlottedImage imgSrc={file} />
    </div>
  );
};
