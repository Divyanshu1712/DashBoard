// import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProfileSection from "./components/ProfileSection";
import "./App.css";
import "./api.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
        <ProfileSection />
      </div>
    </div>
  );
}

export default App;
