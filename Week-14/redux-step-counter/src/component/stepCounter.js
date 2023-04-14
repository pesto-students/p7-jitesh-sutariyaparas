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
      <h1>You have walked {stepCounter} steps today!</h1>
      <div>
        <button class="step-btn" onClick={counterAddStep}>
          ADD A STEP
        </button>
      </div>
      <div>
        <button class="reset-btn" onClick={counterReset}>
          RESET STEPS
        </button>
      </div>
    </div>
  );
};
export { StepCounter };
