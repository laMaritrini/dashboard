import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export function Login(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "tim" && password === "123") {
      props.setAuth(true);
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      props.setAuth(false);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to={"/"}>Dashboard</Link>
    </div>
  );
}
