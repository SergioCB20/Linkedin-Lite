import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import JobPostPage from "./pages/JobPostPage";
import JobRequestsPage from "./pages/JobRequestsPage";
function App() {
  return (
    <div className="w-full h-auto bg-base">
      <Navbar />
      <div className="container mx-auto py-[60px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/Job-Requests/:userId" element={<JobRequestsPage />} />
          <Route path="/Job-Post/:id" element={<JobPostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
