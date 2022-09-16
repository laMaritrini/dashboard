import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { BookingModal, FormBooking, TitleModal } from "../../styles/modal";
import { CloseButton, DefaultButton } from "../../styles/style-buttons";
import { createNewUser, selectStateUsers } from "./usersSlice";

export function AddUser({ openModal, handleClose }) {
  const users = useSelector(selectStateUsers);
  let id = Math.floor(Math.random() * 100000);

  const [user, setUser] = useState({
    photo: "",
    full_name: "",
    job_title: "",
    id: id,
    email: "",
    working_functions: "",
    phone_number: "",
    start_date: "",
    working_situation: "",
    password: "",
  });
  const dispatch = useDispatch();

  if (!openModal) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewUser(user));
    setUser(
      {
        photo: "",
        full_name: "",
        job_title: "",
        id: id,
        email: "",
        working_functions: "",
        phone_number: "",
        start_date: "",
        working_situation: "",
        password: "",
      },
      ...users
    );
    handleClose();
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <BookingModal>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <TitleModal>New User</TitleModal>

      <FormBooking>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            value={user.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            value={user.full_name}
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="job_title">Work Position:</label>

          <select
            value={user.job_title}
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
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="working_functions">Descriptions:</label>
          <input
            type="text "
            value={user.working_functions}
            name="working_functions"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            value={user.phone_number}
            name="phone_number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date:</label>
          <input
            type="date"
            value={user.start_date}
            name="start_date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="working_situation">Working status:</label>
          <select
            value={user.working_situation}
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
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <DefaultButton onClick={handleSubmit}>Save</DefaultButton>
      </FormBooking>
    </BookingModal>
  );
}
