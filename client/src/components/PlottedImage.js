import { Card } from "./Card";

export const PlottedImage = ({ imgSrc }) => {
  return !imgSrc ? null : (
    <Card>
      <img src={imgSrc} alt="Your upload" style={{ maxWidth: "200px" }} />
    </Card>
  );
};
