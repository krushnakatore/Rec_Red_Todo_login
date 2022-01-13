import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../features/Login/action";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    let payload = { email, password };
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
        // setToken(res.token);
      });
    // setIsauth(!isAuth);
  };
  if (isAuth) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>;
        </Routes>
      </>
    );
  }
  return (
    <div>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="text"
          placeholder="Enter email-address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="submit"
        />
      </form>
    </div>
  );
};
