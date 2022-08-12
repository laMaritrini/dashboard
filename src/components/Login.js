import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { FormLogin, NavLink } from "./styles/style";
import { DefaultButton } from "./styles/style-buttons";

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
    <FormLogin onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Username:
        <input
          name="username"
          placeholder="tim"
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
          placeholder="123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <DefaultButton type="submit">Login</DefaultButton>
      <NavLink to={"/"}>Dashboard</NavLink>
    </FormLogin>
  );
}
