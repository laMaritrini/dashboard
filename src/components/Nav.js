import { Outlet } from "react-router-dom";
import { AuthStatus } from "../components/auth";
import { StyledFontAwesomeIcon } from "./styles/icons";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerRow,
  ContainerMenuHead,
  SectionTitleBar,
} from "./styles/containers";

export function Nav({ title, auth, setAuth }) {
  return (
    <ContainerMenuHead>
      <SectionTitleBar>
        <StyledFontAwesomeIcon icon={faArrowRightArrowLeft} />
        <h2 style={{ padding: "20px", whiteSpace: "nowrap" }}>{title}</h2>
      </SectionTitleBar>

      <ContainerRow>
        <StyledFontAwesomeIcon icon={faEnvelope} />
        <StyledFontAwesomeIcon icon={faBell} />
        <AuthStatus auth={auth} setAuth={setAuth} />
        <Outlet />
      </ContainerRow>
    </ContainerMenuHead>
  );
}
