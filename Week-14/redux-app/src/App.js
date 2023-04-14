import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLight } from "./Redux/actions";

function App() {
  const dispatch = useDispatch();
  const lightStatus = useSelector((state) => state.lightStatus);

  const handleButtonClick = () => {
    dispatch(toggleLight());
  };

  return (
    <div>
      <h1>Light is {lightStatus ? "on" : "off"}</h1>
      <button onClick={handleButtonClick}>Toggle light</button>
    </div>
  );
}

export default App;
