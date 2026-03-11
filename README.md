# 🍌 Banana Quiz Game

A fun and interactive **React-based quiz game** where players solve banana-themed math puzzles under time pressure. The game includes multiple difficulty levels, a live leaderboard, bonus challenges, and Firebase-based authentication.

## 🚀 Live Features

* 🎮 Multiple difficulty modes
* ⏱ Countdown timer for each question
* ❤️ Lives system depending on difficulty
* 🧠 Bonus math challenges every few questions
* 🏆 Live leaderboard / scoreboard
* 🎉 Confetti animation for new high scores
* 🔐 Firebase authentication system
* ☁️ Firebase Realtime Database for storing scores
* 👤 User profile menu

---

# 🎮 Game Modes

| Mode          | Description       |
| ------------- | ----------------- |
| Banana Bash   | Easy difficulty   |
| Banana Blitz  | Medium difficulty |
| Banana Frenzy | Hard difficulty   |

Each difficulty level changes:

* number of lives
* question speed
* scoring difficulty

---

# 🧠 Game Logic

The game retrieves puzzle images from the **Banana Puzzle API**:

https://marcconrad.com/uob/banana/api.php

Players must analyze the image and enter the correct mathematical answer before time runs out.

Additional features include:

* **Bonus math challenge popup every 5 questions**
* **Score tracking**
* **Timer-based gameplay**
* **Leaderboard ranking system**

---

# 🛠 Tech Stack

Frontend

* React (Vite)
* React Router
* Tailwind CSS
* Framer Motion
* Headless UI

Backend / Services

* Firebase Authentication
* Firebase Realtime Database

Libraries

* canvas-confetti
* react-icons

---

# 📂 Project Structure

```
src
 ├── components
 │   ├── Clock
 │   ├── CountDown
 │   ├── MathChallengePopup
 │   ├── Game_summary
 │   └── Profile_btn
 │
 ├── pages
 │   ├── Home
 │   ├── Difficulty
 │   ├── GameModule
 │   ├── Instructions
 │   ├── ScoreBoard
 │   ├── Landing
 │   ├── SignIn
 │   └── SignUp
 │
 ├── firebaseConfig.js
 └── App.jsx
```

---

# 🏆 Leaderboard System

The game includes a **real-time leaderboard** stored in Firebase.

Features:

* Top 10 players displayed
* Separate leaderboard for each difficulty
* Highlights the logged-in player
* Confetti animation when a new top score is reached

---

# 🔐 Authentication

The game uses **Firebase Authentication**.

Users can:

* Sign up
* Sign in
* Verify email
* Store scores in the database

User data stored:

```
users
  └── userID
        ├── username
        ├── email
        ├── easy
        ├── medium
        └── hard
```

---

# 🎯 Key Components

| Component          | Purpose                           |
| ------------------ | --------------------------------- |
| GameModule         | Main gameplay logic               |
| MathChallengePopup | Bonus math challenge system       |
| ScoreBoard         | Leaderboard display               |
| Game_summary       | End-game summary and score saving |
| Clock              | Timer visualization               |
| Profile_btn        | User profile dropdown             |

---

# 📸 Screens

Main pages include:

* Landing Page
* Login / Signup
* Home Menu
* Difficulty Selection
* Game Screen
* Leaderboard
* Instructions

---

# ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/banana-quiz-game.git
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

# 📚 Learning Outcomes

This project demonstrates:

* React component architecture
* API integration
* Firebase authentication
* Real-time database usage
* State management with hooks
* UI animations and transitions
* Game logic implementation

---

# 📸 Screenshots
<img src="https://github.com/PramudiWalakuluarachchi01/banana-game/blob/8bd217b78cba546ae2d3a586c4ba52471acff082/banana-game_01.png"  width=200 height=300>
<img src="https://github.com/PramudiWalakuluarachchi01/banana-game/blob/8bd217b78cba546ae2d3a586c4ba52471acff082/banana-game_02.png"  width=200 height=300>
<img src="https://github.com/PramudiWalakuluarachchi01/banana-game/blob/8bd217b78cba546ae2d3a586c4ba52471acff082/banana-game_03.png"  width=200 height=300>
<img src="https://github.com/PramudiWalakuluarachchi01/banana-game/blob/8bd217b78cba546ae2d3a586c4ba52471acff082/banana-game_04.png"  width=200 height=300>

---


