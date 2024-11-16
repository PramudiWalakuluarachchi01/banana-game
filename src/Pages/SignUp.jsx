import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Adjust the import path as per your project structure
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User Registered:", user);
      // Optionally, you can save the username to your database
      navigate("/Home"); // Navigate to the Home page after successful signup
    } catch (err) {
      setError(err.message);
    }
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
          <form className="flex flex-col items-center" onSubmit={handleSignUp}>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex w-3/6">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
            </div>
            <div className="flex w-3/6">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
            </div>
            <div className="flex w-3/6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
            </div>
            <div className="flex w-3/6">
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-full opacity-50 h-12"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-full w-24 h-10 m-4 bg-emerald-600 text-white text-xl hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
            >
              Sign Up
            </button>
            <div>
              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link to="/Login" className="text-cyan-500 underline">
                  LogIn
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
