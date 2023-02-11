import { getCookie, deleteCookie } from './cookie-helper';
import { AUTH_KEY } from '../constants';
export const isAuthenticated = () => {
  const userToken = getCookie(AUTH_KEY)
  if (!Object.keys(userToken).length) {
    return false;
  }
  return true;
};

export const signOut = () => {
  deleteCookie(AUTH_KEY);
  window.location.replace('/');
};

export const forceLogout = () => {
  deleteCookie(AUTH_KEY);
  window.location.replace('/');
};
