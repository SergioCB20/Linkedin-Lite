import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import SigninPage from "./pages/SigninPage"
import JobPostPage from "./pages/JobPostPage"
import JobRequestsPage from "./pages/JobRequestsPage"
function App() {
  return (
    <div className="w-full h-full bg-neutral-100">
      <Navbar />
      <div className="w-full h-full md:px-[10vw] pt-[10vh]">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile/:type/:id" element={<ProfilePage/>} />
          <Route path="/Job-Requests/:userId" element={<JobRequestsPage />} />
          <Route path="/Job-Post/:id" element={<JobPostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
