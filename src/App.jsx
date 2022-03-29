import { useState, useEffect } from "react";
import buttonImg from "./assets/images/icon-dice.svg";
import desktopImg from "./assets/images/pattern-divider-desktop.svg";
import mobileImg from "./assets/images/pattern-divider-mobile.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <h3>advice #{advice.id}</h3>
        <h2>"{advice.advice}"</h2>
      </div>
      <div className="desktop-divider">
        <img src={desktopImg} />
      </div>
      <div className="mobile-divider">
        <img src={mobileImg} />
      </div>
      <div className="btn" onClick={() => getAdvice()}>
        <img src={buttonImg}></img>
      </div>
    </div>
  );
}

export default App;
