import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { UpdateUser } from "../features/users/UpdateUser";
import {
  fetchUser,
  removeUser,
  selectStateDetail,
} from "../features/users/usersSlice";

export function User() {
  const { id } = useParams();
  const user = useSelector(selectStateDetail);
  const [edit, setEdit] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const handleRemove = () => {
    dispatch(removeUser(id));
  };
  const handleOpen = (room) => {
    setEdit(room);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const showPassword = () => {
    let input = document.getElementById("input");
    // eslint-disable-next-line no-cond-assign
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <div>
      <h3>User Detail </h3>
      <img src={user.photo} alt="" />
      <p>Full Name: {user.full_name}</p>
      <p>Work Position: {user.job_title}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phone_number}</p>
      <p>Start Date: {user.start_date}</p>
      <p>Description: {user.working_functions}</p>
      <span>Password: </span>
      <input type="password" id="input" value={user.password} name="password" />
      <br />
      <input
        type="checkbox"
        name="checkbox"
        onClick={showPassword}
        value="checkbox"
      />
      Show Password
      <p>Status: {user.working_situation}</p>
      <button
        onClick={() => {
          handleRemove(user.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleOpen(user);
        }}
      >
        Edit
      </button>
      <UpdateUser open={open} edit={edit} handleClose={handleClose} />
      <Link to="/users">Back to Users List</Link>
    </div>
  );
}
