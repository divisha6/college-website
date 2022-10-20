import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Faculty from "./pages/Faculty";
import Course from "./pages/Course";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />

        <Routes>
          <Route path="/Home" element = {<HomePage/>} />
          <Route path="/faculty" element = {<Faculty/>} />
          <Route path="/courses" element = {<Course/>} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
