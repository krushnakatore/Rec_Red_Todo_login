import { useEffect, useState } from "react";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess
} from "../features/Todos/action";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Todos = () => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector(
    (state) => ({
      loading: state.app.loading,
      todos: state.app.todos,
      error: state.app.error
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.loading) {
        return true;
      }
      return false;
    }
  );
  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      fetch(`http://localhost:8000/todos`)
        .then((d) => d.json())
        .then((res) => {
          dispatch(getTodoSuccess(res));
          //  console.log("res",res)
        });
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }

  const addTodo = () => {
    dispatch(addTodoLoading());

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: false, title: text })
    })
      .then((d) => d.json())
      .then((res) => {
        // dispatch(addtodo(text));
        dispatch(addTodoSuccess(res));
        getTodos();
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };
  let count = 1;
  const deleteTodo = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ status: false, title: text }),
      headers: {
        "content-type": "application/json"
      }
    }).then((id) => {
      // dispatch(delTodoSuccess(id));
      getTodos();
    });
    count--;
  };
  const handleCheck = () => {
    setFlag(!flag);
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something Went Wrong...</div>
  ) : (
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
        placeholder="Enter-Todo"
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
          addTodo();
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <>
          <div
            style={{
              marginTop: "20px",
              // border: "1px solid black",
              // backgroundColor: "#A267AC",
              padding: "10px",
              borderRadius: "10px"
            }}
            key={e.id}
          >
            {" "}
            {count++}
            {". "}
            <b>{e.title}</b>{" "}
            <button
              style={{
                marginLeft: "20px",
                border: "none",
                borderRadius: "5px",
                padding: "5px"
              }}
              key={e.id}
              onClick={() => deleteTodo(e.id)}
            >
              Remove
            </button>
            <Link to={`/edit/${e.id}`}>
              <button
                style={{
                  marginLeft: "20px",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px"
                }}
              >
                Edit
              </button>
            </Link>
            <button
              style={{
                marginLeft: "20px",
                border: "none",
                borderRadius: "5px",
                padding: "5px"
              }}
              onClick={() => handleCheck()}
            >
              {flag ? "Completed" : "Not-Completed"}
            </button>
          </div>
        </>
      ))}
    </>
  );
};
