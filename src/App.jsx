import { useState, useEffect } from "react";
import logo from "./logo.svg";
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
    <div className="App">
      <h1>{advice.id}</h1>
      <h2>{advice.advice}</h2>
      <button onClick={() => getAdvice()}>new</button>
    </div>
  );
}

export default App;
