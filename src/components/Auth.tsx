/* eslint-disable no-unused-vars */
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { StyledFontAwesomeIcon } from "../styles/icons";
import { useContext } from "react";
import { myContext } from "../App";
import { types } from "../reducerLogin/ReducerLogin";

export function AuthStatus() {
  const { auth, dispatchAuth } = useContext(myContext);
  let navigate = useNavigate();

  if (auth.isAuth) {
    return (
      <StyledFontAwesomeIcon
        className="logout"
        icon={faArrowRightFromBracket}
        onClick={() => {
          dispatchAuth({ type: types.logout });

          navigate("/");
        }}
      />
    );
  }
}
export function RequireAuth(props: any) {
  const { auth } = useContext(myContext);

  let location = useLocation();

  if (!auth.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
