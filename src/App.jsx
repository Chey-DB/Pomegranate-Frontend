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
          <Route index element={<Pages.Home />} />
          <Route path="/leaderboard" element={<Pages.Leaderboard />} />
          <Route path="/profile" element={<Pages.Profile />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/logout" element={<Pages.Logout />} />
          <Route path="/signup" element={<Pages.Signup />} />

          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
