import React from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { login } from "./../../services/auth-api-service.js";
import { saveCookie } from "./../../utils/cookie-helper";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isAuthenticated, signOut } from "../../utils/user-helper.js";
import "react-toastify/dist/ReactToastify.css";
import { AUTH_KEY } from "./../../constants";
import Logo from "./../../assets/logo.png";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = isAuthenticated();
  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      login(response)
        .then((res) => {
          const { token, userId, image, email, googleId, name } = res.data;
          saveCookie(AUTH_KEY, token);
          localStorage.setItem(
            "user",
            JSON.stringify({ userId, image, email, googleId, name })
          );
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

  const checkAuth = () => {
    if(auth){
      signOut()
      localStorage.removeItem('user')
    } else googleLogin();
  };

  return (
    <>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">My Docs</span>
              <img className="h-10" src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {auth && <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboard
            </Link>
          </div>}
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            onClick={checkAuth}
          >
            <Link
              to="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {auth ? "Logout" : "Login"} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">My docs</span>
                <img className="h-8" src={Logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {auth && <div className="space-y-2 py-6">
                  <Link to="dashboard">Dashboard</Link>
                </div>}
                <div className="py-6">
                  <Link
                    onClick={checkAuth}
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    {auth ? "Logout" : "Login"}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <ToastContainer />
    </>
  );
}

export default Nav;
