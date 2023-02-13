import PDF from '../../assets/pdf.png';
import IMAGE from '../../assets/image.png';
import DOC from '../../assets/doc.png';
import XLS from '../../assets/xls.png';
import TXT from '../../assets/txt.png';

const ICON_MAP = {
  'image/jpeg': IMAGE,
  'image/png': IMAGE,
  'application/pdf': PDF,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': DOC,
  'text/plain': TXT,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': XLS
};

const getIcon = (type) => ICON_MAP[type] || null;

export default getIcon;
