import { Link, useLocation } from "react-router-dom";
import CountDown from "./CountDown";
import { useState, useEffect } from "react";

const GameModule = () => {
  const [bananaData, setBananaData] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [lives, setLives] = useState(5); 
  const [difficulty, setDifficulty] = useState("Bash"); 

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const selectedDifficulty = query.get("difficulty") || "Bash";
    setDifficulty(selectedDifficulty);

    switch (selectedDifficulty) {
      case "Bash":
        setLives(5);
        break;
      case "Blitz":
        setLives(4);
        break;
      case "Frenzy":
        setLives(3);
        break;
      default:
        setLives(5);
    }
  }, [location.search]);

  const fetchBananaData = async () => {
    try {
      const response = await fetch(
        "https://marcconrad.com/uob/banana/api.php?out=json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setImageUrl(data.question);
      return data;
    } catch (error) {
      console.error("Error fetching banana data:", error);
      setError("Failed to load banana data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBananaData();
      setBananaData(data);
    };
    fetchData();
  }, []);

  const restartGame = () => {
    setBananaData(null);
    setError(null);
  };

  const getCountdownTime = () => {
    switch (difficulty) {
      case "Bash":
        return 30;
      case "Blitz":
        return 20;
      case "Frenzy":
        return 10;
      default:
        return 30;
    }
  };

  const getLivesImage = () => {
    switch (difficulty) {
      case "Bash":
        return "Bash.png";
      case "Blitz":
        return "Blitz.png";
      case "Frenzy":
        return "Frenzy.png";
      default:
        return "Bash.png";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen text-black">
      <div className="relative bg-[#A8A8A87A] bg-opacity-45 rounded-3xl w-7/12 h-4/6 flex flex-col items-center">
        
        <div className="text-center mt-4">
          <h1 className="text-5xl font-extrabold text-black mb-2">
            BANANA QUIZ GAME
          </h1>
          <h2 className="text-3xl font-bold text-black mb-4 underline">
            {difficulty === "Bash"
              ? "Banana Bash"
              : difficulty === "Blitz"
              ? "Banana Blitz"
              : "Banana Frenzy"}
          </h2>
        </div>

        <div className="flex justify-between w-full px-10 items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">Lives:</h1>
            <div className="flex space-x-2">
              {Array.from({ length: lives }, (_, index) => (
                <img
                  key={index}
                  src={getLivesImage()} 
                  alt="Life"
                  className="w-12 h-15"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Time Left:</h1>
            <CountDown seconds={getCountdownTime()} />
          </div>
        </div>

        <div className="flex justify-center items-center flex-grow">
          <img
            src={imageUrl}
            alt="Banana"
            className="w-2/3 object-contain"
          />
        </div>

        <div className="mt-4">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : bananaData ? (
            <p className="text-lg font-medium">
              Select The Correct Answer: {bananaData.fact}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="mt-auto mb-4 flex flex-col items-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            {Array.from({ length: 10 }, (_, index) => (
              <button
                key={index}
                className="rounded-full w-12 h-12 bg-[#A8A8A87A] text-black hover:bg-amber-600 transition-colors duration-300 bg-opacity-45"
              >
                {index}
              </button>
            ))}
          </div>
          <Link to="/Difficulty">
            <button
              onClick={restartGame}
              type="submit"
              className="rounded-full w-24 h-10 bg-emerald-600 text-white text-xl hover:bg-white hover:text-emerald-600 py-2 transition-colors duration-300"
            >
              Restart
            </button>
          </Link>
        </div>

        <div className="absolute top-4 left-4">
          <Link to="/Difficulty">
            <img src="back.png" alt="Back" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameModule;
