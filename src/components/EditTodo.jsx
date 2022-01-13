import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updTodoLoading,
  updTodoError,
  addTodoSuccess,
  updTodoSuccess
} from "../features/Todos/action";
export const EditTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const editTodo = (param) => {
    console.log(param);
    dispatch(updTodoLoading());

    fetch(`http://localhost:8000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: false, title: text })
    })
      .then((d) => d.json())
      .then((res) => {
        // dispatch(addtodo(text));
        dispatch(addTodoSuccess(res));
        alert(`${res.title} changed succesfully`);
      })
      .catch((err) => {
        dispatch(updTodoError(err));
      });
  };
  return (
    <>
      <input
        style={{
          marginTop: "20px",
          padding: "10px",
          borderRadius: "5px",
          border: "none"
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Edit-Todo"
      />

      <button
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          padding: "10px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={() => {
          editTodo(id);
        }}
      >
        Edit Todo
      </button>
    </>
  );
};
