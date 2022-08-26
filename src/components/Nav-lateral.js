/* eslint-disable no-unused-vars */
import { Footer, NavLink, UserEmail, UserName } from "../styles/style";
import {
  ContainerMenuLateral,
  LinkContainer,
  UserContainer,
} from "../styles/containers";
import { DefaultButton } from "../styles/style-buttons";
import { Image, Logo } from "../styles/style-image";
import { MdOutlineDashboard } from "react-icons/md";
import { BiKey } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { TbPuzzle } from "react-icons/tb";

import travl from "../travl.png";
import { useContext } from "react";
import { myContext } from "../App";
import { useState } from "react";
import { ModalUser } from "./EditUser";

export function NavLateral({ open, setOpen }) {
  const { auth, dispatchAuth } = useContext(myContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <ContainerMenuLateral open={open} className="container-lateral-menu">
      <div>
        <div>
          <Logo src={travl} alt="logo" width="200px" />
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
            <NavLink to="/contacts">Contact</NavLink>
          </LinkContainer>
          <LinkContainer>
            <FiUser />
            <NavLink to="/users">Users</NavLink>
          </LinkContainer>
        </nav>
        <UserContainer>
          <Image
            src="https://imgs.search.brave.com/Ax4LlK9i2UZ6euTsr24B4d7cN0ygtNLrDZWJIleIBjI/rs:fit:514:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/QnBnVUpoVHQ4Y0ky/VjA1LVVmNTNBSGFH/MSZwaWQ9QXBp"
            alt="avatar"
          />
          <UserName>{auth.username}</UserName>
          <UserEmail>{auth.email}</UserEmail>
          <ModalUser
            openModal={openModal}
            handleClose={handleClose}
          ></ModalUser>
          <DefaultButton onClick={handleOpen}>Edit</DefaultButton>
        </UserContainer>
      </div>
      <footer>
        <Footer>Travl Hotel Admin Dashboard</Footer>
        <p>© 2020 All Rights Reserved</p>
      </footer>
    </ContainerMenuLateral>
  );
}
