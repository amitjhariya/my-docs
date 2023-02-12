import React from "react";
import getIcon from "../Icons/Icons";
import { HiDownload } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import {
  deleteDocument,
  getDocument,
} from "../../services/documents-api-service";
import {toast} from 'react-toastify'

function File({ file,files, setFiles }) {
  const deleteFile = async (id) => {
    try {
      const response = await deleteDocument(id);
      if (response.data.success) {
        toast.success("File Deleted !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFiles(files.filter((doc) => doc._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const downloadFile = async () => {
    try {
      const response = await getDocument(file._id);
      const url = window.URL.createObjectURL(new Blob([response.data], { type: `${file.contentType};` }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.title);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="group relative mx-auto">
      <div className="h-40 aspect-w-1 aspect-h-1 w-32 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
        <img
          src={getIcon(file.contentType)}
          alt={file.title}
          className="h-[60px] w-[60px] object-cover object-center mt-16 mx-auto "
        />
        <div className="  absolute top-2 mx-2">
          <p className="text-xs text-gray-700">{file.title}</p>
        </div>
        <div className="flex px-2 w-full justify-between absolute bottom-2 ">
          <HiDownload className="h-4 w-4 " onClick={downloadFile} aria-hidden="true" />
          <HiOutlineTrash className="h-4 w-4 "  onClick={()=>deleteFile(file._id)} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default File;
