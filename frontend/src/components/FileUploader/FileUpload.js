import React from "react";
import { FaPlus } from "react-icons/fa";
import { addDocuments } from "../../services/documents-api-service";
import "./fileUpload.css";

const FileUpload = ({ data, setData }) => {
  const uploadHandler = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await addDocuments(formData);
      const { contentType,_id,title}=response.data.document
      setData([...data,{contentType,_id,title}])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FaPlus />
            </i>
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
