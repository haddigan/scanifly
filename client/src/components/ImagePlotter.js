export const ImagePlotter = ({ coords, onUploadImage, file }) => {
  return (
    <div className="image-plotter">
      {coords && (
        <div>
          <p>
            Coordinates to map:
            {coords.join(",")}
          </p>
        </div>
      )}
      <form onSubmit={onUploadImage}>
        <div>
          File: <input type="file" name="img_upload" />
        </div>
        <input type="submit" value="Upload" />
      </form>
      {file && (
        <img src={file} alt="Your upload" style={{ maxWidth: "200px" }} />
      )}
    </div>
  );
};
