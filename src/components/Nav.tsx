import * as React from "react";
import { Outlet } from "react-router-dom";
import { AuthStatus } from "./Auth";
import { StyledFontAwesomeIcon } from "../styles/icons";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerRow,
  ContainerMenuHead,
  SectionTitleBar,
} from "../styles/containers";

export function Nav({ title, open, setOpen }) {
  return (
    <ContainerMenuHead>
      <SectionTitleBar>
        <StyledFontAwesomeIcon
          icon={faArrowRightArrowLeft}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <h2 style={{ padding: "20px", whiteSpace: "nowrap" }}>{title}</h2>
      </SectionTitleBar>

      <ContainerRow>
        <StyledFontAwesomeIcon icon={faEnvelope} />
        <StyledFontAwesomeIcon icon={faBell} />
        <AuthStatus />
        <Outlet />
      </ContainerRow>
    </ContainerMenuHead>
  );
}
