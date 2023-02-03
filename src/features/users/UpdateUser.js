import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";

import { updateUser } from "./UsersSlice";

export function UpdateUser({ user, edit, openModal, handleClose }) {
  const dispatch = useDispatch();

  const [editForm, setEditForm] = useState({
    photo: "",
    full_name: "",
    job_title: "",
    email: "",
    working_functions: "",
    phone_number: "",
    start_date: "",
    working_situation: "",
    password: "",
  });
  useEffect(() => {
    if (edit) {
      setEditForm(edit);
    } else {
      setEditForm("");
    }
  }, [edit]);

  if (!openModal) {
    return null;
  }

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditForm(editForm);
    dispatch(updateUser({ id: edit._id, data: editForm }));
    handleClose();
  };

  console.log(editForm, "editForm");
  return (
    <BookingModal>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <TitleModal>Edit user info</TitleModal>
      <FormBooking>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            value={editForm.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            value={editForm.full_name}
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="job_title">Work Position:</label>

          <select
            value={editForm.job_title}
            type="text"
            name="job_title"
            id="job_title"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="Manager">Manager</option>
            <option value="Reception">Reception</option>
            <option value="Room Service">Room Service</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={editForm.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="working_functions">Descriptions:</label>
          <input
            type="text "
            value={editForm.working_functions}
            name="working_functions"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            value={editForm.phone_number}
            name="phone_number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date:</label>
          <input
            type="date"
            value={editForm.start_date}
            name="start_date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="working_situation">Working status:</label>
          <select
            value={editForm.working_situation}
            type="text"
            name="working_situation"
            id="working_situation"
            onChange={handleChange}
          >
            <option value="">Select One...</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={editForm.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <DefaultButton onClick={handleSubmit}>Save</DefaultButton>
      </FormBooking>
    </BookingModal>
  );
}
