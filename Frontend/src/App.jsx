import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" elements={<HomePage/>} />
         <Route path="/signup" elements={<SignUpPage/>} />
          <Route path="/login" elements={<LoginPage/>} />
           <Route path="/settings" elements={<SettingsPage/>} />
            <Route path="/profile" elements={<ProfilePage/>} />
      </Routes>

    </div>
  );
}

export default App;