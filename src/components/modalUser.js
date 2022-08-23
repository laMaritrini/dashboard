import { useContext } from "react";
import { myContext, types } from "../App";
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
          placeholder="tim"
          type="text"
          value={auth.username}
          onChange={(e) =>
            dispatchAuth({ type: types.changeUsername, value: e.target.value })
          }
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          className="email"
          name="email"
          placeholder="tim@mail.com"
          type="email"
          value={auth.email}
          onChange={(e) =>
            dispatchAuth({ type: types.changeEmail, value: e.target.value })
          }
        />
      </FormModal>
      <DefaultButton onClick={handleClose}>Save</DefaultButton>
    </Modal>
  );
}
