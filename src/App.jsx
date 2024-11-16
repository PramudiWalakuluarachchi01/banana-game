import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Difficulty from './Pages/Difficulty'
import User from './Pages/User'
import ScoreBoard from './Pages/ScoreBoard'
import Instructions from './Pages/Instructions'
import GameModule from './Pages/GameModule'
import ExtraQuiz from './Pages/ExtraQuiz'

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Difficulty" element={<Difficulty/>} />
      <Route path="/User" element={<User/>} />
      <Route path="/ScoreBoard" element={<ScoreBoard/>} />
      <Route path="/Instructions" element={<Instructions/>} />
      <Route path="/GameModule" element={<GameModule/>} />
      <Route path="/ExtraQuiz" element={<ExtraQuiz/>} />
      
    </Routes>
   </Router>
  )
}

export default App
