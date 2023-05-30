import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages"
import { NavBar } from './components';
import "./App.css"


const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/leaderboard" element={<Pages.LeaderBoard />} />
          <Route path="/profile" element={<Pages.ProfilePage />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/signup" element={<Pages.SignupPage />} />

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
