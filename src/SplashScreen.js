import React from "react";
import "./App.css"; // Keep styling here

function SplashScreen({ onClick }) {
  return (
    <div className="splash-screen" onClick={onClick}>
      <div className="welcome-box">
        <h1 className="welcome-text">Discover Your Inner Balance</h1>
        <p className="sub-text">with Prakriti Analysis</p>
        <p className="tap-text">(Tap anywhere to continue)</p>
      </div>
    </div>
  );
}

export default SplashScreen;




