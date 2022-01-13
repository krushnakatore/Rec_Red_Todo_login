import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "#000B49",

        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        marginTop: "-8px",
        marginLeft: "-8px"
      }}
    >
      {" "}
      <Link
        to="/"
        style={{
          textDecoration: "none"
        }}
      >
        Home
      </Link>{" "}
      <Link
        to="/login"
        style={{
          textDecoration: "none"
        }}
      >
        Log in
      </Link>
      <Link
        to="/todo"
        style={{
          textDecoration: "none"
        }}
      >
        Todo App
      </Link>
      <Link
        to="/edit/:id"
        style={{
          textDecoration: "none"
        }}
      >
        Edit Todo
      </Link>
    </div>
  );
};
