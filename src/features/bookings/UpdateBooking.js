import { useEffect, useState } from "react";
import { updateBooking } from "./BookingsSlice";
import { useDispatch } from "react-redux";
import { CloseButton } from "../../styles/style-buttons";

export function UpdateBooking({ edit, open, handleClose }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({
    full_name: "",
    order_date: "",
    check_in: "",
    check_out: "",
    special_request: "",
    room_type: {
      type: "",
      number: "",
    },
    status: "",
  });
  useEffect(() => {
    if (edit) {
      setEditForm(edit);
    } else {
      setEditForm("");
    }
  }, [edit]);

  if (!open) {
    return null;
  }
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBooking({ id: edit.id, editForm }));
    setEditForm({
      full_name: "",
      order_date: "",
      check_in: "",
      check_out: "",
      special_request: "",
      room_type: {
        type: "",
        number: "",
      },
      status: "",
    });
    handleClose();
  };

  return (
    <form action="">
      <CloseButton onClick={handleClose}>X</CloseButton>
      <div>
        <label htmlFor="full_name">Full name:</label>
        <input
          type="text"
          value={editForm.full_name}
          name="full_name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="order_date">Order date:</label>
        <input
          type="date"
          value={editForm.order_date}
          name="order_date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="check_in">Check In:</label>
        <input
          type="date"
          value={editForm.check_in}
          name="check_in"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="check_out">Check Out:</label>
        <input
          type="date"
          value={editForm.check_out}
          name="check_out"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="special_request">Special Request:</label>
        <input
          type="text "
          value={editForm.special_request}
          name="special_request"
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <label htmlFor="type">Room Type:</label>
        <input
          type="text"
          value={editForm.room_type.type}
          name="type"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="number">Room Number:</label>
        <input
          type="number"
          value={editForm.room_type.number}
          name="number"
          onChange={handleChange}
        />
      </div> */}
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          value={editForm.status}
          name="status"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
}
