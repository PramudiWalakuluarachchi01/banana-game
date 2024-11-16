import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const togglePasswordFieldType = () => {
    setPasswordFieldType(
      passwordFieldType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen text-black">
      <img
        src="bottom-right.png"
        alt=""
        className="select-none absolute bottom-0 right-0"
      />

      <div className="relative bg-[#A8A8A87A] bg-opacity-45 rounded-3xl w-7/12 h-4/6 flex justify-center items-center">
        <img
          src="top-right.png"
          alt=""
          className="select-none absolute -top-20 -right-16 "
        />
        <img
          src="top-left.png"
          alt=""
          className="select-none absolute -top-28 -left-60"
        />
        <div className="absolute top-14 left-28 mt-4 ml-4">
          <Link to="/">
            <img src="back.png" alt="" />
          </Link>
        </div>
        <div className="w-full text-center">
          <form className="flex flex-col items-center">
            <div className="flex rela w-3/6">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
            </div>

            <div className="flex relative w-3/6 justify-center items-center">
              <input
                type={passwordFieldType}
                id="password"
                placeholder="Password"
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
              <div
                className="absolute right-7 top-4 cursor-pointer"
                onClick={togglePasswordFieldType}
              >
                {passwordFieldType === "password" ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div>
              <a href="#" className="text-cyan-500 underline">
                Forgot Password?
              </a>
            </div>

            <Link to="/Home">
            <button
              type="submit"
              className="rounded-full w-24 h-10 m-4 bg-emerald-600 text-white text-xl  hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
            >
              Log In
            </button>
            </Link>
     
          
            <div>
              <p className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link to="/SignUp" className=" text-cyan-500 underline">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
