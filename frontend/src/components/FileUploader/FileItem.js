import React from "react";
import { FaFileAlt, FaSpinner, FaTrash } from "react-icons/fa";
import "./FileItem.css";

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className="file-item" key={file.name}>
        <FaFileAlt/>
        <p>{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <FaSpinner
              className="fa-spin"
              onClick={() => deleteFile(file.name)}
            />
          )}
          {!file.isUploading && (
            <FaTrash onClick={() => deleteFile(file.name)} />
          )}
        </div>
      </li>
    </>
  );
};

export default FileItem;
