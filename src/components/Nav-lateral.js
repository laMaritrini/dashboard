import { Footer, NavLink, UserEmail, UserName } from "./styles/style";
import {
  ContainerMenuLateral,
  LinkContainer,
  UserContainer,
} from "./styles/containers";
import { DefaultButton } from "./styles/style-buttons";
import { Image, Logo } from "./styles/style-image";
import { MdOutlineDashboard } from "react-icons/md";
import { BiKey } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { TbPuzzle } from "react-icons/tb";

import travl from "../travl.png";

export function NavLateral({ open, setOpen }) {
  return (
    <ContainerMenuLateral open={open} className="container-lateral-menu">
      <div>
        <div>
          <Logo src={travl} alt="logo" width="250px" />
        </div>
        <nav>
          <LinkContainer>
            <MdOutlineDashboard />
            <NavLink to="/">Dashboard</NavLink>
          </LinkContainer>
          <LinkContainer>
            <AiOutlineSchedule />
            <NavLink to="/bookings">Bookings</NavLink>
          </LinkContainer>
          <LinkContainer>
            <BiKey style={{ transform: "rotate(90deg)" }} />
            <NavLink to="/rooms">Rooms</NavLink>
          </LinkContainer>
          <LinkContainer>
            <TbPuzzle />
            <NavLink to="/contact">Contact</NavLink>
          </LinkContainer>
          <LinkContainer>
            <FiUser />
            <NavLink to="/users">Guest</NavLink>
          </LinkContainer>
        </nav>
        <UserContainer>
          <Image src="" alt="" />
          <UserName>William Johanson</UserName>
          <UserEmail>williamjohn@mail.com</UserEmail>
          <DefaultButton>Edit</DefaultButton>
        </UserContainer>
      </div>
      <footer>
        <Footer>Travl Hotel Admin Dashboard</Footer>
        <p>© 2020 All Rights Reserved</p>
      </footer>
    </ContainerMenuLateral>
  );
}
