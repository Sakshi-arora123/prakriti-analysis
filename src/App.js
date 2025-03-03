import "./App.css";
import { useState, useEffect, useRef } from "react";
import SplashScreen from "./SplashScreen";
import Welcome from "./Welcome";
import AvatarSelection from "./AvatarSelection";
import Questions from "./Questions";
import SpinWheel from "./SpinWheel";
import Result from "./Result";

function App() {
  const [appState, setAppState] = useState("splash");
  const [avatar, setAvatar] = useState(null);
  const [results, setResults] = useState([]);
  const [finalDosha, setFinalDosha] = useState(null);

  const clickSoundRef = useRef(new Audio("/click.wav"));

  const playClickSound = () => {
    const audio = clickSoundRef.current;
    audio.currentTime = 0;
    audio.play();
  };

  const handleSplashClick = () => {
    playClickSound();
    setAppState("welcome");
  };

  useEffect(() => {
    const handleButtonClick = (event) => {
      if (event.target.tagName === "BUTTON") {
        playClickSound();
      }
    };

    document.addEventListener("click", handleButtonClick);
    return () => {
      document.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <div className="App">
      {appState === "splash" && <SplashScreen onClick={handleSplashClick} />}
      {appState === "welcome" && <Welcome setAppState={setAppState} />}
      {appState === "avatar" && <AvatarSelection setAppState={setAppState} setAvatar={setAvatar} />}
      {appState === "questions" && <Questions setAppState={setAppState} setResults={setResults} />}
      {appState === "spin" && <SpinWheel results={results} setAppState={setAppState} setFinalDosha={setFinalDosha} />}
      {/* {appState === "result" && <Result results={results} avatar={avatar} finalDosha={finalDosha} />} */}
      {appState === "result" && (
  <Result
    dosha={finalDosha}
    results={results}
    avatar={avatar}
  />
)}
    </div>
  );
}

export default App;

