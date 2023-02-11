import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";
import Users from "../models/users.js";

import {
  JWT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "./../configs/index.js";

const verifyGoogleToken = async ({ code }) => {
  const oAuth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    "postmessage"
  );
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    // const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    //   headers: { Authorization: `Bearer ${tokens.access_token}` },
    // });
    const res = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
      }
    );
    const user = res.data;
    const { refresh_token } = tokens;

    const { email, sub: googleId, name, picture: image } = user;

    const findUser = await Users.findOne({ googleId });
    let userId = "";
    if (!findUser) {
      const newUser = new Users({
        email,
        googleId,
        name,
        image,
      });
      const result = await newUser.save();
      userId = result._id;
    } else {
      userId = findUser._id;
    }

    return { refresh_token, email, googleId, name, image, userId };
  } catch (error) {
    console.log(error);
    throw new Error("Token verification failed");
  }
};

export const revokeGoogleToken = async (token) => {
  const client = new OAuth2Client(GOOGLE_CLIENT_ID);
  try {
    await client.revokeToken(token);
    return true;
  } catch (error) {
    throw new Error("Token revocation failed");
  }
};

export const authenticate = async (tokenResponse) => {
  try {
    const { refresh_token, email, googleId, name, image, userId } =
      await verifyGoogleToken(tokenResponse);
    //checks if user exist
    // Create the JWT payload with user information
    const jwtPayload = {
      userId,
      googleId,
      email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    };

    // Sign the JWT
    const token = jwt.sign(jwtPayload, JWT_SECRET);
    return { token, refresh_token, name, image, userId, googleId, email };
  } catch (error) {
    console.log(error);
    throw new Error("Authentication failed");
  }
};
