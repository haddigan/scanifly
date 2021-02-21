import { Card } from "./Card";

import "./PlottedImage.css";

export const PlottedImage = ({ imgSrc, coords }) => {
  return !imgSrc ? null : (
    <Card className="plotted-image">
      <h3 className="image-heading">Image Location</h3>
      <dl className="image-location">
        <dt>Latitude: </dt>
        <dd>{coords[1].toFixed(6)}</dd>
        <dt>Longitude: </dt>
        <dd>{coords[0].toFixed(6)}</dd>
      </dl>
      <h3 className="image-heading">Image Preview</h3>
      <div className="image-preview">
        <img src={imgSrc} alt="Your upload" />
      </div>
    </Card>
  );
};
