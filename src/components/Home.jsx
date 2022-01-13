import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h3>Welcome to Home Page</h3>
      <p>...Where You can store your TODO's</p>
      <Link to="/todo">
        <button
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
        >
          Go to App
        </button>
      </Link>
    </div>
  );
};
