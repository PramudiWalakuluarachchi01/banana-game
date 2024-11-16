import  { useState } from 'react';
import { Link } from "react-router-dom";

const Instrctions = () => {
  const [selectedTab, setSelectedTab] = useState(1); 
  return (
    <div className="flex justify-center items-center h-screen w-screen text-black relative">
      
      <div className="relative bg-[#A8A8A87A] bg-opacity-45 rounded-3xl w-7/12 h-5/6 flex flex-col justify-start items-center pt-8">
        
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold text-black mb-2 underline">Score Table</h1>
        <div className=""></div>
          
        <div className="absolute top-40 left-2 -mt-20 ml-8">
        <Link to="/Home">
          <img src="back.png" alt="" />
        </Link>
      </div>

        </div>
        <div className="flex space-x-8 mb-8">
          <button
            onClick={() => setSelectedTab(1)}
            className={`py-2 px-4 rounded-3xl ${selectedTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Challenge 1
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`py-2 px-4 rounded-3xl ${selectedTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Challenge 2
          </button>
          <button
            onClick={() => setSelectedTab(3)}
            className={`py-2 px-4 rounded-3xl ${selectedTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Challenge 3
          </button>
        </div>


        <div className="flex justify-center items-center h-screen w-full">
          <input
            type=""
            id=""
            placeholder=""
            className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-36 opacity-50 h-12 mt-24"
            required
          />
        </div>

        <div className="flex justify-center items-center h-screen w-full">
          <input
            type=""
            id=""
            placeholder=""
            className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-36 opacity-50 h-12 mt-20 ml-96"
            required
          />
        </div>

        <div className="flex justify-normal items-start h-screen w-full">
          <input
            type=""
            id=""
            placeholder=""
            className="border rounded-3xl p-2 mb-2 shadow-md border-solid border-[#777777] w-36 opacity-50 h-12 -mt-14 ml-80"
            required
          />
        </div>

        <div className="flex justify-center items-end h-screen w-full">
  <div className="flex justify-between w-full px-12"> 

    <ul className="flex flex-col space-y-4 mt-2 w-1/2 mr-96"> 
      <li>
        <input
          type="text"
          placeholder="4."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="5."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="6."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
    </ul>

    
    <ul className="flex flex-col space-y-4 mt-2 w-1/2 ml-64"> 
      <li>
        <input
          type="text"
          placeholder="7."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="8."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="9."
          className="border rounded-3xl p-2 shadow-md border-solid border-gray-700 w-36 h-12 opacity-50"
          required
        />
      </li>
    </ul>
  </div>
</div>


        
        <img
          src="pic4.png"
          alt=""
          className="select-none absolute top-1 right-4 w-52 h-52"
        />

        <img
          src="first.png"
          alt=""
          className="select-none absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <img
          src="second.png"
          alt=""
          className="select-none absolute w-36 h-36 top-2/3 left-96 transform -translate-x-1/2 -translate-y-1/2"
        />

        <img
          src="third.png"
          alt=""
          className="select-none absolute w-36 h-36 top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2"
        />

        
        
      </div>

      
      <div className="absolute -bottom-28 left-0 w-full flex justify-between p-4 opacity-10">
        <img
          src="bg.png"
          alt="Background Image 1"
          className="w-1/2"
        />
        <img
          src="bg.png"
          alt="Background Image 2"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default Instrctions;
