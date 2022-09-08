import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { myContext } from "../App";
import { MockUsers } from "../data/mockUsers";
import { types } from "../reducerLogin/ReducerLogin";
import { FormLogin, NavLink } from "../styles/style";
import { DefaultButton } from "../styles/style-buttons";

export function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const { auth, dispatchAuth } = useContext(myContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(auth);
  function handleSubmit(e) {
    e.preventDefault();
    const dataInput = MockUsers.find(
      (item) => item.password === input.password && item.email === input.email
    );
    if (dataInput) {
      dispatchAuth({
        type: types.login,
        value: {
          email: dataInput.email,
        },
      });
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      dispatchAuth({ type: types.logout });
    }
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <FormLogin onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label htmlFor="email">Email:</label>
      <input
        className="email"
        name="email"
        placeholder="email"
        value={input.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password: </label>
      <input
        className="password"
        name="password"
        type="password"
        value={input.password}
        onChange={handleChange}
      />

      <DefaultButton type="submit" className="login">
        Login
      </DefaultButton>

      <p>Email: Dorothy79@hotmail.com</p>
      <p>Password: FRG3T28Y88H8W6GRR</p>
      <NavLink to={"/"}>Dashboard</NavLink>
    </FormLogin>
  );
}
