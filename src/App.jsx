import './App.css'
import Navbar from "./Navbar"
import Home from './pages/home'
import About from './pages/About'
import { Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
