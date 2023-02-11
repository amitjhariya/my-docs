import { postRequest } from '../utils/http-helper';
import {
  LOGIN_URL,
  LOGOUT_URL
} from '../constants/index';

export const login = async (data) => {
  return await postRequest({
    url: LOGIN_URL,
    data: data,
    noAuth: true
  });
};



export const logout = async () => {
  return await postRequest({
    url: LOGOUT_URL
  });
};
