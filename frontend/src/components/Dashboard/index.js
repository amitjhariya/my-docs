import React, { useState, useEffect } from "react";
import {
  deleteDocument,
  getAllDocuments,
  getDocument,
} from "../../services/documents-api-service";
import FileUpload from "../FileUploader/FileUpload";
import getIcon from "./../Icons/Icons.js";
import { ImDownload } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
import {toast} from 'react-toastify'

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const response = await getAllDocuments();
        if (response.data.success) {
          setData(response.data.result.documents);
        }
      } catch (error) {
        console.log(error)
      }
    };
    getDocuments();
  }, []);

  const deleteFile = async(id) => {
    try {
      const response = await deleteDocument(id);
      if (response.data.success) {
        toast.success("File Deleted !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setData(data.filter(doc => doc._id !== id));
      }
    } catch (error) {
      console.log(error)
    }
  }

  const downloadFile = async (doc) => {
    try {
      const response = await getDocument(doc._id);
      const url = window.URL.createObjectURL(new Blob([response.data], { type: `${doc.contentType};` }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", doc.title);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="dashboard">
      <div className="file-upload">
        <FileUpload data={data} setData={setData} />
      </div>
      <div className="doc-wrapper">
        {data.length === 0 && <p className="text-center"> No Document Found</p>}
        {data.map((doc, i) => (
          <div className="file" key={i}>
            <BsTrash className="delete" onClick={() => deleteFile(doc._id)} />
            <ImDownload
                className="download-icon"
                onClick={() => downloadFile(doc)}
              />
            <div className="card">
              <p className="title">{doc.title}</p>
              <div className="icon">{getIcon(doc.contentType)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
