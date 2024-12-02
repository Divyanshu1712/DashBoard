// import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Tech.Care</div>
      <nav className="menu">
        <a href="#overview">Overview</a>
        <a href="#patients">Patients</a>
        <a href="#schedule">Schedule</a>
        <a href="#message">Message</a>
        <a href="#transactions">Transactions</a>
      </nav>
      <div className="profile-settings">
        <img
          src="doctor.jpg"
          alt="Doctor"
          className="doctor-profile-pic"
        />
        <div className="settings-icon">⚙️</div>
      </div>
    </header>
  );
};

export default Header;
