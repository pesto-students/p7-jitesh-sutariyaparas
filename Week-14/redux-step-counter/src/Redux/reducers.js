const initialState = {
  stepCount: 0,
};

const stepCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STEP":
      return {
        ...state,
        stepCount: state.stepCount + 1,
      };
    case "REST_STEP":
      return {
        ...state,
        stepCount: 0,
      };
    default:
      return state;
  }
};

export default stepCounterReducer;
