import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";

const postURL =
  "https://o4uct0joj2.execute-api.eu-west-2.amazonaws.com/production/file/upload";

const MAX_SIZE = 500000000;

export const GATEDropzone: React.FC = () => {
  const [filesSelected, setFilesSelected] = useState<Blob | null>(null);
  const [name, setName] = useState("");
  const [fileNames, setFileNames] = useState<string[] | null>(null);
  const [isZipping, setIsZipping] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    const zip = new JSZip();

    const size = acceptedFiles.reduce<number>((acc, val) => {
      return acc + val.size;
    }, 0);

    if (size > MAX_SIZE) {
      setError("Max size is 500 MB.");
      return;
    }

    acceptedFiles.forEach(async (file) => {
      zip.file(file.name, file);
    });

    setIsZipping(true);
    const zippedFiles = await zip.generateAsync({ type: "blob" });
    setIsZipping(false);
    setFilesSelected(zippedFiles);
    setFileNames(acceptedFiles.map((file) => file.name));
  }, []);

  const onUpload = useCallback(async () => {
    if (filesSelected) {
      const formData = new FormData();
      formData.append(
        "blob",
        filesSelected,
        `${name}-${String(Math.random()).slice(2, 8)}`
      );
      console.log("posting");
      setIsUploading(true);
      try {
        await fetch(postURL, { method: "post", body: formData });
        setIsUploading(false);
        setIsComplete(true);
      } catch (err) {
        console.log(err);
        setError("There was an error uploading. Please try again later.");
        setIsUploading(false);
      }
      console.log("posted");
    }
  }, [name, filesSelected]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noDrag: true,
  });

  return isZipping ? (
    <p>
      Zipping
      <span className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </p>
  ) : error ? (
    <p style={{ color: "red" }}>{error}</p>
  ) : isComplete ? (
    <h3>Thank you :)</h3>
  ) : !filesSelected ? (
    <div {...getRootProps()} className="upload">
      <input {...getInputProps()} accept="video/*,image/*,application/zip" />
      <button className="upload-button">Select files</button>
    </div>
  ) : (
    <div className="upload two">
      {!isUploading ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(v) => {
              const regex = new RegExp("^[a-zA-Z0-9\\s]+$");
              if (
                !v.target.value ||
                (regex.test(v.target.value) && !isUploading)
              ) {
                setName(v.target.value);
              }
            }}
            placeholder="Your name"
            maxLength={50}
          />
          <button className="upload-button" onClick={onUpload} disabled={!name}>
            Upload
          </button>
          {fileNames && <p>{fileNames.join(", ").slice(0, 30)}...</p>}
        </>
      ) : (
        <h3>
          Uploading
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h3>
      )}
    </div>
  );
};
