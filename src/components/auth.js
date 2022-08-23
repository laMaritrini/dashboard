import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "./styles/icons";
import { useContext } from "react";
import { myContext, types } from "../App";

export function AuthStatus() {
  const { auth, dispatchAuth } = useContext(myContext);
  let navigate = useNavigate();

  if (!auth.isAuth) {
    return <p>You are not logged in.</p>;
  }

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
export function RequireAuth(props) {
  const { auth, dispatchAuth } = useContext(myContext);
  let location = useLocation();

  if (!auth.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
