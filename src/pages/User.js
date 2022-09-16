import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Nav } from "../components/Nav";
import { NavLateral } from "../components/Nav-lateral";
import { UpdateUser } from "../features/users/UpdateUser";
import {
  fetchUser,
  removeUser,
  selectStateDetail,
} from "../features/users/usersSlice";
import { ContainerColumn, ContainerPage } from "../styles/containers";
import {
  ButtonDelete,
  ButtonEdit,
  ContainerDetail,
  ItemsDetail,
  LinkDetail,
  PhotoDetail,
  RoomBlock,
  StatusUserDetail,
  TitleDetail,
} from "../styles/detail-page";

export function User({ open, setOpen }) {
  const { id } = useParams();
  const user = useSelector(selectStateDetail);
  const [edit, setEdit] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const handleRemove = () => {
    dispatch(removeUser(id));
  };
  const handleOpen = (room) => {
    setEdit(room);
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);
  const showPassword = () => {
    let input = document.getElementById("input");

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <ContainerPage>
      <NavLateral open={open} setOpen={setOpen} />
      <ContainerColumn>
        <Nav title="User Detail" open={open} setOpen={setOpen} />
        <ContainerDetail>
          <RoomBlock>
            <PhotoDetail src={user.photo} alt="" />
            <div>
              <ItemsDetail>Full Name </ItemsDetail>
              <TitleDetail>{user.full_name}</TitleDetail>
              <ItemsDetail>Work Position </ItemsDetail>
              <h4>{user.job_title}</h4>
            </div>
          </RoomBlock>
          <ItemsDetail>Email </ItemsDetail>
          <p>{user.email}</p>
          <ItemsDetail>Phone Number </ItemsDetail>
          <p>{user.phone_number}</p>
          <ItemsDetail>Start Date </ItemsDetail>
          <p>{user.start_date}</p>
          <ItemsDetail>Description </ItemsDetail>
          <p>{user.working_functions}</p>
          <ItemsDetail>Password </ItemsDetail>
          <input
            type="password"
            id="input"
            value={user.password}
            name="password"
          />
          <br />
          <input type="checkbox" name="checkbox" onClick={showPassword} />
          Show Password
          <ItemsDetail>Status </ItemsDetail>
          <StatusUserDetail status={user.working_situation}>
            {user.working_situation}
          </StatusUserDetail>
          <div>
            <ButtonEdit
              onClick={() => {
                handleOpen(user);
              }}
            >
              Edit
            </ButtonEdit>
            <ButtonDelete
              onClick={() => {
                handleRemove(user.id);
              }}
            >
              🗑️
            </ButtonDelete>
            <UpdateUser
              openModal={openModal}
              edit={edit}
              handleClose={handleClose}
            />
          </div>
          <LinkDetail to="/users">← Back to Users List</LinkDetail>
        </ContainerDetail>
      </ContainerColumn>
    </ContainerPage>
  );
}
