import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  DEL_TODO_SUCCESS,
  UPD_TODO_ERROR,
  UPD_TODO_LOADING,
  UPD_TODO_SUCCESS
} from "./actionTypes";

// export const addtodo = (data) => ({
//   type: ADD_TODO,
//   payload: data
// });

//1.ADDD
export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data
  };
};
export const addTodoError = () => {
  return {
    type: ADD_TODO_ERROR
  };
};

//2.GET

export const getTodoLoading = (data) => {
  return {
    type: GET_TODO_LOADING,
    payload: data
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data
  };
};

export const getTodoError = (data) => {
  return {
    type: GET_TODO_ERROR,
    payload: data
  };
};

//3.UPDATE

export const updTodoLoading = (data) => {
  return {
    type: UPD_TODO_LOADING,
    payload: data
  };
};

export const updTodoSuccess = (data) => {
  return {
    type: UPD_TODO_SUCCESS,
    payload: data
  };
};

export const updTodoError = (data) => {
  return {
    type: UPD_TODO_ERROR,
    payload: data
  };
};

//4.DELETE
export const delTodoSuccess = (id) => ({
  type: UPD_TODO_SUCCESS,
  payload: id
});
