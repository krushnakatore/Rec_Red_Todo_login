import { Routes, Route, Link } from "react-router-dom";
import { EditTodo } from "../components/EditTodo";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { Todos } from "../components/Todos";
import { useSelector } from "react-redux";
export const Routesfor = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Navbar />
      {!isAuth ? (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Login />}></Route>
          <Route path="/edit/:id" element={<Login />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
          <Route path="/todo" element={<Todos />}></Route>
          <Route path="/edit/:id" element={<EditTodo />}></Route>
        </Routes>
      )}
    </>
  );
};
