import { LOG_FLR, LOG_IN } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOG_IN,
    payload: token
  };
};

export const loginFailure = (err) => {
  return {
    type: LOG_FLR,
    payload: err
  };
};
