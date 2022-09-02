import { useContext } from "react";
import { myContext } from "../App";
import { types } from "../reducerLogin/ReducerLogin";
import { FormModal, Modal, TitleModal } from "../styles/modal";
import { DefaultButton } from "../styles/style-buttons";

export function ModalUser({ openModal, handleClose }) {
  const { auth, dispatchAuth } = useContext(myContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
