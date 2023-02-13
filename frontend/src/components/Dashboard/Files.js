import React, { useState, useEffect } from "react";
import { getAllDocuments } from "../../services/documents-api-service";
import { toast } from "react-toastify";
import FileUpload from "../FileUploader/FileUpload";
import File from "./File";
import Loader from "../Loader/Loader";


function Files() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDocuments = async () => {
      setLoading(true);
      try {
        const response = await getAllDocuments();
        if (response.data.success) {
          setFiles(response.data.result.documents);
        }
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
        setLoading(false);
      }
    };
    getDocuments();
  }, []);
  return (
    <div className="bg-white">
      {loading && <Loader/>}
      <FileUpload data={files} setData={setFiles} />
      <div className="mx-auto max-w-2xl    lg:max-w-7xl ">
      
        <div className="mt-6 mx-2 grid grid-cols-2 gap-y-8 gap-x-2 sm:grid-cols-3 lg:grid-cols-8 xl:gap-x-8">
          

          {files.map((file, index) => (
            <File key={index} file={file} files={files} setFiles={setFiles} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Files;
