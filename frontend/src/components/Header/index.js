import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { login } from "./../../services/auth-api-service.js";
import { saveCookie } from "./../../utils/cookie-helper";
import { ToastContainer, toast } from "react-toastify";
import { isAuthenticated, signOut } from "../../utils/user-helper.js";
import "react-toastify/dist/ReactToastify.css";
import { AUTH_KEY } from "./../../constants";

function Header() {
  const navigate = useNavigate();
  const auth = isAuthenticated();
  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      login(response)
        .then((res) => {
          const { token } = res.data;
          saveCookie(AUTH_KEY, token);
          toast.success("Login Success !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Error !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
    flow: "auth-code",
  });

  return (
    <header>
      <nav>
        <li className="links">
          <Link to="/">Home</Link>
        </li>

        {auth && (
          <li className="links">
            <Link to="/dashboard">My Docs</Link>
          </li>
        )}

        <li className="links">
          {!auth && (
            <button className="button" onClick={googleLogin}>
              Login
            </button>
          )}
          {auth && (
            <button className="button" onClick={signOut}>
              Logout
            </button>
          )}
        </li>
      </nav>
      <ToastContainer />
    </header>
  );
}

export default Header;
