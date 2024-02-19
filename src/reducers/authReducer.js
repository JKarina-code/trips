import types from "./types";
const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return state;

    default:
      return state;
  }
};

export default authReducer;
