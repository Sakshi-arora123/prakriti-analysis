import React, { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function SpinWheel({ results, setAppState, setFinalDosha }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  const determineDosha = () => {
    if (!results || results.length === 0) return "Unknown";

    const doshaCount = { Vata: 0, Pitta: 0, Kapha: 0 };

    results.forEach((answer) => {
      if (answer === "a") doshaCount.Vata += 1;
      if (answer === "b") doshaCount.Pitta += 1;
      if (answer === "c") doshaCount.Kapha += 1;
    });

    const sortedDoshas = Object.entries(doshaCount).sort((a, b) => b[1] - a[1]);

    return sortedDoshas.length > 1 && sortedDoshas[0][1] === sortedDoshas[1][1]
      ? `${sortedDoshas[0][0]}${sortedDoshas[1][0]}`
      : sortedDoshas[0][0];
  };

  const dosha = useMemo(determineDosha, [results]);

  const wheelSections = useMemo(
    () => ["Pitta", "Vata", "Kapha", "Vatapitta", "Pittakapha", "Vatakapha"],
    []
  );

  const sectionAngle = 360 / wheelSections.length;

  const targetRotation = useMemo(() => {
    const index = wheelSections.indexOf(dosha);
    return index !== -1 ? index * sectionAngle + 360 * 3 : 0;
  }, [dosha, sectionAngle, wheelSections]);

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setRotation(targetRotation);
        setTimeout(() => {
          setFinalDosha(dosha);
          setAppState("result");
        }, 3500);
      }, 100);
    }
  }, [isSpinning, targetRotation, setFinalDosha, setAppState, dosha]);

  const startSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setRotation(0);
      setTimeout(() => setRotation(targetRotation), 100);
    }
  };

  return (
    <div className="SpinWheel-container">
      <h2>Spinning to reveal your dosha...</h2>
      <div className="wheel-wrapper">
        <div
          className="SpinWheel"
          ref={wheelRef}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 3s ease-out" : "none",
          }}
        >
          {wheelSections.map((section, index) => (
            <div
              key={index}
              className="wheel-section"
              style={{
                transform: `rotate(${index * sectionAngle}deg)`,
              }}
            >
              <span
                className="section-text"
                style={{
                  transform: `rotate(${sectionAngle / 2}deg) translate(0, -50%)`, // Adjust rotation and position
                }}
              >
                {section}
              </span>
            </div>
          ))}
        </div>
        <div className="wheel-pointer">▼</div> {/* Pointer indicating result */}
      </div>
      {!isSpinning && (
        <button className="spin-btn" onClick={startSpin}>
          Spin the Wheel
        </button>
      )}
    </div>
  );
}

export default SpinWheel;










