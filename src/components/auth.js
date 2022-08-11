import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "./styles/icons";

export function AuthStatus(props) {
  let navigate = useNavigate();

  if (!props.auth) {
    return <p>You are not logged in.</p>;
  }

  return (
    <StyledFontAwesomeIcon
      icon={faArrowRightFromBracket}
      onClick={() => {
        props.setAuth(false);

        navigate("/");
      }}
    />
  );
}
export function RequireAuth(props) {
  let location = useLocation();

  if (!props.auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
