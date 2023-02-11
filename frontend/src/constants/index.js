export const AUTH_KEY = 'token';

// URL CONSTANTS
const API_ENDPOINT =process.env.REACT_APP_API_ENDPOINT
export const BASE_URL = `${API_ENDPOINT}/api/v1`;

export const GET_ALL_DOCUMENTS_URL = `${BASE_URL}/documents/`;

export const GET_SEARCH_DOCUMENTS_URL = `${BASE_URL}/documents/search`;

export const LOGIN_URL = `${BASE_URL}/auth/login`

export const LOGOUT_URL = `${BASE_URL}/auth/logout`;