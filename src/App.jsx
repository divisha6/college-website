import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Faculty from "./pages/Faculty";
import Course from "./pages/Course";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        flexDiirection: "column",
      }}
    >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />
      </header>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
      
    </div>
  );
}

export default App;
