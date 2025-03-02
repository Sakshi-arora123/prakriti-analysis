import React from "react";
import "./App.css";
import Vata from "./Vata";
import Pitta from "./Pitta";
import Kapha from "./Kapha";
import Pittakapha from "./Pittakapha";
import Vatakapha from "./Vatakapha";
import Vatapitta from "./Vatapitta";

function Result({ finalDosha }) {
  let doshaComponent;

  switch (finalDosha) {
    case "Vata":
      doshaComponent = <Vata />;
      break;
    case "Pitta":
      doshaComponent = <Pitta />;
      break;
    case "Kapha":
      doshaComponent = <Kapha />;
      break;
    case "Vatapitta":
      doshaComponent = <Vatapitta />;
      break;
    case "Pittakapha":
      doshaComponent = <Pittakapha />;
      break;
    case "Vatakapha":
      doshaComponent = <Vatakapha />;
      break;
    default:
      doshaComponent = <p>No Dosha Found</p>;
  }

  return (
    <div className="Result">
      <h1>Your dosha is likely to be...</h1>
      {doshaComponent}
    </div>
  );
}

export default Result;

