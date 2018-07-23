import { handleActions } from "redux-actions";

import { inputChange } from "../actions";

const defaultState = {
  username: "",
  password: "",
  isAdmin: false
};

const userReducer = handleActions(
  {
    [inputChange]: (state, payload) => ({
      ...state
    })
  },
  defaultState
);

export default userReducer;
