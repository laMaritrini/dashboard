import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { myContext, types } from "../App";
import { FormLogin, NavLink } from "./styles/style";
import { DefaultButton } from "./styles/style-buttons";

export function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const { auth, dispatchAuth } = useContext(myContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      auth.username === "tim" &&
      auth.email === "tim@mail.com" &&
      auth.password === "123"
    ) {
      dispatchAuth({ type: types.login });
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      dispatchAuth({ type: types.logout });
    }
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username:</label>
      <input
        className="username"
        name="username"
        placeholder="tim"
        type="text"
        value={auth.username}
        onChange={(e) =>
          dispatchAuth({ type: types.username, value: e.target.value })
        }
      />

      <label htmlFor="email">Email:</label>
      <input
        className="email"
        name="email"
        placeholder="tim@mail.com"
        type="email"
        value={auth.email}
        onChange={(e) =>
          dispatchAuth({ type: types.email, value: e.target.value })
        }
      />

      <label htmlFor="password">Password: </label>
      <input
        className="password"
        name="password"
        type="password"
        placeholder="123"
        value={auth.password}
        onChange={(e) =>
          dispatchAuth({ type: types.password, value: e.target.value })
        }
      />

      <DefaultButton type="submit" className="login">
        Login
      </DefaultButton>
      <NavLink to={"/"}>Dashboard</NavLink>
    </FormLogin>
  );
}
