import "./App.css";
import { useState } from "react";
import SplashScreen from "./SplashScreen"; // Import splash screen
import Welcome from "./Welcome";
import Questions from "./Questions";
import Result from "./Result";

function App() {
  const [appState, setAppState] = useState("splash"); // Start with splash screen
  const [results, setResults] = useState([]);

  // Function to move from splash to welcome when user clicks/touches
  const handleSplashClick = () => {
    setAppState("welcome");
  };

  let output;
  if (appState === "splash") {
    output = <SplashScreen onClick={handleSplashClick} />; // Pass click handler
  } else if (appState === "welcome") {
    output = <Welcome setAppState={setAppState} />;
  } else if (appState === "questions") {
    output = <Questions setAppState={setAppState} setResults={setResults} />;
  } else {
    output = <Result results={results} />;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      {output}
    </div>
  );
}

export default App;

