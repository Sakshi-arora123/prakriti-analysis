import React from "react";

function Welcome(props) {
  function handleClick(event) {
    event.preventDefault();
    props.setAppState("avatar");
  }

  return (
    <div className="welcome-container">
      {/* Header Section */}
      <section className="welcome-header">
        <h1>Discover Your Prakriti</h1>
        <p>Uncover your dosha balance and achieve inner harmony.</p>
      </section>

      {/* Info Cards */}
      <section className="info-cards">
        <div className="card fade-in">
          <h2>📖 What You'll Get</h2>
          <p>Personalized insights based on your Dosha.</p>
        </div>
        <div className="card fade-in delay-1">
          <h2>🔍 How It Works</h2>
          <p>Answer simple questions & let Ayurveda guide you.</p>
        </div>
        <div className="card fade-in delay-2">
          <h2>🌿 Why Take This Quiz?</h2>
          <p>Find balance, improve health, and enhance well-being.</p>
        </div>
      </section>

      {/* Start Button */}
      <section>
        <button className="start-btn" onClick={handleClick}>
          Start Quiz 🚀
        </button>
      </section>
    </div>
  );
}

export default Welcome;

