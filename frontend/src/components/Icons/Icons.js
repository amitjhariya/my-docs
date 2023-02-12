import PDF from '../../assets/pdf.png'
import IMAGE from '../../assets/image.png'
import DOC from '../../assets/doc.png'
// import XLS from '../../assets/xls.png'
import TXT from '../../assets/xls.png'


const getIcon = (type) => {
  // console.log(type);
  if (type === "image/jpeg") {
    return IMAGE;
  }

  if (type === "image/png") {
    return IMAGE;
  }
  if (type === "application/pdf") {
    return PDF;
  }
  if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return DOC;
  }
  if(type==='text/plain'){
    return TXT;
  }
};

export default getIcon