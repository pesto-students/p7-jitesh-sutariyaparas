import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStep, resetStep } from "../Redux/actions";
import "./stepCounter.css";

const StepCounter = () => {
  const dispatch = useDispatch();
  const stepCounter = useSelector((state) => state.stepCount);

  const counterAddStep = () => {
    dispatch(addStep());
  };

  const counterReset = () => {
    dispatch(resetStep());
  };

  return (
    <div class="step-counter">
      <div>stepCounter</div>
      <h1>You have walked {stepCounter} steps today!</h1>
      <button onClick={counterAddStep}>Add Step</button>
      <button onClick={counterReset}>Reset Step</button>
    </div>
  );
};
export { StepCounter };
