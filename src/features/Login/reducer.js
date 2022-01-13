import { loadData, saveData } from "../../utils/localStorage";
import { LOG_FLR, LOG_IN } from "./actionTypes";

// let token =
let token = loadData("token");

let init = {
  isAuth: token ? true : false,
  token: token || ""
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      // console.log("payload",payload)
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case LOG_FLR:
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};
