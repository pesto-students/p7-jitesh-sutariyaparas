import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLight } from "./Redux/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const lightStatus = useSelector((state) => state.lightStatus);

  const handleButtonClick = () => {
    dispatch(toggleLight());
  };

  return (
    <div class="App">
      <h1>Light is {lightStatus ? "ON" : "OFF"}</h1>
      <button onClick={handleButtonClick}>Toggle light</button>
      <div class={`room ${lightStatus ? "on" : "off"}`}></div>
    </div>
  );
}

export default App;
