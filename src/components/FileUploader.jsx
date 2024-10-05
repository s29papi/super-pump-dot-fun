import React, { useState } from "react";
import UploadIconGray from "../assets/upload_icon_gray.svg";

const FileUploader = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileSelect = async (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedFile(file);
      if (onFileChange) {
        onFileChange(file);
      }

      setPreviewUrl(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
      if (onFileChange) {
        onFileChange(event.dataTransfer.files[0]);
      }
      setPreviewUrl(URL.createObjectURL(event.dataTransfer.files[0]));
      console.log(URL.createObjectURL(event.dataTransfer.files[0]));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-2">
      <div
        className="bg-[#333] w-full h-56 border-2 border-dashed 
        border-primary rounded-[8px] flex items-center justify-center flex-col gap-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label className="cursor-pointer flex flex-col items-center gap-4">
          {selectedFile ? (
            <img
              src={previewUrl}
              className="object-contain w-[200px] h-[200px]"
              alt="Preview"
            />
          ) : (
            <>
              <img
                src={UploadIconGray}
                className="w-12 h-12"
                alt="Upload Icon"
              />
              <p className="font-semibold text-[#ccc] text-[14px] lg:text-[18px]">
                <span className="text-primary underline text-center">
                  Click to upload
                </span>{" "}
                or drag and drop file
              </p>
              <input
                type="file"
                className="hidden"
                onChange={handleFileSelect}
              />
            </>
          )}
        </label>
      </div>

      <p className="text-[12px] text-[#fff]">
        {selectedFile ? selectedFile.name : "No file selected"}
      </p>
    </div>
  );
};

export default FileUploader;
