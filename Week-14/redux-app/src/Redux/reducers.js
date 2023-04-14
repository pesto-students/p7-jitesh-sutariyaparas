const initialState = {
    lightStatus: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_LIGHT':
        return {
          ...state,
          lightStatus: !state.lightStatus,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  