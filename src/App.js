import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let timer = new Date().toLocaleString();
  const [ctime, setctime] = useState(timer);
  const updatetime = () => {
    timer = new Date().toLocaleString();
    setctime(timer);
  };
  setInterval(updatetime, 1000);
  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
