/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./count";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handeClick() {
    alert("Button Clicked");
  }

  const handeClick2 = () => {
    alert("Click Button 2");
  };

  function addition(num) {
    alert(num + 10);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handeClick}>Click Me</button>
      <button onClick={handeClick2}>Click 2</button>
      <button onClick={() => addition(3)}>Click 3</button>
      <button onClick={() => alert("Vatija aiche khuiste nachi ")}>
        Click 4
      </button>
    </>
  );
}

export default App;
