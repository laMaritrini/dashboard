import { useLocation, Navigate, useNavigate } from "react-router-dom";

export function AuthStatus(props) {
  let navigate = useNavigate();

  if (!props.auth) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          props.setAuth(false);

          navigate("/");
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export function RequireAuth(props) {
  let location = useLocation();

  if (!props.auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
