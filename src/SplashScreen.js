import React from "react";
import "./App.css"; // Keep styling here

function SplashScreen({ onClick }) {
  return (
    <div className="splash-screen" onClick={onClick}>
      <div className="welcome-box">
        <h1 className="welcome-text">Welcome to Prakriti Analysis</h1>
        <p className="tap-text">(Tap anywhere to continue)</p>
      </div>
    </div>
  );
}

export default SplashScreen;



