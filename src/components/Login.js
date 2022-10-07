import { useState } from "react";

import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { myContext } from "../App";
import { types } from "../reducerLogin/ReducerLogin";
import { loginUser } from "../service/api-login";
import { FormLogin, NavLink } from "../styles/style";
import { DefaultButton } from "../styles/style-buttons";

export function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const { auth, dispatchAuth } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth);

  async function handleSubmit(e) {
    e.preventDefault();

    const token = await loginUser({
      email,
      password,
    });

    if (token) {
      dispatchAuth({
        type: types.login,
        value: token,
  
      });

      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      dispatchAuth({ type: types.logout, token: "" });
    }
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label htmlFor="email">Email:</label>
      <input
        className="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password: </label>
      <input
        className="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <DefaultButton type="submit" className="login">
        Login
      </DefaultButton>

      <p>Email: Veda76@hotmail.com</p>
      <p>Password: 12345</p>
      <NavLink to={"/"}>Dashboard</NavLink>
    </FormLogin>
  );
}
