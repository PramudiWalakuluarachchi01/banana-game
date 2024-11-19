import { Link } from "react-router-dom";


const Instructions = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen text-black">
            <div className="relative bg-[#A8A8A87A] bg-opacity-45 rounded-3xl w-7/12 h-4/6 flex justify-center items-center">

      <div className="absolute top-40 left-28 mt-6 ml-80">
        <Link to="/Home">
          <img src="back.png" alt="" />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Instructions
