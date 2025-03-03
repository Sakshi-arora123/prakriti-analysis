import React, { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function SpinWheel({ results, setAppState, setFinalDosha }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  // Define the possible Dosha results in order
  const wheelSections = useMemo(() => ["Vata", "Pitta", "Kapha", "Vatapitta", "Pittakapha", "Vatakapha"], []);
  const sectionAngle = 360 / wheelSections.length;
  const halfSectionAngle = sectionAngle / 2; // ✅ Adjust for centering

  // Function to determine dosha from quiz results
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

  // ✅ Compute the exact target rotation to stop at the center of the correct Dosha
  const targetRotation = useMemo(() => {
    const index = wheelSections.indexOf(dosha);
    if (index === -1) return 0; // Fallback if dosha is not found

    const baseRotation = 360 * 3; // Three full spins
    const exactStopAngle = 360 - (index * sectionAngle) - halfSectionAngle; // ✅ Adjusted to center the selected dosha
    return baseRotation + exactStopAngle;
  }, [dosha, sectionAngle, halfSectionAngle, wheelSections]);

  useEffect(() => {
    if (!isSpinning) return;

    // ✅ Set rotation to ensure exact stop position
    setTimeout(() => {
      setRotation(targetRotation);
    }, 100); // Small delay before spinning

    setTimeout(() => {
      setFinalDosha(dosha);
      setAppState("result");
    }, 3500); // Transition to result after spin completes
  }, [isSpinning, targetRotation, setFinalDosha, setAppState, dosha]);

  useEffect(() => {
    setIsSpinning(true); // ✅ Automatically start spinning when the component loads
  }, []);

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
              <span className="section-text">{section}</span>
            </div>
          ))}
        </div>
        <div className="wheel-pointer">▼</div> {/* Pointer indicating result */}
      </div>
    </div>
  );
}

export default SpinWheel;
