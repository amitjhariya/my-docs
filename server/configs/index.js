import dotenv from "dotenv";
dotenv.config();


export const PORT = process.env.PORT || 8000;
export const MONGO_URL = process.env.MONGO_URL;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET =process.env.GOOGLE_CLIENT_SECRET