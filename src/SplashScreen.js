import React, { useState, useEffect } from "react";
import "./App.css";

function SplashScreen({ onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div className={`splash-screen ${visible ? "show" : ""}`} onClick={onClick}>
      <div className="welcome-box">
        <h1 className="welcome-text">Discover Your Inner Balance</h1>
        <p className="sub-text">with Prakriti Analysis</p>
        <button className="start-button">Get Started</button>
      </div>
    </div>
  );
}

export default SplashScreen;



