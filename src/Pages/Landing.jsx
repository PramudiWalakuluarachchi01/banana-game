import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Landing = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen text-black">
      <div className="relative bg-[#A8A8A87A] bg-opacity-45 rounded-3xl w-7/12 h-4/6 flex flex-col justify-center items-center">
        
      <div className="text-center mt-8">
        <h1 className="text-7xl font-extrabold text-black mb-2">BANANA</h1>
        <h1 className="text-7xl font-extrabold text-black mb-2">QUIZ GAME</h1>
        <p className="text-3xl text-gray-700">READY TO PLAY!</p>
      </div>

        
        <img
          src="top-left.png"
          alt=""
          className="select-none absolute -bottom-60 -right-96"
        />

         <img
          src="pic2.png"
          alt=""
          className="select-none absolute -bottom-40 -left-96"
        />

        
        <img 
          src="minionGif.gif" 
          alt=""
          className="select-none absolute  justify-center -top-52 inset-0 left-80 align-top"
        />

        <div className="w-full text-center mt-8">
          <form className="flex flex-col items-center space-y-4">
           
            
            <div className="flex space-x-4 justify-center">

              <Link to="/Login">
                <button
                  type="button"
                  onClick={Login}
                  className="rounded-full w-24 h-10 bg-emerald-600 text-white text-xl hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
                >
                  Log In
                </button>
              </Link>

              <Link to="/signup">
                <button
                  type="button"
                  onClick={SignUp}
                  className="rounded-full w-24 h-10 bg-emerald-600 text-white text-xl hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </Link>

              <Link to="/Home">
              <button
                  type="button"
                  className="rounded-full w-24 h-10 bg-emerald-600 text-white text-xl hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
                >
                  Guest
                </button>
                </Link>              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
