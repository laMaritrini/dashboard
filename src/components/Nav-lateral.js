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
import { useContext, useEffect } from "react";
import { myContext } from "../App";
import { useState } from "react";
import { EditUser } from "./EditUser";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectStateUsers } from "../features/users/usersSlice";

export function NavLateral({ open }) {
  const users = useSelector(selectStateUsers);
  const dispatch = useDispatch();
  const { auth } = useContext(myContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  // if (!users) return null;
  // let userLogged = users.find((user) => user.email === auth.email);

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
          {/* <Image src={userLogged.photo} alt="avatar" />

          <UserName>{userLogged.full_name}</UserName> */}
          <UserEmail>{auth.email}</UserEmail>
          <EditUser
            openModal={openModal}
            handleClose={handleClose}
            users={users}
          ></EditUser>
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
