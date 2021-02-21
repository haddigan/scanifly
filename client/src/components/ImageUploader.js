import { useDropzone } from "react-dropzone";

import { Card } from "./Card";

import "./ImageUploader.css";

export const ImageUploader = ({ onUploadImage }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => {
    return <li key={file.path}>📄 {file.path}</li>;
  });
  return (
    <Card className="image-uploader">
      <form onSubmit={onUploadImage}>
        <label htmlFor="img_upload">Upload drone image here</label>
        <div {...getRootProps({ className: "drop-zone" })}>
          <input {...getInputProps()} type="file" name="img_upload" />
          <p>Upload image from your computer</p>
        </div>
        {acceptedFiles && <ul className="file-list">{files}</ul>}
        <input
          type="submit"
          value="Add image to map"
          className="image-uploader-button"
        />
      </form>
    </Card>
  );
};
