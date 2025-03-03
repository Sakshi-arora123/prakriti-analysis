import React, { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function SpinWheel({ results, setAppState, setFinalDosha }) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  // ✅ Store wheel sections in useMemo to prevent re-renders
  const wheelSections = useMemo(() => ["Pitta", "Vata", "Kapha", "Vatapitta", "Pittakapha", "Vatakapha"], []);
  const sectionAngle = 360 / wheelSections.length;

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

  // ✅ Determine target rotation for the dosha result
  const targetRotation = useMemo(() => {
    const index = wheelSections.indexOf(dosha);
    return index !== -1 ? index * sectionAngle + 360 * 3 : 0; // 3 full spins before stopping
  }, [dosha, sectionAngle, wheelSections]);

  useEffect(() => {
    if (!isSpinning) return;

    // ✅ Reset rotation before spinning to ensure smooth animation
    setRotation(0);

    setTimeout(() => {
      setRotation(targetRotation);
    }, 100); // Small delay before spinning

    setTimeout(() => {
      setFinalDosha(dosha);
      setAppState("result");
    }, 3500); // Transition to result after spin completes
  }, [isSpinning, targetRotation, setFinalDosha, setAppState, dosha]);

  useEffect(() => {
    // ✅ Automatically start spinning when the component loads
    setIsSpinning(true);
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













