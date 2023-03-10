import axios from 'axios';
import { forceLogout } from './user-helper';
import { getCookie } from './cookie-helper';
import { toast } from 'react-toastify';

export const sendRequest = async (args) => {
  try {
    const { url, headers, noAuth } = args;
    let headerParams = headers;
    if (!noAuth) {
      if (headers) {
        headerParams = {
          ...headers,
          Authorization: `Bearer ${getCookie('token')}`
        };
      } else {
        headerParams = {
          Authorization: `Bearer ${getCookie('token')}`
        };
      }
    }
    const response = await axios({
      ...args,
      headers: headerParams,
      url: url
    });
    return response;
  } catch (error) {
    if (error.message === 'Network Error') {
      console.log('object');
      toast.error('Please Check your internet Connection', {
        toastId: 'errorWhileRequest'
      });
    }
    if (error.response.status === 401) {
      // forceLogout();
    }
    return { error };
  }
};

export const getRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'get'
  });
  if (status === 200) {
    return {
      data,
      error: null,
      headers,
      status
    };
  }
  return {
    data,
    error: error || data,
    status
  };
};

export const postRequest = async (args) => {
  console.log(args.headers)
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'post',
    onUploadProgress: args.onUploadProgress
  });
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status
    };
  }
  return {
    data: null,
    error: error || data,
    status
  };
};

export const patchRequest = async (args) => {
  const { data, headers, error, status } = await sendRequest({
    ...args,
    method: 'patch'
  });
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status
    };
  }
  return {
    data: null,
    error: error || data,
    status
  };
};

export const deleteRequest = async (args) => {
  const { data, error, status, headers } = await sendRequest({
    ...args,
    method: 'delete'
  });
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status
    };
  }
  return {
    data: null,
    error: error || data,
    status
  };
};

export const putRequest = async (args) => {
  const { data, error, status, headers } = await sendRequest({
    ...args,
    method: 'put'
  });
  if ([200, 201, 204].indexOf(status) > -1) {
    return {
      data,
      error: null,
      headers,
      status
    };
  }
  return {
    data: null,
    error: error || data,
    status
  };
};
