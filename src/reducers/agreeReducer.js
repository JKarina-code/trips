import types from "./types";

const agreeReducer = (state = [], action) => {
  switch (action.type) {
    case types.contract:
    
      return [
        ...state,
        { situation: action.payload.name, price: action.payload.price },
      ];

    case types.cancel:
      return (
        state.filter((item) => item.situation !== action.payload.name) 
      );

    default:
      return state;
  }
};
export default agreeReducer;
