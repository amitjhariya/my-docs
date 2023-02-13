import React, { useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { addDocuments } from "../../services/documents-api-service";
import "./fileUpload.css";

const FileUpload = ({ data, setData }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const uploadHandler = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await addDocuments(formData, (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      });
      const { contentType, _id, title } = response.data.document;
      setData([...data, { contentType, _id, title }]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };
  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
            </i>
            Upload {progress  ? `${progress} %` :"" }
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
