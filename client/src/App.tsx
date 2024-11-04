import Navbar from "./components/Extra/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Network from "./pages/Network"
function App() {
  return (
    <div className="w-full h-full bg-neutral-100">
      <Navbar />
      <div className="w-full h-full md:px-[10vw] pt-[10vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:type/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
