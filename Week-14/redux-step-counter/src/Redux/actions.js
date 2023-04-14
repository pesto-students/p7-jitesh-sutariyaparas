const addStep = () => {
  console.log("ADD STEP ACTION CALL")
  return {
    type: "ADD_STEP",
  };
};

const resetStep = () => {
  console.log("RESET STEP ACTION CALL")
  return {
    type: "REST_STEP",
  };
};

export { addStep, resetStep };
