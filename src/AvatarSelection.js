import React, { useRef } from "react";
import "./App.css"; // Using App.css for styling

function AvatarSelection({ setAppState, setAvatar }) {
  const clickSoundRef = useRef(new Audio("/click.wav"));

  const handleAvatarSelect = (avatar) => {
    const audio = clickSoundRef.current;
    audio.currentTime = 0;
    audio.play(); // Play click sound
    setAvatar(avatar);
    setAppState("questions"); // Move to quiz
  };

  return (
    <div className="avatar-container">
      <h1 className="avatar-title">👤 Choose Your Avatar</h1>
      <p className="avatar-subtext">
        Select the avatar that best represents you to begin your journey!
      </p>

      <div className="avatar-options">
        {/* Male Avatar Button */}
        <button className="avatar-btn" onClick={() => handleAvatarSelect("male")}>
          <img src="/male-avatar.png" alt="Male Avatar" className="avatar-img" />
          <p className="avatar-label">Male</p>
        </button>

        {/* Female Avatar Button */}
        <button className="avatar-btn" onClick={() => handleAvatarSelect("female")}>
          <img src="/female-avatar.png" alt="Female Avatar" className="avatar-img" />
          <p className="avatar-label">Female</p>
        </button>
      </div>
    </div>
  );
}

export default AvatarSelection;



