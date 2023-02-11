import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineFileJpg } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import {BsCardImage} from 'react-icons/bs'
import { BsTextCenter } from "react-icons/bs";

const getIcon = (type) => {
  // console.log(type);
  if (type === "image/jpeg") {
    return <AiOutlineFileJpg className="icon" />;
  }
  if (type === "image/png") {
    return <BsCardImage className="icon" />;
  }

  if (type === "application/pdf") {
    return <GrDocumentPdf className="icon"  />;
  }
  if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return <FcDocument  className="icon" />;
  }
  if(type==='text/plain'){
    return <BsTextCenter  className="icon" />;
  }
};

export default getIcon