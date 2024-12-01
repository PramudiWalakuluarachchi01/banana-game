import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const GameModule = () => {
  const [bananaData, setBananaData] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [lives, setLives] = useState(5);
  const [difficulty, setDifficulty] = useState("Bash");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [incorrectStreak, setIncorrectStreak] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [gameOver, setGameOver] = useState(false); // Game Over state to trigger the popup

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const selectedDifficulty = query.get("difficulty") || "Bash";
    setDifficulty(selectedDifficulty);

    switch (selectedDifficulty) {
      case "Bash":
        setLives(5);
        setCountdown(30);
        break;
      case "Blitz":
        setLives(4);
        setCountdown(20);
        break;
      case "Frenzy":
        setLives(3);
        setCountdown(10);
        break;
      default:
        setLives(5);
        setCountdown(30);
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
      console.log("Fetched Banana Data:", data);
      setImageUrl(data.question);
      return data;
    } catch (error) {
      console.error("Error fetching banana data:", error);
      setError("Failed to load banana data");
    }
  };

  const loadNewQuestion = async () => {
    if (lives === 0) {
      setGameOver(true); // Set the game to over if lives are zero
      return; // Don't load a new question if the game is over
    }
    const data = await fetchBananaData();
    setBananaData(data);
    setFeedbackMessage("");
    resetTimer(); // Reset the timer when a new question loads.
  };

  useEffect(() => {
    if (lives > 0) {
      loadNewQuestion();
    }
  }, [lives]);

  useEffect(() => {
    if (countdown === 0) {
      handleTimerEnd(); // Handle timer reaching zero.
    } else if (!gameOver) { // Stop timer when game is over
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown, gameOver]);

  const resetTimer = () => {
    if (gameOver) return; // Don't reset the timer if the game is over
    switch (difficulty) {
      case "Bash":
        setCountdown(30);
        break;
      case "Blitz":
        setCountdown(20);
        break;
      case "Frenzy":
        setCountdown(10);
        break;
      default:
        setCountdown(30);
    }
  };

  const handleTimerEnd = () => {
    if (lives > 0) {
      setLives((prev) => prev - 1); // Deduct a life when time runs out.
      setIncorrectStreak(0); // Reset incorrect streak.

      if (lives === 0) {
        setGameOver(true); // Trigger game over immediately when lives hit zero
      }
    }
  };

  const handleAnswerClick = async (answer) => {
    if (gameOver) return; // Prevent answering when the game is over
    if (!bananaData || !bananaData.solution) {
      console.error("Banana data or answer is missing", bananaData);
      setFeedbackMessage("Error! Unable to process answer.");
      return;
    }

    console.log("User Answer:", answer);
    console.log("Correct Answer:", bananaData.solution);

    if (answer.toString() === bananaData.solution.toString()) {
      setFeedbackMessage("Correct! 🎉");
      setIncorrectStreak(0);
    } else {
      setFeedbackMessage("Incorrect! ❌");
      setIncorrectStreak((prev) => prev + 1);

      if (incorrectStreak + 1 >= 2) {
        setLives((prev) => prev - 1);
        setIncorrectStreak(0);
      }
    }

    if (lives === 1) {
      setGameOver(true); // Trigger game over immediately when lives hit zero
    } else {
      setTimeout(() => {
        loadNewQuestion();
      }, 1000);
    }
  };

  const restartGame = () => {
    setGameOver(false); // Hide the Game Over popup
    setBananaData(null);
    setError(null);
    setFeedbackMessage("");
    setLives(difficulty === "Bash" ? 5 : difficulty === "Blitz" ? 4 : 3);
    setIncorrectStreak(0);
    resetTimer();
    loadNewQuestion();
  };

  const getLivesImage = () => {
    switch (difficulty) {
      case "Bash":
        return "/Bash.png";
      case "Blitz":
        return "/Blitz.png";
      case "Frenzy":
        return "/Frenzy.png";
      default:
        return "/Bash.png";
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
            <h1 className="text-xl font-bold">{countdown}s</h1>
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

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {Array.from({ length: 10 }, (_, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`rounded-full w-12 h-12 bg-[#A8A8A87A] text-black hover:bg-amber-600 transition-colors duration-300 bg-opacity-45`}
            >
              {index}
            </button>
          ))}
        </div>

        {feedbackMessage && (
          <p className="text-xl font-bold mt-4">
            {feedbackMessage}
          </p>
        )}

        <div className="mt-auto mb-4 flex flex-col items-center">
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

      {gameOver && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-4xl font-bold text-red-600">Game Over!</h2>
            <p className="mt-4 text-xl text-gray-800">
              You have lost all your lives. Try again!
            </p>
            <button
              onClick={restartGame}
              className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg"
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameModule;
