import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myContext } from "../App";
import { fetchUsers, selectStateUsers } from "../features/users/usersSlice";
import { types } from "../reducerLogin/ReducerLogin";
import { FormModal, Modal, TitleModal } from "../styles/modal";
import { DefaultButton } from "../styles/style-buttons";

export function EditUser({ openModal, handleClose, users }) {
  const { auth, dispatchAuth } = useContext(myContext);
  // const users = useSelector(selectStateUsers);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let photoUser = users.find((item) => item.email === auth.email);
  if (photoUser) {
    photoUser = photoUser.photo;
  }

  if (!openModal) {
    return null;
  }
  return (
    <Modal>
      <TitleModal>Edit user info</TitleModal>

      <FormModal onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className="username"
          name="username"
          placeholder=""
          type="text"
          value={auth.full_name}
          onChange={(e) =>
            dispatchAuth({ type: types.full_name, value: e.target.value })
          }
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          className="email"
          name="email"
          placeholder=""
          type="email"
          value={auth.email}
          onChange={(e) =>
            dispatchAuth({ type: types.email, value: e.target.value })
          }
        />
      </FormModal>
      <DefaultButton onClick={handleClose}>Save</DefaultButton>
    </Modal>
  );
}
