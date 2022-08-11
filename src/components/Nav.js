import { Outlet } from "react-router-dom";
import { AuthStatus } from "../components/auth";
import { StyledFontAwesomeIcon } from "./styles/icons";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ContainerColumn, ContainerMenuHead } from "./styles/containers";

export function Nav({ title, auth, setAuth }) {
  return (
    <ContainerMenuHead>
      <div>
        <StyledFontAwesomeIcon icon={faArrowRightArrowLeft} />
        <h1>{title}</h1>
      </div>

      <ContainerColumn>
        <StyledFontAwesomeIcon icon={faEnvelope} />
        <StyledFontAwesomeIcon icon={faBell} />
        <AuthStatus auth={auth} setAuth={setAuth} />
        <Outlet />
      </ContainerColumn>
    </ContainerMenuHead>
  );
}
