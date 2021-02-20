export const ImagePlotter = ({ coords, onUploadImage }) => {
  return (
    <>
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
    </>
  );
};
