import { postRequest,getRequest, putRequest,deleteRequest } from '../utils/http-helper';
import {
  GET_ALL_DOCUMENTS_URL,
  GET_SEARCH_DOCUMENTS_URL
} from '../constants/index';

export const getAllDocuments = async (data) => {
  return await getRequest({
    url: GET_ALL_DOCUMENTS_URL,
    data: data,
  });
};

export const addDocuments = async (data,onUploadProgress) => {
  return await postRequest({
    url: GET_ALL_DOCUMENTS_URL,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: onUploadProgress
  });
};

export const getDocument = async (id) => {
  return await getRequest({
    url: `${GET_ALL_DOCUMENTS_URL}/${id}`,
    responseType: 'arraybuffer',
  });
};

export const deleteDocument = async (id) => {
  return await deleteRequest({
    url: `${GET_ALL_DOCUMENTS_URL}/${id}`,
  });
};


export const searchDocuments = async (data) => {
  return await getRequest({
    url: GET_SEARCH_DOCUMENTS_URL,
    data: data,
  });
};


