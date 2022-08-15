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
import { IconLateral } from "./styles/icons";
import travl from "../travl.png";


export function NavLateral({ selected }) {

  
  return (
    <ContainerMenuLateral className="container-lateral-menu">
      <div>
        <div>
          <Logo src={travl} alt="logo" />
        </div>
        <nav>
          <LinkContainer>
            <IconLateral>
              <MdOutlineDashboard />
            </IconLateral>
            <NavLink to="/">Dashboard</NavLink>
          </LinkContainer>
          <LinkContainer>
            <IconLateral>
              <AiOutlineSchedule />
            </IconLateral>
            <NavLink to="/bookings">Bookings</NavLink>
          </LinkContainer>
          <LinkContainer>
            <IconLateral>
              <BiKey style={{ transform: "rotate(90deg)" }} />
            </IconLateral>
            <NavLink to="/rooms">Rooms</NavLink>
          </LinkContainer>
          <LinkContainer>
            <IconLateral>
              <TbPuzzle />
            </IconLateral>
            <NavLink to="/contact">Contact</NavLink>
          </LinkContainer>
          <LinkContainer>
            <IconLateral>
              <FiUser />
            </IconLateral>
            <NavLink to="/users">Guest</NavLink>
          </LinkContainer>
        </nav>

        <UserContainer >
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
